import { Navbar } from "./components/Navbar";
import { HeroCarousel } from "./components/HeroCarousel";
import { EvolutionTimeline } from "./components/EvolutionTimeline";
import { WorksCollection } from "./components/WorksCollection";
import { ResearchReport } from "./components/ResearchReport";
import { DataDownload } from "./components/DataDownload";
import { TeamSection } from "./components/TeamSection";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { motion } from "motion/react";
import heroImage from "figma:asset/8d3b8e16a05a241d6fa1534d7b0f2592b1bd3232.png";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Home Section - Landing */}
      <section
        id="home"
        className="h-screen relative flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.3)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#1a1a1a]" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1
              className="text-5xl mb-6 text-[#b8860b] whitespace-nowrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                textShadow:
                  "0 0 30px rgba(184, 134, 11, 0.6), 0 0 60px rgba(184, 134, 11, 0.3)",
              }}
            >
              從頑石到不朽：孫悟空形象的千年裂變
            </motion.h1>

            <motion.p
              className="text-3xl mb-4 text-[#8b7355]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Sun Wukong Evolution in Digital Humanities
            </motion.p>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            />

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              從古印度神話到數字遊戲，跨越千年的文化符號演化
              <br />
              運用數字人文技術，探索東方神話的現代重生
            </motion.p>

            <motion.div
              className="mt-12 flex justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("carousel")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-8 py-4 border-2 border-[#8b7355] hover:border-[#b8860b] bg-black/50 hover:bg-[#b8860b]/20 transition-all duration-300 relative overflow-hidden"
                style={{
                  clipPath:
                    "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                <span className="relative z-10 text-[#b8860b] group-hover:text-white transition-colors">
                  開始探索 | Start Exploring
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b7355] to-[#b8860b] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("report")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-8 py-4 border-2 border-[#dc143c] hover:border-[#dc143c] bg-[#dc143c]/10 hover:bg-[#dc143c]/30 transition-all duration-300 relative overflow-hidden"
                style={{
                  clipPath:
                    "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                <span className="relative z-10 text-[#dc143c] group-hover:text-white transition-colors">
                  查看報告 | View Report
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#dc143c]/80 to-[#dc143c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: { repeat: Infinity, duration: 2 },
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-[#8b7355] rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1 h-2 bg-[#b8860b] rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
            <span className="text-xs text-[#8b7355]">
              Scroll Down
            </span>
          </div>
        </motion.div>
      </section>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Evolution Timeline */}
      <EvolutionTimeline />

      {/* Works Collection */}
      <WorksCollection />

      {/* Research Report */}
      <ResearchReport />

      {/* Data Download */}
      <DataDownload />

      {/* Team Section */}
      <TeamSection />

      {/* Background Music Player */}
      <BackgroundMusic />
    </div>
  );
}