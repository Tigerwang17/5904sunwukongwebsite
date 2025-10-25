import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from 'figma:asset/177e483de2a35c80e9b920968278695026e37da2.png';
import tvSeriesImage from 'figma:asset/db881157d179746437645570eb0d44995436c154.png';
import mingDynastyImage from 'figma:asset/a8f421e9b32295bc1d4612e595074617bd5540f7.png';
import hanumanImage from 'figma:asset/72dea58fb01631cc706c26771b48ffc090040e9d.png';

const slides = [
  {
    id: 1,
    title: '印度神猴哈努曼',
    subtitle: 'Indian Deity Hanuman',
    description: '南亞壁畫風格 | South Asian Mural Style',
    image: hanumanImage,
    era: '遠古時代',
  },
  {
    id: 2,
    title: '明代齊天大聖',
    subtitle: 'Ming Dynasty Monkey King',
    description: '木刻版畫質感 | Woodcut Print Texture',
    image: mingDynastyImage,
    era: '明代',
  },
  {
    id: 3,
    title: '影視劇孫悟空',
    subtitle: 'TV Series Sun Wukong',
    description: '八零後童年大聖夢 | Post-80s\' Childhood Dream of the Monkey King',
    image: tvSeriesImage,
    era: '現代',
  },
  {
    id: 4,
    title: '黑神話·悟空',
    subtitle: 'Black Myth Wukong',
    description: '次世代遊戲渲染 | Next-Gen Game Rendering',
    image: heroImage,
    era: '數字時代',
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div id="carousel" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentIndex].image})`,
              filter: 'brightness(0.4)',
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a1a]" />

          <div className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center px-6 max-w-4xl"
            >
              <motion.div 
                className="inline-block px-6 py-2 mb-6 border border-[#8b7355] bg-black/40 backdrop-blur-sm"
                style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
              >
                <span className="text-[#b8860b] text-sm tracking-wider">{slides[currentIndex].era}</span>
              </motion.div>

              <motion.h1 
                className="text-6xl mb-4 text-[#b8860b]"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  textShadow: '0 0 20px rgba(184, 134, 11, 0.5)',
                }}
              >
                {slides[currentIndex].title}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-[#8b7355] mb-3"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {slides[currentIndex].subtitle}
              </motion.p>

              <motion.p 
                className="text-gray-400"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {slides[currentIndex].description}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 border border-[#8b7355] hover:bg-[#8b7355]/20 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="text-[#b8860b]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 border border-[#8b7355] hover:bg-[#8b7355]/20 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="text-[#b8860b]" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group"
          >
            <div 
              className={`w-16 h-1 transition-all duration-500 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-[#8b7355] to-[#b8860b]' 
                  : 'bg-gray-600'
              }`}
              style={{
                boxShadow: index === currentIndex ? '0 0 10px rgba(184, 134, 11, 0.8)' : 'none',
              }}
            />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 bg-[#b8860b] opacity-50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: 'linear' }}
                style={{ transformOrigin: 'left' }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
