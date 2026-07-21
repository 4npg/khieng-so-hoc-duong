import React from 'react';
import { ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-cyan-500 rounded-lg text-slate-950 font-black">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-base font-extrabold text-white tracking-wider">
                KHIÊN SỐ HỌC ĐƯỜNG
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Dự án chiến dịch truyền thông sáng tạo an toàn thông tin & bảo vệ dữ liệu cá nhân cho học sinh Việt Nam. Tuyên truyền pháp luật an ninh mạng bằng giải pháp công nghệ AI automation hiện đại.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Căn Cứ Pháp Lý</div>
            <ul className="space-y-1.5">
              <li><a href="https://luatvietnam.vn" target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">Luật An ninh mạng 2018 <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://luatvietnam.vn" target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">Nghị định 13/2023/NĐ-CP <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://luatvietnam.vn" target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">Bộ luật Hình sự 2015 (Đ174, Đ290) <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Công Nghệ Sản Xuất AI</div>
            <ul className="space-y-1.5 text-slate-400">
              <li>• GPT Image Studio & Flux AI</li>
              <li>• Veo 3 / Kling Storyboard</li>
              <li>• ElevenLabs Voice Studio</li>
              <li>• Automated FFmpeg Pipeline</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            © 2026 Khiên Số Học Đường • Competition Submission.
          </div>
          <div className="flex items-center gap-1">
            <span>Xây dựng với</span> <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> <span>cho Học sinh THPT Việt Nam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
