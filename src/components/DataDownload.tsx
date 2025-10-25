import { motion } from 'motion/react';
import { Download, Database } from 'lucide-react';
import databaseImage from 'figma:asset/e7364a0d92810e782fbdaadb1d2f66d4c6fce00f.png';

export function DataDownload() {
  return (
    <section id="data-download" className="min-h-screen py-12 px-6 bg-[#1a1a1a] relative overflow-hidden">
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
          <h2 className="text-5xl mb-4 text-[#b8860b]">數據下載</h2>
          <p className="text-xl text-[#8b7355]">Data Download</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/60 border-2 border-[#8b7355] p-8 backdrop-blur-sm relative overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
            }}
          >
            {/* Corner Decorations */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#b8860b]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#b8860b]" />

            {/* Database Icon Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#2f4f4f]/50 border-2 border-[#8b7355] flex items-center justify-center"
                style={{
                  clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                }}
              >
                <Database className="w-8 h-8 text-[#b8860b]" />
              </div>
              <div>
                <h3 className="text-3xl text-[#b8860b]">孫悟空作品數據庫</h3>
                <p className="text-[#8b7355]">Sun Wukong Works Database</p>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="flex gap-8 items-start">
              {/* Left: Database Screenshot */}
              <div className="w-1/2 border-2 border-[#8b7355]/50 overflow-hidden flex-shrink-0">
                <img
                  src={databaseImage}
                  alt="Database Screenshot"
                  className="w-full h-auto"
                  style={{
                    filter: 'brightness(0.95) contrast(1.05)',
                  }}
                />
              </div>

              {/* Right: Description and Download */}
              <div className="w-1/2 flex flex-col">
                {/* Description */}
                <div className="mb-8 space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    本數據庫收錄了與孫悟空相關的各類作品及對應角色描述，包含電影、電視劇、小說、動畫等多種媒介形式。
                    涵蓋作品的中英文標題、發行年份、媒介類型、時代背景以及地域信息等詳細資料。
                    目前已收錄81部作品，時間跨度從公元前5世纪至今。
                    角色信息數據包含描述原文及角色類型等多種信息。
                  </p>
                  <p className="text-[#8b7355] leading-relaxed">
                    This database contains various works related to Sun Wukong, including films, TV series, novels, animations, and other media formats.
                    The database includes detailed information such as Chinese and English titles, release year, medium type, era background, and regional information.
                    Currently contains 81+ works, spanning from 688 CE to 2020, with 8+ data fields.
                  </p>
                </div>

                {/* Download Button */}
                <motion.a
                  href="https://github.com/Tigerwang17/5904-digital-humanities/tree/main/database"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#b8860b] hover:border-[#dc143c] bg-black/50 hover:bg-[#dc143c]/20 transition-all duration-300 relative overflow-hidden"
                  style={{
                    clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-6 h-6 text-[#b8860b] group-hover:text-[#dc143c] transition-colors" />
                  <span className="relative z-10 text-[#b8860b] group-hover:text-[#dc143c] transition-colors">
                    下載數據庫 | Download Database
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b]/20 to-[#dc143c]/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </motion.a>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-[#8b7355]/30">
                  <p className="text-sm text-[#8b7355]">
                    * 歡迎訪問GitHub獲取最新版本<br />
                    * Please visit GitHub for the latest version
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
