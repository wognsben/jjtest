import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function PremiumHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Ambient gradient background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#2D5016] blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#D4A574] blur-3xl rounded-full" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(107,68,35,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107,68,35,.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <motion.div 
        style={{ scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32"
      >
        {/* Eyebrow text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fadfde]/30 border border-[#6B4423]/10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2D5016] animate-pulse" />
            <span className="text-sm text-[#6B4423]/70 tracking-wider uppercase">Premium Experience</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-8 relative z-20"
          style={{ opacity: 1 }}
        >
          <span className="block text-[clamp(2.5rem,6vw,6rem)] leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-[#2D5016] via-[#D4A574] to-[#6B4423] bg-clip-text text-transparent font-medium">
              우리 아이의 다음 이야기
            </span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-[clamp(1rem,2vw,1.5rem)] text-[#6B4423]/60 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          크레용숲과 함께 새로운 예술의 여정을 시작하세요.
          <br className="hidden md:block" />
          언제든지 문의 주시면 성심껏 안내해드리겠습니다.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <button className="group relative px-8 py-4 rounded-full bg-[#2D5016] text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(45,80,22,0.3)]">
            <span className="relative z-10 flex items-center gap-2 text-lg">
              시작하기
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-[#D4A574]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[#6B4423]/30 uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-[#6B4423]/50 to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

