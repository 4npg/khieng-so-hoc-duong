import React, { useState, useEffect, useCallback } from 'react';
import { ShieldCheck, Menu, X, Download, HelpCircle, FileText, Video, Award } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  // Close menu when viewport becomes desktop size
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const close = () => setIsOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-800/80 bg-[#0a0d18]/80"
      role="navigation"
      aria-label="Điều hướng chính"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-xl shadow-glow-blue text-slate-950 font-black">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                KHIÊN SỐ HỌC ĐƯỜNG
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                THPT 2026
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Trang chủ</a>
            <a href="#video" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Video className="w-4 h-4 text-cyan-400" /> Phim ngắn
            </a>
            <a href="#scams" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-400" /> Cảnh báo Lừa đảo
            </a>
            <a href="#posters" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Download className="w-4 h-4 text-purple-400" /> Ấn phẩm AI
            </a>
            <a href="#quiz" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" /> Thách đố pháp luật
            </a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-slate-400" /> Hỏi đáp
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="#quiz"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:brightness-110 shadow-glow-blue transition-all"
            >
              Kiểm Tra An Toàn
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass-panel border-b border-slate-800 px-4 pt-2 pb-4 space-y-2 text-sm font-medium"
        >
          <a href="#hero"    onClick={close} className="block py-2 text-slate-200 hover:text-cyan-400">Trang chủ</a>
          <a href="#video"   onClick={close} className="block py-2 text-slate-200 hover:text-cyan-400">Phim ngắn Tuyên truyền</a>
          <a href="#scams"   onClick={close} className="block py-2 text-slate-200 hover:text-cyan-400">Cảnh báo Lừa đảo</a>
          <a href="#posters" onClick={close} className="block py-2 text-slate-200 hover:text-cyan-400">Tải Ấn phẩm AI</a>
          <a href="#quiz"    onClick={close} className="block py-2 text-slate-200 hover:text-cyan-400">Trắc nghiệm An toàn số</a>
          <a href="#faq"     onClick={close} className="block py-2 text-slate-200 hover:text-cyan-400">Hỏi đáp Pháp luật</a>
          <a
            href="#quiz"
            onClick={close}
            className="block mt-2 text-center py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold"
          >
            Kiểm Tra An Toàn
          </a>
        </div>
      )}
    </nav>
  );
}
