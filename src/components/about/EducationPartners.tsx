import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface PartnerCategory {
  title: string;
  color: string;
  partners: string[];
}

export default function EducationPartners() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const categories: PartnerCategory[] = [
    {
      title: "공교육·학교 연계",
      color: "rgb(143, 188, 136)",
      partners: [
        "용인둔전초등학교 1,3,6학년 마음여행 2025",
        "연평초등학교1~6학년미술심리치료수업<느끼는대로>2023",
        "연평초등학교교원색채심리연수2023",
        "상도중학교1학년미술심리프로그램<무언의대화>2022",
        "쌍령초등학교2학년미술심리프로그램2022",
        "광주시특성화기관사업아동미술<마음이열리는>2022~2023",
        "경기꿈의학교아동,청소년창의미술<꿈결아트>2021~2022"
      ]
    },
    {
      title: "공공·지자체 협업",
      color: "rgb(217, 119, 87)",
      partners: [
        "용인문화돌봄사업 우주소년 책방 2025",
        "경기천만독서운동 색채감각 독서 워크숍 2025",
        "깊은산속 옹달샘 부모–자녀 감성 색채 워크숍 2025",
        "관악청년청 고립은둔지원사업 디깅플랫폼 총괄기획 2025",
        "관악문화재단 <관악청년청> 청년도전지원사업색채치유캠프2024",
        "서울역사어린이박물관조성자문위원2024",
        "성남꿈꾸는예술터<어린이를위한아트테라피>2022~2025",
        "KT&G아름드리예술교육다문화지역아동센터2024",
        "광주시특성화기관사업성인내마음을그리다2022~2023",
        "청주금빛도서관길위의인문학<성인색채심리워크숍> 2022",
        "코멘토대학생직무부트캠프멘토링2020~2021"
      ]
    },
    {
      title: "치유·대안·확장 교육 현장",
      color: "rgb(255, 182, 193)",
      partners: [
        "탈북 청소년 한꿈학교 북버스킹 프로그램 2025",
        "정심여자소년원 예술치유 워크숍 2025",
        "선한사마리아보육원 예술치유워크숍 2025",
        "깊은산속 옹달샘 부모–자녀 감성 색채 워크숍 2025",
        "문화돌봄사업 우주소년 책방 2025",
        "나뭇잎책방<나를찾아가는색채심리>2022",
        "창조성학교예술밥상워크숍 2022"
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="section-education-partners"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-white"
    >
      {/* Paper Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Badge */}
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-20 md:mb-28"
          style={{
            fontFamily: "'Noto Serif KR', serif",
            color: '#4A4A4A',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: '-0.02em'
          }}
        >
          함께해온 교육·공공 기관
        </motion.h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Category Badge */}
              <div 
                className="inline-block px-6 py-3 rounded-full border-2 mb-8"
                style={{
                  borderColor: category.color,
                  color: category.color
                }}
              >
                <span style={{ 
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1rem, 1.8vw, 0.85rem)',
                  fontWeight: 500,
                  letterSpacing: '0.02em'
                }}>
                  {category.title}
                </span>
              </div>

              {/* Partners List */}
              <div className="space-y-4">
                {category.partners.map((partner, partnerIdx) => (
                  <motion.div
                    key={partnerIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: partnerIdx * 0.05 }}
                    className="group relative pl-4 border-l-2 transition-all duration-300 hover:pl-6"
                    style={{
                      borderColor: 'rgba(0,0,0,0.06)'
                    }}
                  >
                    <p
                      className="transition-colors duration-300"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        color: '#4A4A4A',
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        fontWeight: 400
                      }}
                    >
                      {partner}
                    </p>
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-current transition-all duration-300 opacity-0 group-hover:opacity-100"
                      style={{ color: category.color }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center pt-12 border-t"
          style={{ borderColor: 'rgba(0,0,0,0.05)' }}
        >
          <p
            style={{
              color: 'rgba(255, 182, 193, 1)',
              fontSize: 'clamp(1rem, 1.5vw, 0.85rem)',
              lineHeight: '1.6',
              fontWeight: '300',
              letterSpacing: '0.01em'
            }}
          >
            아이·부모·청소년·청년까지 서로 다른 삶의 경계에서 '마음을 다시 언어로 만드는 예술'을 이어오고 있습니다.
          </p>
        </motion.div>
      </div>

      {/* Decorative Organic Shapes */}
      <motion.div 
        className="absolute top-10 left-20 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-5 bg-accent-green pointer-events-none"
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-40 h-40 md:w-64 md:h-64 rounded-full opacity-5 bg-accent-pink pointer-events-none"
      />
    </section>
  );
}
