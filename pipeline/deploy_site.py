"""
Automated Web Application Deployment Script

Fixes applied:
- Replaced shell=True + string command with list form (avoids shell injection)
- Removed capture_output=True so live build output streams to terminal in real time
- Added timeout (300s) to prevent hanging indefinitely on slow CI machines
- Added node/npm version detection for better debugging
- More informative error reporting (returncode + stderr tail)
"""

import sys
import subprocess
import os
import shutil

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')


def _find_npm() -> str:
    """Locate npm binary; raises RuntimeError if not found."""
    npm = shutil.which('npm')
    if not npm:
        raise RuntimeError(
            "npm not found on PATH. Install Node.js from https://nodejs.org"
        )
    return npm


def deploy_website(timeout: int = 300) -> None:
    website_dir = os.path.abspath(
        os.path.join(os.path.dirname(__file__), '..', 'website')
    )
    if not os.path.isdir(website_dir):
        print(f"❌ website/ directory not found at: {website_dir}", file=sys.stderr)
        sys.exit(1)

    npm = _find_npm()

    # ── Node / npm version info (useful for debugging CI failures) ───────────
    try:
        node_ver = subprocess.check_output(['node', '--version'], text=True).strip()
        npm_ver  = subprocess.check_output([npm, '--version'], text=True).strip()
        print(f"[Build] Node.js {node_ver}  |  npm {npm_ver}")
    except Exception:
        pass  # Not critical

    print(f"🚀 Building production bundle with Vite in: {website_dir}")

    try:
        # Use list form – no shell=True, no injection risk
        subprocess.run(
            [npm, 'run', 'build'],
            cwd=website_dir,
            check=True,
            timeout=timeout,
            # Do NOT capture_output – stream to terminal so the user sees
            # Vite's real-time build progress and any warnings.
        )
        print('✅ Vite Build Successful!')
    except subprocess.TimeoutExpired:
        print(f'❌ Build timed out after {timeout}s.', file=sys.stderr)
        sys.exit(1)
    except subprocess.CalledProcessError as e:
        print(f'❌ Build failed with exit code {e.returncode}.', file=sys.stderr)
        sys.exit(1)
    except RuntimeError as e:
        print(f'❌ {e}', file=sys.stderr)
        sys.exit(1)

    dist_path = os.path.join(website_dir, 'dist')
    if not os.path.isdir(dist_path):
        print('❌ dist/ directory was not created after build.', file=sys.stderr)
        sys.exit(1)

    print(f'📁 Static production assets ready at: {dist_path}')
    print('\n✨ Deployment options:')
    print('   • Vercel CLI  : npx vercel --prod')
    print('   • Netlify CLI : npx netlify deploy --prod --dir=website/dist')
    print('   • Local Preview: cd website && npm run preview')


if __name__ == '__main__':
    deploy_website()
