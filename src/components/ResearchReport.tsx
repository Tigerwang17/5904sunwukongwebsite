import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, X, ChevronRight } from 'lucide-react';

export function ResearchReport() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="report" className="min-h-screen py-12 px-6 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1618385418700-35dc948cdeec?w=1920)',
          backgroundSize: 'cover',
          filter: 'sepia(1)',
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl mb-4 text-[#b8860b]">研究報告</h2>
          <p className="text-xl text-[#8b7355]">Research Paper</p>
        </motion.div>

        {/* Report Cover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div 
            className="border-4 border-[#8b7355] bg-black/80 p-12 cursor-pointer group"
            onClick={() => setIsExpanded(true)}
            style={{
              clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))',
            }}
          >
            {/* Corner Ornaments */}
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#b8860b]" />
              <div className="absolute top-0 left-0 w-1 h-full bg-[#b8860b]" />
            </div>
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-0 right-0 w-full h-1 bg-[#b8860b]" />
              <div className="absolute top-0 right-0 w-1 h-full bg-[#b8860b]" />
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#b8860b]" />
              <div className="absolute bottom-0 left-0 w-1 h-full bg-[#b8860b]" />
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16">
              <div className="absolute bottom-0 right-0 w-full h-1 bg-[#b8860b]" />
              <div className="absolute bottom-0 right-0 w-1 h-full bg-[#b8860b]" />
            </div>

            <div className="text-center">
              <FileText className="w-20 h-20 text-[#b8860b] mx-auto mb-6" />
              
              <h3 className="text-4xl mb-6 text-[#b8860b] group-hover:text-[#dc143c] transition-colors">
                孫悟空形象的跨文化演化研究
              </h3>
              <p className="text-xl text-[#8b7355] mb-8">
                A Cross-Cultural Study on the Evolution of Sun Wukong
              </p>

              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-8" />

              {/* Abstract */}
              <div className="text-left max-w-2xl mx-auto mb-8">
                <h4 className="text-lg mb-4 text-[#b8860b]">摘要 | Abstract</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  本研究運用數字人文方法，系統考察孫悟空形象從古印度哈努曼神話到當代數字遊戲的演化歷程。通過文獻計量、圖像分析與AI輔助建模，揭示了該形象在不同文化語境中的轉譯機制與符號變遷。研究發現，孫悟空形象經歷了宗教神話、文學經典、戲曲藝術、影視傳播和數字重構五個階段，每個階段都體現了技術媒介對文化符號的深刻重塑。
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This study employs digital humanities methodologies to systematically examine the evolution of Sun Wukong from ancient Indian Hanuman mythology to contemporary digital games. Through bibliometric analysis, image processing, and AI-assisted modeling, we reveal the translation mechanisms and symbolic transformations across different cultural contexts...
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-[#b8860b] group-hover:text-[#dc143c] transition-colors">
                <span>點擊展開全文</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Expanded Report Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-40"
              onClick={() => setIsExpanded(false)}
            />

            {/* Report Content */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-4xl bg-[#1a1a1a] border-l-4 border-[#b8860b] z-50 overflow-y-auto"
            >
              <div className="sticky top-0 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#8b7355] p-6 flex items-center justify-between z-10">
                <h3 className="text-2xl text-[#b8860b]">研究報告全文</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="w-10 h-10 flex items-center justify-center border border-[#8b7355] hover:border-[#dc143c] hover:bg-[#dc143c]/10 transition-all"
                >
                  <X className="w-6 h-6 text-[#b8860b]" />
                </button>
              </div>

              <div className="p-12">
                {/* Vertical Text Layout Simulation */}
                <div className="space-y-12">
                  <section>
                    <h4 className="text-2xl mb-6 text-[#b8860b] border-l-4 border-[#dc143c] pl-4">
                      一、引言
                    </h4>
                    <div className="text-gray-300 leading-loose space-y-4">
                      <p className="relative pl-8">
                        <span className="absolute left-0 top-0 text-[#dc143c]">•</span>
                        孫悟空作為東亞文化圈最具代表性的神話形象之一，其演化歷程跨越千年、橫跨多個文化圈層。從印度史詩《羅摩衍那》中的哈努曼，到中國明代小說《西遊記》中的齊天大聖，再到當代數字遊戲《黑神話：悟空》中的次世代角色，這一形象經歷了宗教、文學、戲曲、影視、數字媒體等多重轉譯。
                      </p>
                      <p className="relative pl-8">
                        <span className="absolute left-0 top-0 text-[#dc143c]">•</span>
                        數字人文技術的發展為我們提供了全新的研究視角。本研究綜合運用文本挖掘、圖像識別、語義網絡分析等方法，構建了一個跨時空的孫悟空形象數據庫，試圖揭示這一文化符號在不同歷史時期和媒介環境中的變遷規律。
                      </p>
                    </div>
                  </section>

                  <section>
                    <h4 className="text-2xl mb-6 text-[#b8860b] border-l-4 border-[#dc143c] pl-4">
                      二、研究方法
                    </h4>
                    <div className="text-gray-300 leading-loose space-y-4">
                      <p className="relative pl-8">
                        <span className="absolute left-0 top-0 text-[#dc143c]">•</span>
                        <strong className="text-[#b8860b]">文獻計量分析：</strong>收集整理相關文獻3000餘篇，使用VOSviewer進行共現分析，繪製學術研究網絡圖譜。
                      </p>
                      <p className="relative pl-8">
                        <span className="absolute left-0 top-0 text-[#dc143c]">•</span>
                        <strong className="text-[#b8860b]">圖像語義分析：</strong>採集不同時期孫悟空形象圖片500餘幅，運用深度學習技術提取視覺特徵，構建演化時間軸。
                      </p>
                      <p className="relative pl-8">
                        <span className="absolute left-0 top-0 text-[#dc143c]">•</span>
                        <strong className="text-[#b8860b]">GIS空間映射：</strong>標注重要文化遺址與作品誕生地，分析地理因素對形象傳播的影響。
                      </p>
                      <p className="relative pl-8">
                        <span className="absolute left-0 top-0 text-[#dc143c]">•</span>
                        <strong className="text-[#b8860b]">AI生成實驗：</strong>使用Stable Diffusion等工具，模擬不同風格的孫悟空形象，探索技術對藝術創作的可能性。
                      </p>
                    </div>
                  </section>

                  <section>
                    <h4 className="text-2xl mb-6 text-[#b8860b] border-l-4 border-[#dc143c] pl-4">
                      三、演化階段分析
                    </h4>
                    <div className="space-y-6">
                      <div className="bg-black/40 border border-[#8b7355] p-6">
                        <h5 className="text-xl mb-3 text-[#b8860b]">階段一：神話原型（公元前5世紀-7世紀）</h5>
                        <p className="text-gray-300 leading-loose">
                          印度哈努曼神話作為猴神形象的源頭，具有風神之子、力大無窮、忠誠護法等核心特徵。這些特質通過佛教東傳路徑影響了中國本土文化。
                        </p>
                      </div>

                      <div className="bg-black/40 border border-[#8b7355] p-6">
                        <h5 className="text-xl mb-3 text-[#b8860b]">階段二：文學經典化（宋元-明代）</h5>
                        <p className="text-gray-300 leading-loose">
                          宋元話本中出現"猴行者"形象，明代吳承恩《西遊記》集大成，賦予孫悟空反叛精神、幽默性格和成長敘事，成為中國文學史上的不朽形象。
                        </p>
                      </div>

                      <div className="bg-black/40 border border-[#8b7355] p-6">
                        <h5 className="text-xl mb-3 text-[#b8860b]">階段三：戲曲程式化（清代-民國）</h5>
                        <p className="text-gray-300 leading-loose">
                          京劇猴戲形成獨特的表演程式，孫悟空形象高度符號化：猴相、身段、把子功夫等舞台元素固定化，成為中國戲曲藝術的代表。
                        </p>
                      </div>

                      <div className="bg-black/40 border border-[#8b7355] p-6">
                        <h5 className="text-xl mb-3 text-[#b8860b]">階段四：影視傳播（20世紀）</h5>
                        <p className="text-gray-300 leading-loose">
                          1986年電視劇《西遊記》成為現象級作品，六小齡童版孫悟空成為集體記憶。影視媒介使形象傳播突破地域和階層限制，成為全民文化符號。
                        </p>
                      </div>

                      <div className="bg-black/40 border border-[#8b7355] p-6">
                        <h5 className="text-xl mb-3 text-[#b8860b]">階段五：數字重構（21世紀）</h5>
                        <p className="text-gray-300 leading-loose">
                          遊戲《黑神話：悟空》運用虛幻引擎5技術，實現超寫實渲染。AI藝術工具使普通用戶也能參與形象再創作，形象演化進入去中心化時代。
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h4 className="text-2xl mb-6 text-[#b8860b] border-l-4 border-[#dc143c] pl-4">
                      四、研究結論
                    </h4>
                    <div className="text-gray-300 leading-loose space-y-4">
                      <p className="relative pl-8">
                        <span className="absolute left-0 top-0 text-[#dc143c]">•</span>
                        孫悟空形象的演化本質上是一個<strong className="text-[#b8860b]">技術-媒介-文化</strong>互動的過程。每一次媒介革命都帶來形象的重新編碼。
                      </p>
                      <p className="relative pl-8">
                        <span className="absolute left-0 top-0 text-[#dc143c]">•</span>
                        形象的核心符號（反叛、神通、護法）保持穩定，而外在表現形式（視覺、敘事、互動）隨技術發展而不斷更新。
                      </p>
                      <p className="relative pl-8">
                        <span className="absolute left-0 top-0 text-[#dc143c]">•</span>
                        數字人文工具不僅是研究手段，更參與了文化符號的生產過程。AI生成藝術正在重新定義"原創"與"演繹"的邊界。
                      </p>
                      <p className="relative pl-8">
                        <span className="absolute left-0 top-0 text-[#dc143c]">•</span>
                        未來研究方向包括：虛擬現實中的沉浸式體驗、區塊鏈技術對IP版權的重構、元宇宙環境下的跨文化認同等。
                      </p>
                    </div>
                  </section>

                  <section className="border-t-2 border-[#8b7355] pt-8">
                    <h4 className="text-2xl mb-6 text-[#b8860b]">參考文獻</h4>
                    <div className="text-sm text-gray-400 leading-loose space-y-2">
                      <p>[1] 吳承恩. 西遊記[M]. 明代刊本, 1592.</p>
                      <p>[2] 季羨林. 羅摩衍那與西遊記比較研究[J]. 北京大學學報, 1982.</p>
                      <p>[3] Dudbridge, Glen. The Hsi-yu chi: A Study of Antecedents to the Sixteenth-Century Chinese Novel[M]. Cambridge University Press, 1970.</p>
                      <p>[4] 遊戲科學. 黑神話：悟空美術設定集[M]. 2024.</p>
                      <p>[5] Moretti, Franco. Distant Reading[M]. Verso Books, 2013.</p>
                    </div>
                  </section>

                  {/* Cinnabar Annotations Overlay */}
                  <div className="mt-12 p-6 border-2 border-[#dc143c] bg-[#dc143c]/5">
                    <p className="text-[#dc143c] text-center">
                      <strong>硃批：</strong>此文運用數字人文新法，考據嚴謹，論證精當，可為後學楷模。
                    </p>
                    <p className="text-[#8b7355] text-center text-sm mt-2">
                      Cinnabar Annotation: Exemplary use of digital humanities methodology
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
