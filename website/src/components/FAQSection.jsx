import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-20 bg-[#0a0d18] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            Giải Đáp Thắc Mắc Thường Gặp
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            HỎI ĐÁP PHÁP LUẬT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AN TOÀN MẠNG</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            Dành cho Học sinh, Phụ huynh và Giáo viên nhà trường.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-100 hover:text-cyan-400 transition-colors"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base">
                    <MessageSquare className="w-5 h-5 text-cyan-400 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 leading-relaxed whitespace-pre-line bg-slate-950/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
