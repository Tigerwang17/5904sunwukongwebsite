import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: '首頁', sublabel: 'Home' },
    { id: 'carousel', label: '神祇演變', sublabel: 'Deity Carousel' },
    { id: 'evolution', label: '演化歷程', sublabel: 'Evolution' },
    { id: 'works', label: '作品集藏', sublabel: 'Works' },
    { id: 'report', label: '研究報告', sublabel: 'Report' },
    { id: 'data-download', label: '數據下載', sublabel: 'Database' },
    { id: 'team', label: '團隊介紹', sublabel: 'Team Q&A' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'h-[60px]' : 'h-[80px]'
      }`}
      style={{
        background: 'rgba(26, 26, 26, 0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(139, 115, 85, 0.3)',
      }}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-[#b8860b] text-2xl">🐵</div>
          <div>
            <div className="text-[#b8860b]">孫悟空演化研究</div>
            <div className="text-xs text-[#8b7355]">Sun Wukong Digital Humanities</div>
          </div>
        </motion.div>

        <div className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative cursor-pointer flex flex-col items-center min-w-[90px]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm text-gray-300 group-hover:text-[#b8860b] transition-colors duration-300">
                {item.label}
              </div>
              <div className="text-xs text-[#8b7355] opacity-60">
                {item.sublabel}
              </div>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8b7355] to-[#b8860b]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
