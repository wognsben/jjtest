import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { getImagePath } from '../../utils/imageUtils';

export default function PartnerInstitutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  const values = [
    {
      id: 1,
      title: "감정이 안전하게 흐르는 자유로운 환경을 만들고,",
      tag: "EMOTIONAL FLOW",
      color: "#FFB6C1",
      delay: 0,
    },
    {
      id: 2,
      title: "우리는 이미 창조적 존재이며, 비교보다 자율성과 상상력을 존중하며,",
      tag: "CREATIVITY",
      color: "#8FBC88",
      delay: 0.1,
    },
    {
      id: 3,
      title: "감각 경험을 통해 마음이 안정되고 세계관의 기초가 자라며,",
      tag: "SENSORY GROUNDING",
      color: "#FFB6C1",
      delay: 0.2,
    },
    {
      id: 4,
      title: "부모의 회복과 이해가 아이의 정서와 성장에 직접적인 힘이 됨을 알고,",
      tag: "PARENT-CHILD HARMONY",
      color: "#FFB6C1",
      delay: 0.3,
    },
    {
      id: 5,
      title: "아이·부모·교육자가 각자의 고유함으로 연결될 때 진짜 성장이 완성됩니다.",
      tag: "INTEGRITY",
      color: "#8FBC88",
      delay: 0.4,
    },
  ];

  return (
    <>
      <hr className="section-divider" />
      <section 
        ref={sectionRef}
        className="relative py-32 md:py-48 lg:py-64 overflow-hidden bg-white"
      >
        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Decorative organic shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            style={{ y: imageY }}
            className="absolute top-10 left-20 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-5 bg-accent-green"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 md:w-64 md:h-64 rounded-full opacity-5 bg-accent-pink"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* ========== TOP: HERO VIDEO SECTION ========== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 md:mb-32"
          >
            {/* Video/Image Container */}
            <div 
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden group"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)',
              }}
            >
              {/* Background Image */}
              <motion.img
                src={getImagePath("/assets/about/emotion and touch/emotion and touch.jpg")}
                alt="크레용숲 철학 - 자연 속에서 자라는 아이들"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                onError={(e) => {
                  console.error('Image load error:', e.currentTarget.src);
                  // 확장자 시도 (.PNG, .png 등)
                  const src = e.currentTarget.src;
                  if (src.endsWith('.jpg')) {
                    e.currentTarget.src = getImagePath('/assets/about/emotion and touch/emotion and touch.PNG');
                  } else if (src.endsWith('.PNG')) {
                    e.currentTarget.src = getImagePath('/assets/about/emotion and touch/emotion and touch.png');
                  } else {
                    e.currentTarget.src = getImagePath('/assets/about/emotion and touch/emotion and touch.jpg');
                  }
                }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

              {/* Text overlay - Video section placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8 drop-shadow-lg leading-tight"
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.4)',
                    fontSize: 'clamp(0.85rem, 3vw, 2rem)',
                  }}
                >
                  <span style={{ color: '#bb8162' }}>감정과 감각, 창조성과 진정성이 만나</span>
                  <br className="lg:hidden" />
                  <span className="hidden lg:inline"> </span>
                  <span style={{ color: '#8FBC88' }}>한 사람의 숲을 자라게 한다고 믿기에</span>
                </motion.h2>
              </div>
            </div>
          </motion.div>

          {/* ========== MIDDLE: 5 VALUE CARDS ========== */}
          <motion.div
            className="mb-20 md:mb-32"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: value.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative group"
                >
                  {/* Hand-drawn Crayon Circle Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-square flex items-center justify-center p-6 md:p-8"
                  >
                    {/* SVG Hand-drawn circle border */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 200 200"
                      style={{
                        filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.08))',
                      }}
                    >
                      {/* Wobbly circle path - different for each card */}
                      <path
                        d={
                          value.id === 1 
                            ? "M100,10 Q150,15 170,50 T190,100 Q185,145 160,165 T100,190 Q55,185 35,155 T10,100 Q15,60 40,35 T100,10 Z"
                            : value.id === 2
                            ? "M100,8 Q155,12 175,55 T192,100 Q188,150 155,170 T100,192 Q50,188 30,150 T8,100 Q12,50 45,30 T100,8 Z"
                            : value.id === 3
                            ? "M100,12 Q148,18 168,52 T188,100 Q183,148 158,168 T100,188 Q52,182 32,152 T12,100 Q18,55 42,32 T100,12 Z"
                            : value.id === 4
                            ? "M100,11 Q152,16 172,54 T189,100 Q186,147 162,167 T100,189 Q54,184 34,154 T11,100 Q16,56 41,34 T100,11 Z"
                            : "M100,9 Q151,13 171,53 T191,100 Q187,149 159,169 T100,191 Q51,186 31,151 T9,100 Q13,51 43,31 T100,9 Z"
                        }
                        fill={value.color === "#FFB6C1" 
                          ? 'rgba(255, 182, 193, 0.15)' 
                          : 'rgba(143, 188, 136, 0.15)'}
                        stroke={value.color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.6"
                        style={{
                          paintOrder: 'stroke fill',
                        }}
                      />
                      
                      {/* Additional inner wobbly stroke for crayon effect */}
                      <path
                        d={
                          value.id === 1 
                            ? "M100,10 Q150,15 170,50 T190,100 Q185,145 160,165 T100,190 Q55,185 35,155 T10,100 Q15,60 40,35 T100,10 Z"
                            : value.id === 2
                            ? "M100,8 Q155,12 175,55 T192,100 Q188,150 155,170 T100,192 Q50,188 30,150 T8,100 Q12,50 45,30 T100,8 Z"
                            : value.id === 3
                            ? "M100,12 Q148,18 168,52 T188,100 Q183,148 158,168 T100,188 Q52,182 32,152 T12,100 Q18,55 42,32 T100,12 Z"
                            : value.id === 4
                            ? "M100,11 Q152,16 172,54 T189,100 Q186,147 162,167 T100,189 Q54,184 34,154 T11,100 Q16,56 41,34 T100,11 Z"
                            : "M100,9 Q151,13 171,53 T191,100 Q187,149 159,169 T100,191 Q51,186 31,151 T9,100 Q13,51 43,31 T100,9 Z"
                        }
                        fill="none"
                        stroke={value.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="4,2"
                        opacity="0.3"
                      />
                    </svg>

                    {/* Inner glow on hover */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${value.color}30 0%, transparent 70%)`,
                      }}
                    />

                    {/* Text content */}
                    <p 
                      className="relative z-10 text-center text-sm md:text-base leading-relaxed whitespace-normal break-keep"
                      style={{
                        color: value.color === "#FFB6C1" ? '#D97B8F' : '#6B9F64',
                      }}
                    >
                      {value.title}
                    </p>
                  </motion.div>

                  {/* Tag below circle */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: value.delay + 0.2 }}
                    className="mt-6 text-center"
                  >
                    <div 
                      className="inline-flex items-center justify-center px-6 py-2 rounded-full border text-xs tracking-wider"
                      style={{
                        borderColor: value.color === "#FFB6C1" ? '#FFB6C140' : '#8FBC8840',
                        color: value.color === "#FFB6C1" ? '#D97B8F' : '#6B9F64',
                        backgroundColor: value.color === "#FFB6C1" 
                          ? 'rgba(255, 182, 193, 0.05)' 
                          : 'rgba(143, 188, 136, 0.05)',
                      }}
                    >
                      {value.tag}
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* ========== MOBILE ONLY: QUOTE CARD (6th grid item) ========== */}
              <motion.div
                key="quote-mobile"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative group md:hidden col-span-2"
              >
                <div className="text-center">
                  {/* Decorative quotation mark */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-6"
                  >
                    <svg 
                      className="w-12 h-12 mx-auto opacity-20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: '#FFB6C1' }}
                    >
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </motion.div>

                  {/* Quote text */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="leading-relaxed mb-6"
                    style={{
                      color: '#D97B8F',
                      fontStyle: 'italic',
                      fontSize: 'clamp(0.85rem, 2vw, 1.5rem)',
                    }}
                  >
                    "인간에게 자신의 영혼보다 더 조용하고 평온한 은신처는 없다."
                  </motion.blockquote>

                  {/* Citation */}
                  <motion.cite
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="not-italic text-sm md:text-base text-brown-600"
                  >
                    - 마르쿠스 아우렐리우스 철학자
                  </motion.cite>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ========== BOTTOM: QUOTE SECTION (PC ONLY) ========== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block text-center max-w-4xl mx-auto"
          >
            {/* Decorative quotation mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6"
            >
              <svg 
                className="w-12 h-12 mx-auto opacity-20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: '#FFB6C1' }}
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </motion.div>

            {/* Quote text */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="leading-relaxed mb-6"
              style={{
                color: '#D97B8F',
                fontStyle: 'italic',
                fontSize: 'clamp(0.85rem, 2vw, 1.5rem)',
              }}
            >
              "인간에게 자신의 영혼보다 더 조용하고 평온한 은신처는 없다."
            </motion.blockquote>

            {/* Citation */}
            <motion.cite
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="not-italic text-sm md:text-base text-brown-600"
            >
              - 마르쿠스 아우렐리우스 철학자
            </motion.cite>
          </motion.div>
        </div>
      </section>
    </>
  );
}
