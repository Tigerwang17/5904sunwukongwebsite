import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from './ui/badge';
import tvSeriesImage from 'figma:asset/db881157d179746437645570eb0d44995436c154.png';

const timelineData = [
  {
    id: 1,
    era: '古印度時期',
    year: '公元前5世紀',
    title: '哈努曼神話起源',
    quote: '風神之子，力大無窮',
    description: '印度史詩《羅摩衍那》記載哈努曼神猴傳說，作為風神之子擁有無窮神力與變化之術。這位虔誠的羅摩追隨者能夠跨越海洋、移動山嶽、變換形體，展現超凡的智慧與勇氣。哈努曼形象深刻影響後世東亞文化，成為孫悟空原型的重要文化基因。其忠誠、勇武、神通廣大的特質，透過絲綢之路與佛教傳播，逐漸融入中國本土神話體系，開啟神猴形象的跨文化演化歷程，為後世文學創作奠定堅實的神話基礎。',
    image: 'https://images.unsplash.com/photo-1610021912179-75ed39b042e9?w=400',
  },
  {
    id: 2,
    era: '唐代',
    year: '公元7世紀',
    title: '玄奘西行',
    quote: '真經萬里取，苦行十七載',
    description: '公元629年，玄奘法師從長安出發，歷經十七年艱辛跋涉前往天竺求取真經，途經沙漠雪山，克服無數險阻。《大唐西域記》詳實記錄這段傳奇旅程，為後世文學提供豐富素材。民間傳說逐漸為玄奘添加神異護法，想像有神猴、天將相伴保護，化解妖魔鬼怪的威脅。這些口耳相傳的故事成為《西遊記》創作的歷史原型，真實的取經壯舉與虛構的神話元素交織融合，塑造出中國文學史上最動人的取經敘事傳統。',
    image: 'https://images.unsplash.com/photo-1654613656561-877598f1a1a0?w=400',
  },
  {
    id: 3,
    era: '宋元話本',
    year: '公元12-13世紀',
    title: '猴行者形象',
    description: '宋元時期說唱文學繁盛，瓦舍勾欄中藝人演述《大唐三藏取經詩話》等話本，首次出現「猴行者」這一護法角色。這個早期形象尚未定型，既有神通又帶野性，協助唐僧降妖伏魔。元雜劇《西遊記》進一步豐富猴行者性格，賦予其機智幽默的特質。民間藝人在表演中不斷加工創造，使猴行者從簡單的護法神逐漸發展為具有複雜性格的文學形象，為明代《西遊記》中孫悟空的最終成型積累大量民間文學養分與集體想像。',
    quote: '神通廣大，護法取經',
    image: 'https://images.unsplash.com/photo-1748141950650-f55779368be7?w=400',
  },
  {
    id: 4,
    era: '明代',
    year: '公元16世紀',
    title: '《西遊記》成書',
    quote: '齊天大聖孫悟空',
    description: '明代小說家吳承恩集前代神話、話本、雜劇之大成，創作百回本《西遊記》，將孫悟空形象推向巔峰。作品賦予美猴王完整的身世：花果山誕生、拜師學藝、大鬧天宮、壓於五行山下，最終皈依佛門護送唐僧西天取經。孫悟空集反叛精神、英雄氣概、忠義品格於一身，既是神通廣大的齊天大聖，也是經歷磨難修成正果的求道者。這部巨著不僅確立孫悟空的經典形象，更成為中國古典文學四大名著之一，深刻影響東亞文化圈數百年。',
    image: 'https://images.unsplash.com/photo-1758092320366-a42aecc7fbcf?w=400',
  },
  {
    id: 5,
    era: '現代',
    year: '20世紀',
    title: '影視改編熱潮',
    quote: '熒幕經典，全民記憶',
    description: '二十世紀以來，《西遊記》被改編為無數影視作品，成為華人世界的集體記憶。1986年央視版《西遊記》由楊潔導演、六小齡童主演，以其精湛演技與經典配樂深入人心，成為幾代人的童年回憶。香港電影界推出周星馳《大話西遊》系列，將孫悟空重新詮釋為愛情悲劇英雄。動畫、舞台劇、音樂劇等多元形式不斷翻新演繹，每個時代都賦予孫悟空新的文化意涵。這些改編作品既保留原著精神，又融入當代審美，讓古老神話持續煥發生命力。',
    image: tvSeriesImage,
  },
  {
    id: 6,
    era: '數字時代',
    year: '21世紀',
    title: '遊戲與AI藝術',
    quote: '數字重生，科技演化',
    description: '進入數字時代，孫悟空以遊戲、AI藝術等嶄新形式重生。2024年遊戲科學發行《黑神話：悟空》，運用虛幻引擎5技術呈現極致視覺效果，玩家化身天命人體驗取經故事，全球銷量突破千萬。人工智能技術讓神話角色獲得新的詮釋可能，演算法生成的視覺藝術重構經典場景，VR/AR技術打造沉浸式體驗。數位人文研究運用大數據分析《西遊記》的文化傳播與演化軌跡，區塊鏈技術記錄數位藏品。古老神話與尖端科技交融，開啟孫悟空形象演化的新紀元。',
    image: 'https://images.unsplash.com/photo-1654613656561-877598f1a1a0?w=400',
  },
];

export function EvolutionTimeline() {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  return (
    <section id="evolution" className="min-h-screen py-12 px-6 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #8b7355 0px, #8b7355 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #8b7355 0px, #8b7355 1px, transparent 1px, transparent 40px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl mb-4 text-[#b8860b]">演化時間軸</h2>
          <p className="text-xl text-[#8b7355]">Evolution Timeline Gallery</p>
        </motion.div>

        <div className="flex gap-12">
          {/* Left Timeline */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-32">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8b7355] via-[#b8860b] to-[#8b7355]" />

                {/* Timeline Nodes */}
                <div className="space-y-8">
                  {timelineData.map((node, index) => (
                    <motion.button
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      className="relative flex items-start gap-4 text-left w-full group"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      {/* Node Point */}
                      <div className={`relative z-10 w-16 h-16 flex-shrink-0 flex items-center justify-center border-2 transition-all duration-300 ${
                        selectedNode === node.id
                          ? 'border-[#b8860b] bg-[#b8860b]/20 scale-110'
                          : 'border-[#8b7355] bg-black/80'
                      }`}
                        style={{
                          clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                          boxShadow: selectedNode === node.id ? '0 0 20px rgba(184, 134, 11, 0.6)' : 'none',
                        }}
                      >
                        <span className={`transition-colors ${
                          selectedNode === node.id ? 'text-[#b8860b]' : 'text-[#8b7355]'
                        }`}>
                          {node.id}
                        </span>
                      </div>

                      {/* Node Info */}
                      <div className="pt-2">
                        <Badge className="mb-2 bg-[#2f4f4f] text-white border-none">
                          {node.era}
                        </Badge>
                        <div className={`transition-colors ${
                          selectedNode === node.id ? 'text-[#b8860b]' : 'text-gray-300'
                        }`}>
                          {node.title}
                        </div>
                        <div className="text-sm text-[#8b7355]">{node.year}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Artifact Cards */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {selectedNode ? (
                <motion.div
                  key={selectedNode}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="sticky top-32"
                >
                  {timelineData.filter(node => node.id === selectedNode).map((node) => (
                    <div
                      key={node.id}
                      className="bg-black/60 border-2 border-[#8b7355] p-12 backdrop-blur-sm relative overflow-hidden"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
                      }}
                    >
                      {/* Corner Decorations */}
                      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#b8860b]" />
                      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#b8860b]" />

                      <div className="flex gap-12">
                        <div className="w-72 h-72 flex-shrink-0 overflow-hidden border-2 border-[#8b7355]">
                          <img
                            src={node.image}
                            alt={node.title}
                            className="w-full h-full object-cover"
                            style={{
                              filter: 'sepia(0.2) contrast(1.1)',
                            }}
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-6 mb-8">
                            <Badge className="bg-[#dc143c] text-white border-none text-base px-4 py-1.5">
                              {node.era}
                            </Badge>
                            <span className="text-lg text-[#8b7355]">{node.year}</span>
                          </div>

                          <h3 className="text-4xl mb-6 text-[#b8860b]">
                            {node.title}
                          </h3>

                          <blockquote className="border-l-4 border-[#dc143c] pl-6 mb-8">
                            <p className="text-xl text-gray-300 italic mb-2">
                              「{node.quote}」
                            </p>
                          </blockquote>

                          <p className="text-base text-gray-400 leading-relaxed">
                            {node.description}
                          </p>

                          {/* AI Art Label */}
                          <div className="mt-8 inline-block px-6 py-3 bg-black/80 border border-[#8b7355]/50">
                            <span className="text-base text-[#8b7355]">
                              神經網絡生成 | Neural Network Creating
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-96 flex items-center justify-center border-2 border-dashed border-[#8b7355]/30"
                >
                  <p className="text-[#8b7355] text-xl">
                    點擊左側時間節點查看詳情<br />
                    <span className="text-sm">Click timeline node to view details</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
