"""
Automated Web Application Deployment Script
"""

import subprocess
import sys
import os

def deploy_website():
    print("🚀 Step 1: Building production bundle with Vite...")
    website_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "website"))
    
    try:
        res = subprocess.run("npm run build", cwd=website_dir, shell=True, check=True, capture_output=True, text=True)
        print("✅ Vite Build Successful!")
        print(res.stdout[:200])
    except subprocess.CalledProcessError as e:
        print("❌ Build failed:", e.stderr)
        sys.exit(1)

    dist_path = os.path.join(website_dir, "dist")
    print(f"📁 Static production assets ready at: {dist_path}")
    print("✨ Step 2: Deployment options:")
    print("   - Vercel CLI: npx vercel --prod")
    print("   - Netlify CLI: npx netlify deploy --prod --dir=dist")
    print("   - Local Preview: npm run preview")

if __name__ == "__main__":
    deploy_website()
