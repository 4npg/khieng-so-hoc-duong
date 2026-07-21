import React from 'react';
import { legalFramework } from '../data/legalData';
import { ShieldCheck, PhoneCall, CheckCircle, XCircle, Scale, AlertOctagon } from 'lucide-react';

export default function LegalTipsSection() {
  return (
    <section id="legal" className="py-20 bg-[#0a0d18] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Scale className="w-4 h-4 text-emerald-400" />
            Lá Chắn Pháp Lý & Quy Tắc An Toàn
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            QUY TẮC BẢO VỆ <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">"4 KHÔNG - 3 NÊN"</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Áp dụng theo Luật An ninh mạng 2018 & Nghị định 13/2023/NĐ-CP bảo vệ dữ liệu cá nhân.
          </p>
        </div>

        {/* 4 No & 3 Yes Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* 4 NO */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-rose-500/30">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="p-3 rounded-xl bg-rose-950/80 text-rose-400 border border-rose-500/40">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-rose-400">4 KHÔNG (TUYỆT ĐỐI NÉ)</h3>
                <p className="text-xs text-slate-400">Hành động bảo vệ tài chính & dữ liệu</p>
              </div>
            </div>

            <div className="space-y-4">
              {legalFramework.rules4No3Yes.fourNo.map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-slate-950/60 border border-rose-950/80">
                  <h4 className="text-sm font-bold text-rose-300 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3 YES */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/30">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="p-3 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/40">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-400">3 NÊN (CHỦ ĐỘNG BẢO VỆ)</h3>
                <p className="text-xs text-slate-400">Hành vi ứng xử số thông minh</p>
              </div>
            </div>

            <div className="space-y-4">
              {legalFramework.rules4No3Yes.threeYes.map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-slate-950/60 border border-emerald-950/80">
                  <h4 className="text-sm font-bold text-emerald-300 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Emergency Helplines Callout */}
        <div className="glass-panel p-8 rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-slate-950 via-[#0d1527] to-slate-950">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
              <PhoneCall className="w-4 h-4 text-cyan-400 animate-pulse" />
              Đường Dây Nóng Khẩn Cấp Tại Việt Nam
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              CẦN HỖ TRỢ PHÁP LÝ HOẶC BÁO CÁO SỰ CỐ?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalFramework.emergencyContacts.map((contact, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 text-center hover:border-cyan-400/50 transition-all">
                <div className="text-2xl font-black text-cyan-400 tracking-wider mb-1">
                  {contact.phone}
                </div>
                <div className="text-sm font-bold text-white mb-1">{contact.name}</div>
                <div className="text-xs text-slate-400">{contact.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
