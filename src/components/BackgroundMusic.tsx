import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 云宫迅音 - Yun Gong Xun Yin (Theme from 1986 Journey to the West TV Series)
  // Using raw GitHub URL for direct audio streaming
  const musicSrc = 'https://raw.githubusercontent.com/Tigerwang17/5904-digital-humanities/main/%E4%BA%91%E5%AE%AB%E8%BF%85%E9%9F%B3-cut.MP3';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {
        // Browser prevented autoplay
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={musicSrc}
        loop
        preload="auto"
      />
      
      <motion.button
        onClick={toggleMusic}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center bg-black/60 border border-[#8b7355] hover:border-[#b8860b] backdrop-blur-sm transition-all duration-300 group"
        style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
        title={isPlaying ? '暫停音樂 - 雲宮迅音 | Pause Music - Yun Gong Xun Yin' : '播放音樂 - 雲宮迅音 | Play Music - Yun Gong Xun Yin'}
      >
        {isPlaying ? (
          <Volume2 className="text-[#b8860b] w-6 h-6 group-hover:scale-110 transition-transform" />
        ) : (
          <VolumeX className="text-[#8b7355] w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
        
        {/* Pulse effect when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 border border-[#b8860b]"
            style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
            animate={{
              opacity: [0.5, 0],
              scale: [1, 1.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        )}
      </motion.button>
    </>
  );
}
