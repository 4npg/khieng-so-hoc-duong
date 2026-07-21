import React, { useState } from 'react';
import { Download, Sparkles, Image, Eye, CheckCircle2, Layers } from 'lucide-react';

export default function PosterGallery() {
  const [selectedAsset, setSelectedAsset] = useState('poster');

  const assets = [
    {
      id: 'poster',
      title: 'Poster Truyền Thông A3 Chuẩn In',
      type: 'A3 Print Version (300 DPI)',
      specs: 'Kích thước 3508 x 4961 px • Định dạng RGB / CMYK ready',
      image: '/assets/poster_main.jpg',
      prompt: 'A striking, ultra-modern cyber safety awareness poster for Vietnamese high school students titled Khiên Số Học Đường...',
      negPrompt: 'text blur, oversaturated, lowres, distorted faces, bad anatomy, noise'
    },
    {
      id: 'fb-cover',
      title: 'Ảnh Bìa Facebook Fanpage Trường',
      type: 'Facebook Banner (16:9)',
      specs: 'Kích thước 1920 x 1080 px • Tối ưu hiển thị Mobile & Desktop',
      image: '/assets/facebook_cover.jpg',
      prompt: 'A sleek horizontal digital header banner for Facebook page titled Khiên Số Học Đường...',
      negPrompt: 'cropped logo, blurry watermark, low resolution'
    },
    {
      id: 'infographic',
      title: 'Infographic Đồ Họa Cảnh Báo Lừa Đảo',
      type: 'Infographic Banner',
      specs: 'Kích thước 1920 x 1080 px • Visual Card breakdown cho mạng xã hội',
      image: '/assets/infographic_banner.jpg',
      prompt: 'An infographic visual header illustrating 5 major online scam warnings and personal data security for students in Vietnam...',
      negPrompt: 'disorganized layout, dark unreadable text, low contrast'
    }
  ];

  const currentAsset = assets.find(a => a.id === selectedAsset) || assets[0];

  return (
    <section id="posters" className="py-20 bg-[#0c1020] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Bộ Ấn Phẩm Đồ Họa AI Studio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            ẤN PHẨM TRUYỀN THÔNG <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">CHẤT LƯỢNG CAO</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Đã sẵn sàng tải xuống ở độ phân giải gốc để in ấn A3 tại trường học hoặc đăng tải mạng xã hội.
          </p>
        </div>

        {/* Asset Selector Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {assets.map((asset) => (
            <button
              key={asset.id}
              onClick={() => setSelectedAsset(asset.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                selectedAsset === asset.id
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-glow-blue'
                  : 'glass-panel text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              {asset.title}
            </button>
          ))}
        </div>

        {/* Preview Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden glass-panel p-3 border border-cyan-500/30 shadow-2xl max-w-md w-full">
              <img
                src={currentAsset.image}
                alt={currentAsset.title}
                loading="lazy"
                className="w-full h-auto rounded-xl object-cover"
                onError={(e) => {
                  e.currentTarget.alt = 'Hình ảnh chưa được tạo';
                  e.currentTarget.style.minHeight = '200px';
                  e.currentTarget.style.background = 'rgba(18,24,41,0.8)';
                }}
              />
              <div className="mt-3 flex items-center justify-between px-2">
                <span className="text-xs text-slate-400 font-mono">{currentAsset.specs}</span>
                <a
                  href={currentAsset.image}
                  download
                  className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold flex items-center gap-1 hover:brightness-110"
                >
                  <Download className="w-3.5 h-3.5" /> Tải Tệp Gốc
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800">
                  {currentAsset.type}
                </span>
                <h3 className="text-2xl font-black text-white mt-2">{currentAsset.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{currentAsset.specs}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Flux / GPT Image Prompt Production-Ready:
                  </h4>
                  <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 border border-slate-800 leading-relaxed">
                    {currentAsset.prompt}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">
                    Negative Prompt:
                  </h4>
                  <div className="p-2.5 rounded-lg bg-slate-950 font-mono text-xs text-rose-300/80 border border-rose-950">
                    {currentAsset.negPrompt}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={currentAsset.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:underline"
                >
                  <Eye className="w-4 h-4" /> Mở xem full màn hình
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
