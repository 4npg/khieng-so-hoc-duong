import React, { useState } from 'react';
import { Play, Pause, Film, Volume2, Sparkles, Clock, Clapperboard, FileText, CheckCircle2 } from 'lucide-react';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeScene, setActiveScene] = useState(0);

  const scenes = [
    {
      id: 1,
      time: "00:00 - 00:30",
      title: "Cảnh 1: Cái Bẫy 'Việc Nhẹ Lương Cao'",
      desc: "Học sinh Minh (17 tuổi) lướt Facebook thấy thông báo việc làm online 300k/ngày. Minh háo hức nhắn tin và nạp 200k cọc ban đầu.",
      shot: "Góc quay cận cảnh (Close-up) ánh mắt phản chiếu màn hình điện thoại lóe sáng.",
      audio: "Tiếng thông báo tin nhắn messenger nổ dồn dập, nhạc đệm tiết tấu nhanh, hồi hộp.",
      prompt: "Photorealistic scene of a Vietnamese male high school student in school uniform staring intently at smartphone screen in dim bedroom, blue light reflecting on eyes, modern cyber aesthetic, cinematic 8k resolution."
    },
    {
      id: 2,
      time: "00:30 - 01:15",
      title: "Cảnh 2: Cuộc Gọi Deepfake Mẹ Bị Tai Nạn",
      desc: "Màn hình rung điện thoại hiện video call từ mẹ. Hình ảnh mẹ giật giật 5 giây bảo đang ở viện khẩn cấp, đòi chuyển 10 triệu.",
      shot: "Góc quay over-the-shoulder nhìn màn hình điện thoại bị chập chờn với khuôn mặt AI giật lag.",
      audio: "Âm thanh nhiễu sóng viễn thông, giọng nói gấp gáp bị méo nhẹ.",
      prompt: "Detailed shot of smartphone screen showing glitching deepfake video call of a Vietnamese middle-aged mother, distorted pixel artifacts around eyes, high urgency, film noir cinematic lighting."
    },
    {
      id: 3,
      time: "00:15 - 02:30",
      title: "Cảnh 3: Kích Hoạt Khiên Số & Bật 4 Không",
      desc: "Minh kịp nhớ lại bài giảng pháp luật, bấm nút 'Bật Chế Độ An Toàn', tắt máy và gọi lại số điện thoại di động chính thức của mẹ để kiểm chứng.",
      shot: "Góc quay rộng (Wide shot) hiệu ứng đồ họa 3D holographic 'Khiên Số' bảo vệ bọc quanh nhân vật.",
      audio: "Nhạc nền chuyển hướng hùng hưng, tiếng hiệu ứng âm thanh kích hoạt khiên điện tử 'Swoosh/Shield Up'.",
      prompt: "Futuristic visual effects scene: Vietnamese high school boy tapping smartphone screen, triggering a glowing cyan energy shield expanding around him, high-tech security hologram interface floating."
    },
    {
      id: 4,
      time: "02:30 - 03:40",
      title: "Cảnh 4: Điểm Tựa Pháp Luật & Tổng Đài 111",
      desc: "Giáo viên và Công an An ninh mạng hướng dẫn học sinh trình báo sự việc qua đường dây 156/111, thu hồi dữ liệu và xử lý kẻ vi phạm.",
      shot: "Góc quay ngang tầm mắt (Eye-level) phòng máy tính học đường sáng rực ánh sáng mặt trời.",
      audio: "Giọng thuyết minh ElevenLabs ấm áp, tin cậy, thông điệp pháp luật truyền cảm hứng.",
      prompt: "Warm futuristic classroom scene, friendly female police officer in uniform and school teacher explaining cyber law on interactive digital smartboard to group of attentive high school students."
    }
  ];

  return (
    <section id="video" className="py-20 bg-[#0c1020] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Film className="w-4 h-4 text-purple-400" />
            Veo 3 / Kling AI Production Storyboard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            PHIM NGẮN TUYÊN TRUYỀN: <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">"RANH GIỚI 1 CHẠM"</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Kịch bản phim 3D/AI độ dài 3-5 phút được thiết kế tối ưu hóa cho mô hình tạo video thế hệ mới Veo 3 & ElevenLabs Voice.
          </p>
        </div>

        {/* Video Player Mockup Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-purple-500/30 shadow-2xl bg-black group">
              
              {/* Fake Video Screen Screen */}
              <div className="relative aspect-video flex items-center justify-center bg-gradient-to-br from-slate-950 via-[#101426] to-slate-900">
                <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
                
                {/* Scene visual backdrop preview */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
                      VEO 3 SCENE #{scenes[activeScene].id} • {scenes[activeScene].time}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-purple-950/80 text-purple-300 text-xs font-medium">
                      HD 1080P • 60 FPS
                    </span>
                  </div>

                  <div className="text-center px-4 py-8 max-w-xl mx-auto glass-panel rounded-xl border border-purple-500/20 my-auto">
                    <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-2 animate-bounce" />
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {scenes[activeScene].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      "{scenes[activeScene].desc}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Volume2 className="w-4 h-4 text-emerald-400" /> ElevenLabs Voice: Nam Miền Bắc Thuyết Minh</span>
                    <span className="font-mono">03:45 / 04:30</span>
                  </div>
                </div>

                {/* Big Play Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="z-20 w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 text-slate-950 flex items-center justify-center shadow-glow-blue hover:scale-110 active:scale-95 transition-all"
                >
                  {isPlaying ? <Pause className="w-8 h-8 fill-slate-950" /> : <Play className="w-8 h-8 fill-slate-950 ml-1" />}
                </button>
              </div>

              {/* Player Control Bar */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <span className="text-xs font-mono text-slate-400">Timeline Scene Interactive Player</span>
                </div>
                <div className="flex gap-2">
                  {scenes.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveScene(idx)}
                      className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                        activeScene === idx
                          ? 'bg-cyan-500 text-slate-950 shadow-glow-blue'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      Cảnh {s.id}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Active Scene Prompt Specification Panel */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Clapperboard className="w-4 h-4" /> Thông Số Cảnh Phim #{scenes[activeScene].id}
                </span>
                <span className="text-xs text-slate-400 font-mono">{scenes[activeScene].time}</span>
              </div>

              <div className="mt-4 space-y-3 text-xs">
                <div>
                  <span className="font-bold text-slate-300">Góc Quay (Camera Shot):</span>
                  <p className="text-slate-400 mt-0.5">{scenes[activeScene].shot}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-300">Âm Thanh & Nhạc Nền:</span>
                  <p className="text-slate-400 mt-0.5">{scenes[activeScene].audio}</p>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <span className="font-bold text-cyan-300 flex items-center gap-1 mb-1">
                    <Sparkles className="w-3.5 h-3.5" /> Prompt Veo 3 / Kling Production:
                  </span>
                  <div className="p-2.5 rounded-lg bg-slate-950 font-mono text-[11px] text-slate-300 border border-slate-800 leading-relaxed overflow-x-auto">
                    {scenes[activeScene].prompt}
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
