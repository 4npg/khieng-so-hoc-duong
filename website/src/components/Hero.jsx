import React from 'react';
import { ShieldCheck, Play, Download, Lock, AlertTriangle, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-grid">
      {/* Background Neon Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest shadow-glow-blue">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              Chiến Dịch Tuyên Truyền Pháp Luật Số 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              BẬT CHẾ ĐỘ AN TOÀN <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent glow-text-cyan">
                LÀM CHỦ KHÔNG GIAN SỐ
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Trang bị kiến thức pháp luật an ninh mạng, nhận diện chiêu trò lừa đảo trực tuyến và bảo vệ dữ liệu cá nhân cho <strong>học sinh THPT, phụ huynh và giáo viên Việt Nam</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#video"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-glow-blue hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Play className="w-5 h-5 fill-slate-950" /> Xem Phim Ngắn Tuyên Truyền
              </a>
              
              <a
                href="#posters"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-slate-200 font-semibold text-sm hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all"
              >
                <Download className="w-5 h-5 text-cyan-400" /> Bộ Ấn Phẩm AI Chiếu Rạp
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">100%</div>
                <div className="text-xs text-slate-400">Chuẩn Pháp Luật VN</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">5+</div>
                <div className="text-xs text-slate-400">Kịch Bản Lừa Đảo Phổ Biến</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">AI Powered</div>
                <div className="text-xs text-slate-400">Veo 3 & Flux Studio</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-panel p-3 border border-cyan-500/30 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <img
                  src="/assets/poster_main.jpg"
                  alt="Poster Khiên Số Học Đường"
                  loading="lazy"
                  width="600"
                  height="750"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d18] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-xl border border-cyan-500/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-cyan-300 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Khung Pháp Lý: NĐ 13/2023 & Luật ANM 2018
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                      OFFICIAL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
