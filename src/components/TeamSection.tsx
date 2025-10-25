import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const teamMembers = [
    {
    id: 8,
    name: '陳婧教授',
    nameEn: 'Dr.Chen Jing',
    role: '指導教授',
    roleEn: 'Supervising Professor',
    responsibility: '人文學術指導&技術指導 | Humanities Advisor & Technical Advisor',
    email: 'jing-jc.chen@polyu.edu.hk',
  },
  {
    id: 1,
    name: '王冬妮',
    nameEn: 'Wang Dongni',
    role: '項目負責人',
    roleEn: 'Project Manager',
    responsibility: '項目管理&網站及數據庫建设 | Project Management, Database & Website Development',
    email: '25042425G@connect.polyu.hk',
  },
  {
    id: 2,
    name: '史志剛',
    nameEn: 'Shi Zhigang',
    role: '技術總監',
    roleEn: 'Tech Director',
    responsibility: 'AI模型訓練與數據可視化 | AI Training & Data Visualization',
    email: '25056925G@connect.polyu.hk',
  },
  {
    id: 3,
    name: '周晶',
    nameEn: 'Zhou Jing',
    role: '文獻研究員',
    roleEn: 'Literature Researcher',
    responsibility: '古籍整理與文本分析 | Classical Text Analysis',
    email: '25096585G@connect.polyu.hk',
  },
  {
    id: 4,
    name: '龚聖奧',
    nameEn: 'Gong Shengao',
    role: '視覺設計師',
    roleEn: 'Visual Designer',
    responsibility: '界面設計與視覺呈現 | UI/UX Design & Visual Presentation',
    email: '25062872G@connect.polyu.hk',
  },
  {
    id: 5,
    name: '蔡青伶',
    nameEn: 'Cai Qingling',
    role: 'GIS工程師',
    roleEn: 'GIS Engineer',
    responsibility: '地理信息系統開發 | Geographic Information System',
    email: '25043376G@connect.polyu.hk',
  },
  {
    id: 6,
    name: '马睿',
    nameEn: 'Ma Rui',
    role: '數據分析師',
    roleEn: 'Data Analyst',
    responsibility: '統計分析與文獻計量 | Statistical Analysis & Bibliometrics',
    email: '25116201G@connect.polyu.hk',
  },
  {
    id: 7,
    name: '梁智昊',
    nameEn: 'Liang Zhihao',
    role: '前端開發',
    roleEn: 'Frontend Developer',
    responsibility: '技術支持 | Technology Support',
    email: '25061044G@connect.polyu.hk',
  },

];

const researchQA = [
  {
    id: 'q1',
    question: '關於項目介紹 | About Project Introduction',
    title: 'Why does your group want to do this project?',
    answer: `我們團隊選擇研究孫悟空形象的演化，是因為這一文化符號跨越了千年歷史，從古印度神話中的哈努曼到明代《西游記》的齊天大圣，再到當代數字遊戲《黑神話：悟空》，展現了東方神話如何在不同時代、不同媒介中持續重生與再創造。

通過數字人文的方法，我們希望系統性地追蹤這一形象的文化基因如何在全球化與數字化的浪潮中傳播、變異與融合。這不僅是對一個神話人物的研究，更是探索人類如何通過敘事建構身份認同、文化記憶與價值觀念的過程。

在AI與大數據時代，傳統的文獻研究已無法完整呈現跨媒介、跨文化的複雜演化軌跡。我們相信，運用文本分析、圖像識別、GIS可視化等數字工具，能夠揭示隱藏在海量數據背後的文化演變模式，為人文研究提供新的視角與方法論。`,
  },
  {
    id: 'q2',
    question: '數據獲取與創建 | How did we get or create data',
    title: 'How did you get or create data? What kind of humanities data is used here? Please include a link/screenshots of your code/excel spreadsheet/dataset here.',
    answer: `我們的數據來源包括多個層面：

**1. 文獻數據 (Textual Data)**
- 從中國知網、Google Scholar等學���數據庫爬取關於孫悟空研究的論文元數據
- 整理81部相關文學、影視、遊戲作品的基本信息（標題、年代、類型、描述）
- 收集《西游記》各版本的文本數據用於詞頻分析

**2. 圖像數據 (Visual Data)**
- 收集不同時期孫悟空形象的圖像資料（壁畫、版畫、劇照、遊戲截圖等）
- 使用計算機視覺技術分析形象特徵的演變（服飾、武器、姿態等）

**3. 地理數據 (Geographical Data)**
- 標注81部作品的創作/發行地點
- 使用GIS工具繪製文化傳播地圖，可視化孫悟空形象的全球擴散路徑

**4. 時間軸數據 (Timeline Data)**
- 構建從公元前5世紀至2024年的演化時間軸
- 標記6個關鍵歷史節點（印度原型、唐代傳入、明代定型、現代影視化、當代遊戲化、全球化傳播）

數據集與代碼已開源於GitHub倉庫，Excel數據表格可在"數據下載"部分獲取。`,
  },
  {
    id: 'q3',
    question: '研究方法與工具 | Methodology and Tools',
    title: 'What kind of methodologies and tools did you use to handle the data? Please include a link/screenshot of your tools here.',
    answer: `**研究方法論 (Methodologies)**

1. **文本挖掘與主題建模**
   - 使用LDA（Latent Dirichlet Allocation）對《西游記》及相關文獻進行主題提取
   - 詞頻分析與情感分析追蹤敘事重點的變遷

2. **圖像分析與視覺識別**
   - 使用深度學習模型（ResNet、CLIP）分析孫悟空形象的視覺特徵
   - 比較不同時代、不同文化背景下形象呈現的差異

3. **網絡分析**
   - 構建作品引用網絡，分析文化影響力的傳播路徑
   - 識別關鍵節點作品（如86版《西游記》、《大話西游》、《黑神話：悟空》）

4. **時空可視化**
   - GIS地圖展示作品的地理分布與傳播軌跡
   - 時間軸可視化呈現千年演化脈絡

**技術工具 (Tools)**

- **數據處理**: Python (Pandas, NumPy), Excel
- **文本分析**: NLTK, jieba, Gensim
- **圖像分析**: PyTorch, OpenCV, Stable Diffusion
- **可視化**: D3.js, Leaflet.js, Folium, Recharts
- **Web開發**: React, TypeScript, Tailwind CSS
- **GIS工具**: QGIS, Mapbox
- **AI輔助**: GPT-4, Claude用於文獻摘要與分析`,
  },
  {
    id: 'q4',
    question: '研究發現與結果 | Findings and Results',
    title: 'What are the possible findings/data visualization/analysis results? Please include static or interactive graphs of your results here.',
    answer: `**主要研究發現**

1. **形象演化的三次重大轉型**
   - 第一次：從印度哈努曼到中國猴行者（宗教符號→民間英雄）
   - 第二次：從明代齊天大圣到現代影視形象（文學經典→大眾文化偶像）
   - 第三次：從傳統媒介到數字遊戲（被動接受→互動體驗）

2. **文化傳播的地理軌跡**
   - 核心區：中國（61部作品，75%）
   - 擴散區：東亞（日本12部、韓國2部）
   - 滲透區：歐美（6部，以遊戲與漫畫為主）
   - 澳大利亞的學術研究視角提供了外部觀察者的獨特詮釋

3. **媒介形態的演變趨勢**
   - 文學作品：1950年代前占主導（80%）
   - 影視作品：1960-2000年代占主導（65%）
   - 遊戲動漫：2000年後快速增長（40%）
   - 跨媒介融合成為當代主流

4. **敘事主題的變遷**
   - 古典時期：強調"西天取經"的宗教救贖主題
   - 現代時期：突出"大鬧天宮"的反抗精神
   - 當代時期：聚焦個人成長、愛情與自我救贖

**可視化成果**
網站包含多個交互式圖表：
- 演化時間軸（6個關鍵節點的視覺呈現）
- GIS地圖（81部作品的地理分布）
- 作品分類統計（按年代、類型、地區的多維分析）`,
  },
  {
    id: 'q5',
    question: '研究反思 | Reflections',
    title: 'How could these results tell us about your initial topic? How could the results answer your research questions if any? How could digital and GenAI tools help you understand the initial research questions or explore the proposed topic in a better way?',
    answer: `**對初始研究問題的回應**

我們的研究初衷是探索：一個千年前的神話形象，如何在當代數字文化中持續煥發生命力？研究結果證實，孫悟空的成功並非偶然，而是文化基因、媒介演化與時代精神共同作用的結果。

**關鍵洞察**

1. **文化適應性**：孫悟空形象之所以能跨越文化邊界，在於其核心敘事（反抗權威、追求自由、成長蛻變）具有普世性，同時又能在不同文化語境中靈活改寫。

2. **媒介塑造力**：每一次媒介革新（從口述→文字→戲曲→影視→遊戲）都重新定義了孫悟空形象，遊戲的互動性尤其賦予玩家"成為大聖"的沉浸體驗。

3. **全球化與本土化的張力**：《七龍珠》《英雄聯盟》等全球化產品中的孫悟空形象，雖然獲得廣泛傳播，卻也稀釋了原型的文化特質；而《黑神話：悟空》則通過次世代技術實現了"越本土越國際"的文化輸出。

**數字與AI工具的價值**

1. **規模化處理**：傳統人文研究難以處理81部作品的海量數據，AI工具使我們能夠快速提取主題、識別模式、生成可視化。

2. **多模態分析**：GenAI（如GPT、CLIP）能夠同時分析文本、圖像、音頻，揭示跨媒介的敘事共性與差異。

3. **假設生成與驗證**：AI輔助我們提出新的研究假設（如"遊戲化是否改變受眾對英雄形象的認知模式"），並通過數據驗證。

4. **協作式研究**：AI成為研究夥伴，幫助我們整理文獻、翻譯材料、生成視覺原型，極大提升了研究效率。

**反思與局限**

然而，我們也意識到數字工具的局限：
- AI生成的摘要可能忽略文本的細膩情感與文化隱喻
- 量化分析無法完全捕捉"美猴王"形象的審美衝擊力
- 算法偏見可能影響對文化價值的判斷

因此，數字人文研究需要在技術理性與人文關懷之間保持平衡，讓工具服務於洞察，而非取代深度思考。`,
  },
  {
    id: 'q6',
    question: '參考文獻 | References',
    title: 'List out all your references at the end following the required academic format.',
    answer: `**學術文獻 (Academic Literature)**

1. 胡適. (1923). 《西游記考證》. 上海：亞東圖書館.

2. 魯迅. (1923). 《中國小說史略》. 北京：北京大學出版社.

3. 李安綱. (2000). 《西游記》的文化精神與主題研究. 《文學遺產》, (4), 45-58.

4. Jenkins, H. (2006). *Convergence Culture: Where Old and New Media Collide*. New York: NYU Press.

5. Dudbridge, G. (1970). *The Hsi-yu Chi: A Study of Antecedents to the Sixteenth-Century Chinese Novel*. Cambridge: Cambridge University Press.

6. 嚴紹璗. (2007). 《日本中國學史》. 北京：中華書局.

7. 今何在. (2000). 《悟空傳》. 北京：光明日報出版社.

**數字人文方法論 (Digital Humanities Methodology)**

8. Moretti, F. (2013). *Distant Reading*. London: Verso.

9. Manovich, L. (2020). *Cultural Analytics*. Cambridge: MIT Press.

10. Drucker, J. (2021). *The Digital Humanities Coursebook*. London: Routledge.

**影視與遊戲資料 (Film, TV, and Game Sources)**

11. 楊潔（導演）. (1986). 《西游記》[電視劇]. 中國：中央電視台.

12. 劉鎮偉（導演）. (1995). 《大話西游之月光寶盒/大圣娶親》[電影]. 香港：彩星電影公司.

13. 游戲科學. (2024). 《黑神話：悟空》[電子遊戲]. 中國：游戲科學.

14. 鳥山明. (1984-1995). 《七龍珠》[漫畫]. 日本：集英社.

**在線資源 (Online Resources)**

15. 中國知網 (CNKI): https://www.cnki.net/

16. Google Scholar: https://scholar.google.com/

17. Internet Movie Database (IMDb): https://www.imdb.com/

18. GitHub Repository (本項目代碼): https://github.com/[your-repo]/sun-wukong-evolution

**數據集與工具 (Datasets and Tools)**

19. Python Software Foundation. (2023). *Python Language Reference*, version 3.11. Available at http://www.python.org

20. React Team. (2024). *React Documentation*. Available at https://react.dev/

21. Leaflet.js Contributors. (2024). *Leaflet - An Open-Source JavaScript Library for Mobile-Friendly Interactive Maps*. Available at https://leafletjs.com/

---

**引用格式說明**: 本參考文獻列表採用APA 7th格式，結合中文學術引用規範。所有網絡資源的最後訪問日期為2024年10月。`,
  },
];

export function TeamSection() {
  return (
    <section id="team" className="min-h-screen py-12 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl mb-2 text-[#b8860b]">團隊介紹</h2>
          <p className="text-lg text-[#8b7355]">Creator Profiles</p>
          <div className="mt-4 max-w-2xl mx-auto text-sm text-gray-400">
            我們是一支來自「CHC5904 中國文化的數位研究」課程的跨學科團隊，成員來自人文、經濟、信息工程及計算機科學等多樣背景。我們融合人文學術與數字技術，致力探索傳統文化的當代價值與創新詮釋。

          </div>
        </motion.div>

        {/* Team Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h3 className="text-2xl mb-2 text-[#b8860b]">團隊成員</h3>
          <p className="text-sm text-[#8b7355]">Team Members</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="group h-full"
            >
              <div className="relative bg-black/60 border border-[#8b7355] p-3 overflow-hidden backdrop-blur-sm hover:border-[#b8860b] transition-all duration-300 h-full flex flex-col min-h-[200px]">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Name */}
                  <div className="mb-2">
                    <h3 className="text-sm text-[#b8860b] group-hover:text-[#dc143c] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-[#8b7355]">{member.nameEn}</p>
                  </div>

                  {/* Role */}
                  <div className="mb-2">
                    <div 
                      className="inline-block px-2 py-0.5 bg-gradient-to-r from-[#8b7355] to-[#b8860b] text-white text-[11px]"
                      style={{
                        clipPath: 'polygon(3px 0, calc(100% - 3px) 0, 100% 50%, calc(100% - 3px) 100%, 3px 100%, 0 50%)',
                      }}
                    >
                      {member.role}
                    </div>
                    <p className="text-[10px] text-[#8b7355] mt-1">{member.roleEn}</p>
                  </div>

                  {/* Separator */}
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#8b7355] to-transparent mb-2" />

                  {/* Responsibility */}
                  <p className="text-[11px] text-gray-400 leading-relaxed mb-2 flex-1">
                    {member.responsibility}
                  </p>

                  {/* Email */}
                  <div className="pt-2 border-t border-[#8b7355]/30 mt-auto">
                    <p className="text-[10px] text-[#8b7355] break-all">
                      {member.email}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Process with Q&A Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-black/60 border-2 border-[#8b7355] p-6 backdrop-blur-sm">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-[#8b7355]/30">
              <div className="w-12 h-12 bg-[#2f4f4f]/50 border-2 border-[#8b7355] flex items-center justify-center"
                style={{
                  clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                }}
              >
                <span className="text-[#b8860b]">Q&A</span>
              </div>
              <div>
                <h3 className="text-2xl text-[#b8860b]">研究過程與問答</h3>
                <p className="text-sm text-[#8b7355]">Research Process with Q&A</p>
              </div>
            </div>

            {/* Accordion Q&A */}
            <Accordion type="single" collapsible className="w-full">
              {researchQA.map((item, index) => (
                <AccordionItem key={item.id} value={item.id} className="border-b border-[#8b7355]/30">
                  <AccordionTrigger className="text-left hover:no-underline group py-4">
                    <div className="flex items-start gap-3 w-full">
                      <div className="w-8 h-8 bg-[#dc143c]/20 border border-[#dc143c] flex items-center justify-center flex-shrink-0 mt-1"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                        }}
                      >
                        <span className="text-sm text-[#dc143c]">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-200 group-hover:text-[#b8860b] transition-colors mb-1">
                          {item.question}
                        </div>
                        <div className="text-sm text-[#8b7355]">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-2 pb-4 pl-11">
                    <div className="bg-black/40 border-l-2 border-[#b8860b] pl-4 py-3 whitespace-pre-line leading-relaxed">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <div className="inline-block px-6 py-3 border border-[#8b7355] bg-black/40">
            <p className="text-sm text-gray-400 mb-1">
              © 2025 孫悟空演化數字人文研究項目
            </p>
            <p className="text-xs text-[#8b7355]">
              Sun Wukong Evolution Digital Humanities Project
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
