import React, { useState } from 'react';
import { scamsData } from '../data/scamsData';
import { Briefcase, Gamepad2, Video, GraduationCap, Link2, AlertTriangle, ShieldCheck, ArrowRight, Info } from 'lucide-react';

export default function ScamAlertsInfographic() {
  const [selectedScam, setSelectedScam] = useState(scamsData[0]);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-cyan-400" />;
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6 text-purple-400" />;
      case 'Video': return <Video className="w-6 h-6 text-rose-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-amber-400" />;
      case 'Link2': return <Link2 className="w-6 h-6 text-emerald-400" />;
      default: return <AlertTriangle className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="scams" className="py-20 relative cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            Nhận Diện Thủ Đoạn Lừa Đảo Trực Tuyến 2026
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            5 CHIÊU TRÒ LỪA ĐẢO NHẮM VÀO <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">HỌC SINH THPT</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Tổng hợp dữ liệu thực tế từ Cục An toàn thông tin và Bộ Công an Việt Nam.
          </p>
        </div>

        {/* Infographic Image Banner Header */}
        <div className="mb-12 rounded-2xl overflow-hidden glass-panel border border-cyan-500/30 shadow-xl">
          <img
            src="/assets/infographic_banner.jpg"
            alt="Infographic Cảnh Báo Lừa Đảo Mạng"
            className="w-full h-auto max-h-[350px] object-cover"
          />
        </div>

        {/* Interactive Scam Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Scam List Column */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
              Danh sách chiêu trò lừa đảo:
            </h3>
            {scamsData.map((scam) => (
              <button
                key={scam.id}
                onClick={() => setSelectedScam(scam)}
                className={`w-full text-left p-4 rounded-xl transition-all border ${
                  selectedScam.id === scam.id
                    ? 'glass-panel border-cyan-400/80 bg-cyan-950/40 shadow-glow-blue scale-[1.01]'
                    : 'glass-panel border-slate-800/80 hover:border-slate-700 bg-slate-900/40'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    {getIcon(scam.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                        {scam.badge}
                      </span>
                      <span className="text-[11px] text-rose-400 font-semibold">
                        Mức độ: {scam.severity}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-1 truncate">
                      {scam.title}
                    </h4>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Scam Detail Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 space-y-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    {getIcon(selectedScam.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-rose-400 uppercase tracking-widest">
                      Chi tiết chiêu trò
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {selectedScam.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800 mb-6">
                  {selectedScam.description}
                </p>

                {/* Tactics Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" /> Kịch bản kẻ gian thường dùng:
                  </h4>
                  <ul className="space-y-2">
                    {selectedScam.tactics.map((tactic, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                        <span>{tactic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Legal Reference & Action tip */}
              <div className="pt-6 border-t border-slate-800/80 space-y-3">
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-emerald-300">Căn Cứ Pháp Lý Xử Lý:</div>
                    <div className="text-xs text-slate-300 mt-0.5">{selectedScam.legalRef}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3">
                  <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-cyan-300">Khuyên Dùng Cho Học Sinh:</div>
                    <div className="text-xs text-slate-300 mt-0.5">{selectedScam.protectionTip}</div>
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
