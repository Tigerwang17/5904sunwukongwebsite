import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Work {
  id: number;
  title: string;
  titleEn: string;
  year: string;
  cover: string;
  description: string;
}

const worksDataByEra = [
  {
    era: '古印度',
    eraEn: 'Ancient India',
    works: [
      { 
        id: 1, 
        title: '印度史诗《罗摩衍那》', 
        titleEn: 'Indian Epic "Ramayana"', 
        year: '约公元前5世纪-公元2世纪',
        cover: 'https://images.unsplash.com/photo-1591285686971-dab021d426e3?w=400',
        description: '记载神猴哈奴曼助罗摩王子救妻的史诗，是孙悟空形象的印度原型。'
      },
    ] as Work[]
  },
  {
    era: '唐代',
    eraEn: 'Tang Dynasty',
    works: [
      { 
        id: 2, 
        title: '唐代传记《大慈恩寺三藏法师传》', 
        titleEn: 'Biography of Tripitaka', 
        year: '688年',
        cover: 'https://images.unsplash.com/photo-1701071694907-46b8902ab4bc?w=400',
        description: '记录玄奘西行取经真实历程，为后世西游故事提供史实基础。'
      },
      { 
        id: 3, 
        title: '唐代小说《李汤（或称古岳渎经）》', 
        titleEn: 'Novel "Li Tang"', 
        year: '不详年',
        cover: 'https://images.unsplash.com/photo-1701071694907-46b8902ab4bc?w=400',
        description: '早期唐代神怪小说，包含猴行者助唐僧取经的雏形故事。'
      },
    ] as Work[]
  },
  {
    era: '宋代',
    eraEn: 'Song Dynasty',
    works: [
      { 
        id: 4, 
        title: '宋代类书《太平广记》', 
        titleEn: 'Encyclopedia "Taiping Guangji"', 
        year: '978年',
        cover: 'https://images.unsplash.com/photo-1701071694907-46b8902ab4bc?w=400',
        description: '宋代大型类书，收录多篇猴精故事，丰富了猴神形象的文化内涵。'
      },
      { 
        id: 5, 
        title: '宋代话本《大唐三藏取经诗话》', 
        titleEn: 'Story "Da Tang Sanzang Qujing Shihua"', 
        year: '不详年',
        cover: 'https://images.unsplash.com/photo-1701071694907-46b8902ab4bc?w=400',
        description: '现存最早的西游记话本，首次出现"猴行者"这一角色名称。'
      },
    ] as Work[]
  },
  {
    era: '元代',
    eraEn: 'Yuan Dynasty',
    works: [
      { 
        id: 6, 
        title: '元代杂剧《西游记》', 
        titleEn: 'Drama "Journey to the West"', 
        year: '不详年',
        cover: 'https://images.unsplash.com/photo-1743074921223-704aafe873f5?w=400',
        description: '元代杂剧作品，将西游故事搬上戏曲舞台，推动孙悟空形象的戏剧化。'
      },
    ] as Work[]
  },
  {
    era: '明代',
    eraEn: 'Ming Dynasty',
    works: [
      { 
        id: 7, 
        title: '明代小说《西游记》', 
        titleEn: 'Novel "Journey to the West"', 
        year: '1592年',
        cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400',
        description: '吴承恩创作的中国古典名著，完整塑造齐天大圣孙悟空的经典形象。'
      },
      { 
        id: 8, 
        title: '明代小说《封神演义》', 
        titleEn: 'Novel "Fengshen Yanyi"', 
        year: '不详年',
        cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400',
        description: '明代神魔小说，虽非孙悟空主角，但丰富了中国神话体系的世界观。'
      },
    ] as Work[]
  },
  {
    era: '近现代',
    eraEn: 'Modern Era',
    works: [
      { 
        id: 9, 
        title: '近现代神话《西游记考证》', 
        titleEn: 'Study "Journey to the West Research"', 
        year: '1923年',
        cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400',
        description: '胡适的学术研究著作，从文献学角度考证西游记的成书过程与源流。'
      },
      { 
        id: 10, 
        title: '近现代学术著作《中国小说史略》', 
        titleEn: 'Academic "Brief History of Chinese Fiction"', 
        year: '1923年',
        cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400',
        description: '鲁迅先生的经典著作，系统论述了包括西游记在内的中国小说发展史。'
      },
      { 
        id: 11, 
        title: '近现代小说《小坡的生日》', 
        titleEn: 'Novel "Xiao Po\'s Birthday"', 
        year: '1934年',
        cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400',
        description: '老舍创作的儿童小说，孙悟空作为童话角色首次走进现代儿童文学。'
      },
      { 
        id: 12, 
        title: '近现代小说《猴子》', 
        titleEn: 'Novel "Monkey"', 
        year: '1942年',
        cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400',
        description: '英国汉学家阿瑟·韦利的西游记英译节选本，让孙悟空走向世界。'
      },
      { 
        id: 13, 
        title: '近现代神话《西游记漫话》', 
        titleEn: 'Essay "Journey to the West Commentary"', 
        year: '1990年',
        cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400',
        description: '林庚先生的学术随笔，深入解读西游记的文学艺术与文化内涵。'
      },
    ] as Work[]
  },
  {
    era: '当代',
    eraEn: 'Contemporary',
    works: [
      { id: 14, title: '当代小说《续西游记》', titleEn: 'Novel "Sequel to Journey to the West"', year: '1950年', cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400', description: '新中国成立后创作的续写作品，探索孙悟空在新时代的故事可能。' },
      { id: 15, title: '当代漫画《我的孙悟空》', titleEn: 'Manga "My Sun Wukong"', year: '1952年', cover: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400', description: '日本漫画家手塚治虫的早期作品，开启孙悟空形象的漫画化表达。' },
      { id: 16, title: '当代小说《后西游记》', titleEn: 'Novel "Later Journey to the West"', year: '1955年', cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400', description: '以孙悟空后代为主角的续作小说，延续西游世界的想象空间。' },
      { id: 17, title: '当代动漫《大闹天宫》', titleEn: 'Animation "Havoc in Heaven"', year: '1961年', cover: 'https://images.unsplash.com/photo-1674053965701-bb1e48bed3de?w=400', description: '上海美术电影制片厂经典动画，以京剧美学塑造最美猴王形象。' },
      { id: 18, title: '当代戏曲《孙悟空三打白骨精》', titleEn: 'Opera "Monkey King Defeats White Bone Demon"', year: '1961年', cover: 'https://images.unsplash.com/photo-1743074921223-704aafe873f5?w=400', description: '绍剧经典剧目，将孙悟空的正义形象提升到新的艺术高度。' },
      { id: 19, title: '当代诗歌《七律·孙悟空三打白骨精》', titleEn: 'Poem "Seven-character Regulated Verse"', year: '1961年', cover: 'https://images.unsplash.com/photo-1722501428430-0feae168fa0d?w=400', description: '郭沫若创作的诗歌，借孙悟空故事表达时代精神。' },
      { id: 20, title: '当代诗歌《七律・和郭沫若同志》', titleEn: 'Poem "Reply to Comrade Guo Moruo"', year: '1961年', cover: 'https://images.unsplash.com/photo-1722501428430-0feae168fa0d?w=400', description: '毛泽东主席的和诗作品，通过孙悟空形象展现革命情怀。' },
      { id: 21, title: '当代动漫《太空西游记（SF 西游记）》', titleEn: 'Animation "SF Journey to the West"', year: '1978年', cover: 'https://images.unsplash.com/photo-1674053965701-bb1e48bed3de?w=400', description: '日本科幻动画，将西游故事搬到太空，开创跨界演绎先河。' },
      { id: 22, title: '当代电视剧《西游记（日本版）》', titleEn: 'TV Series "Journey to the West (Japan)"', year: '1978年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '日本电视台制作的西游记电视剧，展现跨文化改编的独特魅力。' },
      { id: 23, title: '当代电视剧《西游记》', titleEn: 'TV Series "Journey to the West"', year: '1978年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '中国早期电视剧版本，为后续影视化改编积累经验。' },
      { id: 24, title: '当代小说《新孙悟空》', titleEn: 'Novel "New Sun Wukong"', year: '1981年', cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400', description: '台湾作家黄海的现代改编小说，赋予孙悟空当代人格特质。' },
      { id: 25, title: '当代动漫《七龙珠》', titleEn: 'Anime "Dragon Ball"', year: '1984年', cover: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400', description: '鸟山明的经典漫画，主角孙悟空成为全球最知名的东方英雄之一。' },
      { id: 26, title: '当代游戏《小悟空》', titleEn: 'Game "Little Wukong"', year: '1984年', cover: 'https://images.unsplash.com/photo-1672754091891-b58ed53665e6?w=400', description: '中国早期电子游戏，首次将孙悟空形象带入互动娱乐领域。' },
      { id: 27, title: '当代动漫《金猴降妖》', titleEn: 'Animation "Golden Monkey Subdues Demons"', year: '1985年', cover: 'https://images.unsplash.com/photo-1674053965701-bb1e48bed3de?w=400', description: '上海美术电影制片厂作品，延续传统美术风格的动画创作。' },
      { id: 28, title: '当代小说《西游新记》', titleEn: 'Novel "New Journey to the West"', year: '1985年', cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400', description: '当代改编小说，以现代视角重新诠释西游故事的主题内涵。' },
      { id: 29, title: '当代电视剧《西游记（央视版）》', titleEn: 'TV Series "Journey to the West (CCTV)"', year: '1986年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '六小龄童主演的央视经典，成为几代中国人心中最经典的孙悟空形象。' },
      { id: 30, title: '当代电视剧《西游记》', titleEn: 'TV Series "Journey to the West"', year: '1986年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '同期其他制作公司的西游记电视剧版本。' },
      { id: 31, title: '当代小说《西游怪记》', titleEn: 'Novel "Strange Journey to the West"', year: '1987年', cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400', description: '以荒诞笔法重写西游的实验性文学作品。' },
      { id: 32, title: '当代游戏《中华大仙》', titleEn: 'Game "Chinese Immortals"', year: '1988年', cover: 'https://images.unsplash.com/photo-1672754091891-b58ed53665e6?w=400', description: '台湾制作的角色扮演游戏，孙悟空作为可选角色登场。' },
      { id: 33, title: '当代电影《西行平妖》', titleEn: 'Film "Journey to the West Conquering Demons"', year: '1991年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '香港电影对西游故事的武侠化改编尝试。' },
      { id: 34, title: '当代电影《大话西游之月光宝盒》', titleEn: 'Film "A Chinese Odyssey Part One"', year: '1995年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '周星驰经典无厘头喜剧，颠覆传统孙悟空形象，成为后现代经典。' },
      { id: 35, title: '当代电影《大话西游之大圣娶亲》', titleEn: 'Film "A Chinese Odyssey Part Two"', year: '1995年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '大话西游下集，"爱你一万年"成为一代人的爱情宣言。' },
      { id: 36, title: '当代电影《大话西游（上/下）》', titleEn: 'Film "A Chinese Odyssey (Part 1/2)"', year: '1995年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '大话西游合集版本，奠定解构主义西游改编的里程碑地位。' },
      { id: 37, title: '当代电视剧《西游记》', titleEn: 'TV Series "Journey to the West"', year: '1996年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '央视版西游记续集，继续讲述唐僧师徒的取经故事。' },
      { id: 38, title: '当代动漫《最游记》', titleEn: 'Anime "Saiyuki"', year: '1997年', cover: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400', description: '日本漫画家峰仓和也创作，以美型少年风格重塑西游人物。' },
      { id: 39, title: '当代电影《天庭外传》', titleEn: 'Film "Heavenly Court"', year: '1997年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '香港喜剧电影，以天庭背景展开神话世界的幽默故事。' },
      { id: 40, title: '当代小说《新西游记》', titleEn: 'Novel "New Journey to the West"', year: '1997年', cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400', description: '现代改编长篇小说，融入当代社会议题的西游重写。' },
      { id: 41, title: '当代电视剧《西游记（贰）》', titleEn: 'TV Series "Journey to the West II"', year: '1998年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '央视西游记第二部，延续经典制作的续集篇章。' },
      { id: 42, title: '当代小说《悟空传》', titleEn: 'Novel "Wukong Biography"', year: '2000年', cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400', description: '今何在的网络小说代表作，塑造反叛悲剧英雄孙悟空，影响一代读者。' },
      { id: 43, title: '当代电视剧《西游记后传》', titleEn: 'TV Series "Journey to the West Sequel"', year: '2000年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '讲述取经之后孙悟空斗战胜佛的后续故事，开创暗黑风格改编。' },
      { id: 44, title: '当代电视剧《春光灿烂猪八戒》', titleEn: 'TV Series "Brilliant Pigsy"', year: '2000年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '徐峥主演的轻喜剧，将配角猪八戒推向主角位置。' },
      { id: 45, title: '当代电视剧《"烦死了"》', titleEn: 'TV Series "So Annoying"', year: '2000年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '都市情景喜剧，借西游人物演绎现代生活的烦恼。' },
      { id: 46, title: '当代电视剧《齐天大圣》', titleEn: 'TV Series "The Monkey King"', year: '2001年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '张卫健主演的武侠神话剧，以喜剧方式演绎孙悟空成长史。' },
      { id: 47, title: '当代小说《沙僧日记》', titleEn: 'Novel "Sandy\'s Diary"', year: '2002年', cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400', description: '以沙僧视角重述西游故事的讽刺小说。' },
      { id: 48, title: '当代电视剧《齐天大圣孙悟空》', titleEn: 'TV Series "The Monkey King Sun Wukong"', year: '2002年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '央视制作的神话大剧，讲述孙悟空从出生到成佛的完整历程。' },
      { id: 49, title: '当代小说《水煮西游记》', titleEn: 'Novel "Boiled Journey to the West"', year: '2004年', cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400', description: '以管理学视角解读西游记的畅销职场小说。' },
      { id: 50, title: '当代电视剧《福星高照猪八戒》', titleEn: 'TV Series "Lucky Pigsy"', year: '2004年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '猪八戒系列喜剧续作，继续探索配角的喜剧潜力。' },
      { id: 51, title: '当代电影《情癫大圣》', titleEn: 'Film "A Chinese Tall Story"', year: '2005年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '刘镇伟导演的奇幻爱情片，延续大话西游的浪漫基因。' },
      { id: 52, title: '当代电视剧《喜气洋洋猪八戒》', titleEn: 'TV Series "Joyful Pigsy"', year: '2005年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '猪八戒系列第三部，延续轻松幽默的喜剧风格。' },
      { id: 53, title: '当代电视剧《宝莲灯》', titleEn: 'TV Series "Lotus Lantern"', year: '2005年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '虽非西游题材，但孙悟空作为重要配角出场，展现神话宇宙联动。' },
      { id: 54, title: '当代电视剧《西游记》', titleEn: 'TV Series "Journey to the West"', year: '2006年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '浙江版西游记，以全新视角重新演绎经典故事。' },
      { id: 55, title: '当代电影《功夫之王》', titleEn: 'Film "The Forbidden Kingdom"', year: '2008年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '成龙与李连杰首度合作，孙悟空形象走向好莱坞。' },
      { id: 56, title: '当代电视剧《宝莲灯前传》', titleEn: 'TV Series "Lotus Lantern Prequel"', year: '2009年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '宝莲灯前传，孙悟空作为配角继续活跃在神话剧集中。' },
      { id: 57, title: '当代游戏《奴役：西游记之旅》', titleEn: 'Game "Enslaved: Odyssey to the West"', year: '2010年', cover: 'https://images.unsplash.com/photo-1672754091891-b58ed53665e6?w=400', description: '欧美游戏公司制作的西游题材动作游戏，展现跨文化改编。' },
      { id: 58, title: '当代电视剧《西游记》', titleEn: 'TV Series "Journey to the West"', year: '2010年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '程力栋版西游记，强调特效与视觉呈现的现代制作。' },
      { id: 59, title: '当代电视剧《西游记》', titleEn: 'TV Series "Journey to the West"', year: '2011年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '又一版本的西游记电视剧，持续挖掘经典IP的改编价值。' },
      { id: 60, title: '当代电视剧《春光灿烂猪九妹》', titleEn: 'TV Series "Brilliant Ninth Sister Pig"', year: '2011年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '以女性猪八戒为主角的衍生喜剧，拓展西游宇宙边界。' },
      { id: 61, title: '当代漫画《恐惧本源：猴王》', titleEn: 'Comic "Fear Itself: Monkey King"', year: '2011年', cover: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400', description: 'Marvel漫威推出的孙悟空漫画，将中国神话融入超级英雄宇宙。' },
      { id: 62, title: '当代游戏《英雄联盟：悟空》', titleEn: 'Game "League of Legends: Wukong"', year: '2011年', cover: 'https://images.unsplash.com/photo-1672754091891-b58ed53665e6?w=400', description: '全球流行的MOBA游戏中的孙悟空英雄角色，走向电竞舞台。' },
      { id: 63, title: '当代电视剧《欢乐元帅》', titleEn: 'TV Series "Happy Marshal"', year: '2012年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '以天蓬元帅为主角的喜剧，继续开发西游配角的故事潜力。' },
      { id: 64, title: '当代电影《西游·降魔篇》', titleEn: 'Film "Journey to the West: Conquering the Demons"', year: '2013年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '周星驰导演的西游前传，以暗黑风格重新诠释孙悟空起源。' },
      { id: 65, title: '当代游戏《SMITE：孙悟空》', titleEn: 'Game "SMITE: Sun Wukong"', year: '2014年', cover: 'https://images.unsplash.com/photo-1672754091891-b58ed53665e6?w=400', description: '多人在线战斗竞技游戏中的孙悟空神祇角色。' },
      { id: 66, title: '当代电影《西游记之大闹天宫》', titleEn: 'Film "The Monkey King"', year: '2014年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '郭富城主演的3D特效大片，展现大闹天宫的视觉奇观。' },
      { id: 67, title: '当代动漫《西游记之大圣归来》', titleEn: 'Animation "Monkey King: Hero is Back"', year: '2015年', cover: 'https://images.unsplash.com/photo-1674053965701-bb1e48bed3de?w=400', description: '国产3D动画电影里程碑，塑造沧桑英雄孙悟空，掀起国漫崛起浪潮。' },
      { id: 68, title: '当代电影《西游记之大圣归来》', titleEn: 'Film "Monkey King: Hero is Back"', year: '2015年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '大圣归来电影版，延续动画的成功。' },
      { id: 69, title: '当代游戏《Dota 2：猴王》', titleEn: 'Game "Dota 2: Monkey King"', year: '2016年', cover: 'https://images.unsplash.com/photo-1672754091891-b58ed53665e6?w=400', description: 'Valve推出的首个中国主题英雄，孙悟空进入顶级电竞赛事。' },
      { id: 70, title: '当代电影《西游记之孙悟空三打白骨精》', titleEn: 'Film "The Monkey King 2"', year: '2016年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '郑保瑞导演的西游系列第二部，聚焦经典三打白骨精桥段。' },
      { id: 71, title: '当代电影《大话西游3》', titleEn: 'Film "A Chinese Odyssey Part Three"', year: '2016年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '大话西游系列时隔21年推出第三部，延续经典IP的生命力。' },
      { id: 72, title: '当代电影《西游伏妖篇》', titleEn: 'Film "Journey to the West: Demon Chapter"', year: '2017年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '西游降魔篇续集，延续周星驰式的西游解构美学。' },
      { id: 73, title: '当代电影《悟空传》', titleEn: 'Film "Wukong"', year: '2017年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '改编自今何在同名小说，彭于晏主演的悲剧英雄孙悟空。' },
      { id: 74, title: '当代电视剧《大话西游之爱你一万年》', titleEn: 'TV Series "A Chinese Odyssey: Love You a Million Years"', year: '2017年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '大话西游电视剧版，将经典电影改编为长篇剧集。' },
      { id: 75, title: '当代电视剧《花游记》', titleEn: 'TV Series "Hwayugi"', year: '2017年', cover: 'https://images.unsplash.com/photo-1673877489519-3016b28cd0d7?w=400', description: '韩国改编的西游记奇幻爱情剧，孙悟空走向韩流世界。' },
      { id: 76, title: '当代电影《西游记·女儿国》', titleEn: 'Film "The Monkey King 3"', year: '2018年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '西游系列第三部，聚焦女儿国情节，探索孙悟空的情感世界。' },
      { id: 77, title: '当代电影《真假美猴王之大圣无双》', titleEn: 'Film "The Monkey King: The Legend Begins"', year: '2020年', cover: 'https://images.unsplash.com/photo-1562063930-69f6cbdeb4a8?w=400', description: '以真假美猴王为主题的动作奇幻电影。' },
      { id: 78, title: '当代小说《三界众道》', titleEn: 'Novel "Three Realms"', year: '2020年', cover: 'https://images.unsplash.com/photo-1712453256071-3e67d4f74a05?w=400', description: '网络文学作品，构建宏大的三界神话世界观。' },
      { id: 79, title: '当代漫画《猴王子》', titleEn: 'Comic "Monkey Prince"', year: '2021年', cover: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400', description: 'DC漫画推出的孙悟空后代角色，融入DC超级英雄宇宙。' },
      { id: 80, title: '当代动漫《美猴王》', titleEn: 'Animation "The Monkey King"', year: '2023年', cover: 'https://images.unsplash.com/photo-1674053965701-bb1e48bed3de?w=400', description: 'Netflix制作的国际化动画，将孙悟空故事推向全球流媒体平台。' },
      { id: 81, title: '当代游戏《黑神话：悟空》', titleEn: 'Game "Black Myth: Wukong"', year: '2024年', cover: 'https://images.unsplash.com/photo-1698450998458-0bc1045788a1?w=400', description: '游戏科学开发的国产3A游戏，以次世代技术重塑孙悟空神话，引发全球现象级热潮。' },
    ] as Work[]
  },
];

export function WorksCollection() {
  const [expandedEras, setExpandedEras] = useState<string[]>([]);

  const toggleEra = (era: string) => {
    setExpandedEras(prev =>
      prev.includes(era) ? prev.filter(e => e !== era) : [...prev, era]
    );
  };

  return (
    <section id="works" className="min-h-screen py-12 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl mb-4 text-[#b8860b]">作品集藏</h2>
          <p className="text-xl text-[#8b7355]">Collection Archive - 81 Works</p>
        </motion.div>

        {/* Embedded Australia Map HTML */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="relative border-2 border-[#8b7355] bg-black/40 overflow-hidden">
            <iframe
              src="https://raw.githubusercontent.com/Tigerwang17/5904-digital-humanities/main/australia_map.html"
              className="w-full h-[600px]"
              title="Australia Map Visualization"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
              }}
            />
            {/* Watermark */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 border border-[#8b7355]/50 pointer-events-none">
              <span className="text-xs text-[#8b7355]">
                地圖可視化 | Map Visualization
              </span>
            </div>
          </div>
        </motion.div>

        {/* Works List Organized by Era */}
        <div className="space-y-6">
          {worksDataByEra.map((eraData, eraIndex) => {
            const isEraExpanded = expandedEras.includes(eraData.era);
            const displayedWorks = isEraExpanded ? eraData.works : eraData.works.slice(0, 2);
            const hasMore = eraData.works.length > 2;

            return (
              <motion.div
                key={eraData.era}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: eraIndex * 0.1 }}
                className="bg-black/40 border-2 border-[#8b7355] p-4 backdrop-blur-sm"
              >
                {/* Era Header */}
                <div className="flex items-center gap-4 mb-4 pb-3 border-b-2 border-[#8b7355]/30">
                  <div className="w-10 h-10 bg-[#2f4f4f]/50 border-2 border-[#8b7355] flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                    }}
                  >
                    <span className="text-[#b8860b]">{eraIndex + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl text-[#b8860b]">{eraData.era}</h3>
                    <p className="text-sm text-[#8b7355]">{eraData.eraEn} · {eraData.works.length} 作品</p>
                  </div>
                </div>

                {/* Works Grid - Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  {displayedWorks.map((work, workIndex) => (
                    <motion.div
                      key={work.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: workIndex * 0.05 }}
                      className="bg-black/60 border border-[#8b7355]/50 hover:border-[#b8860b] transition-all duration-300 p-4 flex gap-4"
                    >
                      {/* Cover Image */}
                      <div className="w-24 h-32 flex-shrink-0 overflow-hidden border border-[#8b7355]">
                        <ImageWithFallback
                          src={work.cover}
                          alt={work.title}
                          className="w-full h-full object-cover"
                          style={{
                            filter: 'sepia(0.3) contrast(1.1)',
                          }}
                        />
                      </div>

                      {/* Work Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 mb-2">
                          <div className="w-2 h-2 bg-[#dc143c] flex-shrink-0 mt-1.5" style={{
                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                          }} />
                          <div className="flex-1 min-w-0">
                            <div className="text-gray-200 mb-1 leading-snug">
                              {work.title}
                            </div>
                            <div className="text-xs text-[#8b7355] mb-2">{work.year}</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {work.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Expand/Collapse Era Button */}
                {hasMore && (
                  <button
                    onClick={() => toggleEra(eraData.era)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-black/40 border border-[#8b7355]/50 hover:border-[#b8860b] hover:bg-[#b8860b]/10 transition-all duration-300 group"
                  >
                    <span className="text-sm text-[#8b7355] group-hover:text-[#b8860b] transition-colors">
                      {isEraExpanded ? '收起' : `展開全部 ${eraData.works.length} 作品`}
                    </span>
                    {isEraExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#8b7355] group-hover:text-[#b8860b] transition-colors" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#8b7355] group-hover:text-[#b8860b] transition-colors" />
                    )}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
