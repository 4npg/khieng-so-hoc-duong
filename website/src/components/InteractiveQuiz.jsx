import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';
import { Award, CheckCircle, XCircle, RotateCcw, ShieldCheck, ArrowRight } from 'lucide-react';

export default function InteractiveQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const q = quizQuestions[currentIdx];

  const handleSelectOption = (index) => {
    if (selectedOption !== null) return; // Prevent re-select
    setSelectedOption(index);
    setShowExplanation(true);
    if (index === q.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quizQuestions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setShowExplanation(false);
    setIsFinished(false);
  };

  return (
    <section id="quiz" className="py-20 relative cyber-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-amber-400" />
            Thách Thức Kiến Thức An Toàn Số
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            TRẮC NGHIỆM PHÁP LUẬT & <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">AN NINH MẠNG</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Thử tài nhận diện tình huống thực tế và nhận Chứng Nhận "Học Sinh Số An Toàn".
          </p>
        </div>

        {/* Main Quiz Box */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-cyan-500/30 shadow-2xl relative">
          
          {!isFinished ? (
            <div>
              {/* Question Progress Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-cyan-400">
                  CÂU HỎI {currentIdx + 1} / {quizQuestions.length}
                </span>
                <div className="flex gap-1.5">
                  {quizQuestions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all ${
                        i === currentIdx
                          ? 'w-6 bg-cyan-400 shadow-glow-blue'
                          : i < currentIdx
                          ? 'w-2 bg-emerald-400'
                          : 'w-2 bg-slate-800'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-relaxed">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {q.options.map((opt, idx) => {
                  let btnStyle = "glass-panel border-slate-800 hover:border-cyan-500/40 text-slate-200";
                  if (selectedOption !== null) {
                    if (idx === q.correctAnswer) {
                      btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold shadow-glow-emerald";
                    } else if (idx === selectedOption) {
                      btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200 font-bold";
                    } else {
                      btnStyle = "opacity-40 border-slate-900";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={selectedOption !== null}
                      className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {selectedOption !== null && idx === q.correctAnswer && (
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                      )}
                      {selectedOption === idx && idx !== q.correctAnswer && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Card */}
              {showExplanation && (
                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200 mb-6 space-y-1">
                  <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Giải Thích Pháp Luật:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
                </div>
              )}

              {/* Next Button */}
              {selectedOption !== null && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-glow-blue flex items-center gap-2 hover:brightness-110"
                  >
                    {currentIdx + 1 < quizQuestions.length ? 'Câu Tiếp Theo' : 'Xem Kết Quả & Chứng Nhận'} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Result Screen */
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-cyan-400 p-0.5 shadow-glow-blue">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                  <Award className="w-10 h-10 text-amber-400" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">HOÀN THÀNH BÀI THỬ THÁCH!</h3>
                <p className="text-slate-300 text-sm mt-1" aria-live="polite">
                  Bạn đã trả lời đúng <strong className="text-cyan-400 text-lg">{score} / {quizQuestions.length}</strong> câu hỏi.
                </p>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    score === quizQuestions.length
                      ? 'text-emerald-400'
                      : score >= Math.ceil(quizQuestions.length / 2)
                      ? 'text-amber-400'
                      : 'text-rose-400'
                  }`}
                >
                  {score === quizQuestions.length
                    ? '🏆 Xuất sắc! Bạn đã nắm vững toàn bộ kiến thức an toàn mạng!'
                    : score >= Math.ceil(quizQuestions.length / 2)
                    ? '👍 Tốt! Hãy ôn thêm các kiến thức còn thiếu để bảo vệ bản thân tốt hơn.'
                    : '📚 Hãy học thêm về Luật An ninh mạng 2018 và quy tắc 4 KHÔNG - 3 NÊN nhé!'}
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-panel border border-amber-500/30 max-w-md mx-auto space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  CHỨNG NHẬN VIRTUAL
                </div>
                <div className="text-lg font-bold text-white">"HỌC SINH SỐ BẢN LĨNH & AN TOÀN"</div>
                <p className="text-xs text-slate-400">
                  Bạn đã làm chủ các quy tắc 4 Không - 3 Nên và nắm chắc Luật An ninh mạng 2018.
                </p>
              </div>

              <div>
                <button
                  onClick={handleRestart}
                  className="px-6 py-3 rounded-xl bg-slate-800 text-slate-200 font-bold text-sm hover:bg-slate-700 inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Thử Lại Bài Trắc Nghiệm
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
