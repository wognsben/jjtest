import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { getImagePath } from '../../utils/imageUtils';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const textY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  useEffect(() => {
    // 1. 이미지 갤러리 - Stagger Reveal
    if (galleryRef.current) {
      const galleryItems = galleryRef.current.querySelectorAll('.founder-gallery-item');
      if (galleryItems.length > 0) {
        gsap.fromTo(
          galleryItems,
          {
            opacity: 0,
            y: 18,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.06,
            immediateRender: false,
            scrollTrigger: {
              trigger: galleryRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }

    if (!cardRef.current) return;

    const card = cardRef.current;

    // 2. 카드 전체 - Subtle Entrance Motion
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 24,
        filter: 'blur(6px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
        },
      }
    );

    // 3. 배경 이미지 - Slow Drift Parallax
    gsap.to(card, {
      backgroundPosition: '50% 44%',
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });

    // 4. 카드 내부 콘텐츠 - Hierarchy Reveal
    const cardChildren = card.querySelectorAll('.founder-card-section');
    if (cardChildren.length > 0) {
      gsap.fromTo(
        cardChildren,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.12,
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === card || trigger.vars.trigger === galleryRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <>
      <hr className="section-divider" />
      <section 
        ref={sectionRef}
        className="relative overflow-hidden"
        style={{
          paddingTop: 'clamp(6rem, 15vw, 16rem)',
          paddingBottom: 'clamp(6rem, 15vw, 16rem)',
          background: 'linear-gradient(180deg, rgba(255, 182, 193, 0.08) 0%, rgba(255, 182, 193, 0.04) 50%, rgba(255, 182, 193, 0.02) 100%)',
        }}
      >
        {/* Paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div 
          className="relative max-w-[1600px] mx-auto"
          style={{
            paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
          }}
        >
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 'clamp(3rem, 8vw, 4rem)' }}
          >
            <div 
              className="inline-block rounded-full border-2"
              style={{
                backgroundColor: 'rgba(143, 188, 136, 0.1)',
                borderColor: 'rgba(143, 188, 136, 0.3)',
                color: '#8FBC88',
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.625rem, 1.5vw, 0.8125rem)',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                paddingLeft: 'clamp(1.25rem, 3vw, 1.5rem)',
                paddingRight: 'clamp(1.25rem, 3vw, 1.5rem)',
                paddingTop: 'clamp(0.375rem, 1vw, 0.5rem)',
                paddingBottom: 'clamp(0.375rem, 1vw, 0.5rem)',
              }}
            >
              Founder's Message
            </div>
          </motion.div>

          {/* Main Q&A with Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-5 items-start"
            style={{
              gap: 'clamp(2rem, 6vw, 5rem)',
            }}
          >
            {/* Image - 2 columns */}
            <motion.div
              className="lg:col-span-2 relative group"
            >
              <div className="sticky top-24">
                {/* Container for overlapping images */}
                <div className="relative">
                  {/* Founder 2 - Main large image */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative z-0"
                  >
                    <div 
                      className="relative overflow-hidden rounded-3xl"
                      style={{
                        boxShadow: '0 30px 80px rgba(0,0,0,0.12), 0 15px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)'
                      }}
                    >
                      <motion.img
                        src={getImagePath("/assets/about/founder/파운더2.PNG")}
                        alt="크레용숲 교육 현장"
                        className="w-full h-auto"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      />
                      
                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"
                      />
                    </div>
                  </motion.div>

                  {/* Founder 1 - Small image overlapping on top-left with rotation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute z-10"
                    style={{
                      width: '45%',
                      maxWidth: 'clamp(200px, 25vw, 280px)',
                      left: 'clamp(-20px, -2vw, -30px)',
                      top: 'clamp(-30px, -3vw, -40px)',
                      bottom: 'auto',
                    }}
                  >
                    <div 
                      className="relative overflow-hidden rounded-3xl"
                      style={{
                        boxShadow: '0 20px 60px rgba(0,0,0,0.2), 0 10px 30px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1)',
                        transform: 'rotate(-5deg)',
                      }}
                    >
                      <motion.img
                        src={getImagePath("/assets/about/founder/파운더1.PNG")}
                        alt="크레용숲 교육 현장"
                        className="w-full h-auto"
                        whileHover={{ scale: 1.05, rotate: '-3deg' }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      />
                      
                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"
                      />
                    </div>
                  </motion.div>

                  {/* Founder 3 - Below Founder 2 with spacing */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-0"
                    style={{
                      marginTop: 'clamp(2rem, 5vw, 4rem)',
                    }}
                  >
                    <div 
                      className="relative overflow-hidden rounded-3xl"
                      style={{
                        boxShadow: '0 30px 80px rgba(0,0,0,0.12), 0 15px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)'
                      }}
                    >
                      <motion.img
                        src={getImagePath("/assets/about/founder/파운더3.PNG")}
                        alt="크레용숲 교육 현장"
                        className="w-full h-auto"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      />
                      
                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"
                      />
                    </div>
                  </motion.div>
                </div>
                
                {/* Caption */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 text-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    color: '#8FBC88',
                    letterSpacing: '0.05em',
                  }}
                >
                  아이들의 색채 여정을 함께하는 순간
                </motion.p>
              </div>
            </motion.div>

            {/* Text - 3 columns */}
            <motion.div
              className="lg:col-span-3 space-y-8"
            >
              {/* Question */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  color: '#bb8162',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                }}
              >
                Q. 결국, 크레용숲이 아이에게 주고 싶은 가장 큰 선물은 무엇인가요?
              </motion.h3>

              {/* Answer sections */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  저는 아이들에게 <span style={{ color: '#8FBC88', fontWeight: 500 }}>마음이 새로워지는 예술 경험</span>을 선물하고 싶습니다. 그리고 그보다 더 중요한 것— <span style={{ color: '#8FBC88', fontWeight: 500 }}>좋은 어른의 마음을 옆에서 보여주는 시간</span>을 주고 싶습니다.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  수업이 끝난 후 아이들이 남기는 글을 보면 "마음이 열렸어요." "나 자신을 알게 된 것 같다." 이런 문장들이 있어요. 그 말 하나에 저는 언제나 멈춰 서게 됩니다. 아이들은 누구보다 빠르게 진심을 알아차립니다.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  <span style={{ color: '#8FBC88', fontWeight: 500 }}>"마음을 그려보자"</span> 이 한마디만 들어도 <span style={{ color: '#8FBC88', fontWeight: 500 }}>자신의 영혼과 연결되는 길을 금방 찾아가요</span>.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  저는 아이들이 꼭 예술가가 되지 않아도 된다고 생각합니다. 대신 <span style={{ color: '#8FBC88', fontWeight: 500 }}>일상을 예술처럼 보고, 느끼고, 반응할 수 있는 사람, 감정이 굳어버리지 않은 말랑한 어른</span>으로 자라길 바랄 뿐입니다.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  그래서 크레용숲의 교육은 <span style={{ color: '#4A4A4A', fontWeight: 400 }}>'어떻게 잘 그릴까?'</span>보다 <span style={{ color: '#8FBC88', fontWeight: 500 }}>'어떻게 정서와 세계관을 키울까?'</span><span style={{ color: '#8FBC88', fontWeight: 500 }}>를 더 깊이 고민합니다</span>.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  저는 아이들의 그림을 평가하지 않습니다. 대신 늘 이렇게 묻습니다. <span style={{ color: '#8FBC88', fontStyle: 'italic' }}>"오늘 이 아이는 어떤 감정을 색으로 말하고 있을까?"</span> 이 질문을 붙들기만 해도 감정 이해 → 자기서사 → 관계 → 회복력 모든 성장의 흐름이 자연스럽게 열립니다.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  시험도, 성적도, 문제집도 줄 수 없는 단 하나. 그림 속에만 숨겨진 힘— <span style={{ color: '#8FBC88', fontWeight: 500 }}>감정의 뿌리를 붙잡아 스스로 창조의 불을 붙이는 능력.</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  예술가는 이렇게 태어나고, 아이도 마찬가지입니다. 감정은 관리하는 것이 아니라 <span style={{ color: '#8FBC88', fontWeight: 500 }}>창조의 불쏘시개가</span> 되어야 합니다. 이걸 배운 아이는 평생 자기 삶을 스스로 데우고, 움직입니다.
                </motion.p>

                {/* Quote box */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="my-10 py-8 px-8 rounded-2xl border-l-4"
                  style={{
                    backgroundColor: 'rgba(143, 188, 136, 0.05)',
                    borderColor: '#8FBC88',
                  }}
                >
                  <div className="space-y-3">
                    <p
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(16px, 2vw, 20px)',
                        color: '#8FBC88',
                        lineHeight: '1.8',
                        fontWeight: 500,
                      }}
                    >
                      "너는 너의 색으로 살아도 돼."
                    </p>
                    <p
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(16px, 2vw, 20px)',
                        color: '#8FBC88',
                        lineHeight: '1.8',
                        fontWeight: 500,
                      }}
                    >
                      "너의 마음은 언제든 이야기할 수 있어."
                    </p>
                    <p
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(16px, 2vw, 20px)',
                        color: '#8FBC88',
                        lineHeight: '1.8',
                        fontWeight: 500,
                      }}
                    >
                      "너는 이미 충분히 창조적인 존재야."
                    </p>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  아이의 색이 잊히지 않도록, 그 아이만의 숲이 자라는 장면을 옆에서 지켜보는 일— 그게 저에게는 가장 큰 기쁨입니다.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  그리고 이 여정은 아이만의 것이 아닙니다. <span style={{ color: '#4A4A4A', fontWeight: 500 }}>부모의 마음이 안정될 때 아이의 마음은 가장 자연스럽게 회복됩니다.</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  그래서 크레용숲은 엄마리츄얼, 성인 워크숍을 함께 운영하며 부모가 먼저 자기 마음을 돌보는 시간을 마련합니다. <span style={{ color: '#8FBC88', fontWeight: 500 }}>부모의 여유와 따뜻함이 아이에게는 가장 안전한 세계</span>가 되기 때문입니다.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  앞으로 크레용숲은 아이의 감정, 부모의 마음, 그리고 한 사람의 세계관이 자연스럽게 이어지는 <span style={{ color: '#8FBC88', fontWeight: 500 }}>'색채 기반 감정 생태계'</span>로 확장될 것입니다.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#4A4A4A',
                    lineHeight: 1.8,
                  }}
                >
                  여기서의 그림은 작품이 아니라 마음의 기록, 성장은 성적이 아니라 <span style={{ color: '#8FBC88', fontWeight: 500 }}>자기서사</span>의 탄생입니다.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-loose pt-6"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(15px, 1.8vw, 18px)',
                    color: '#4A4A4A',
                    lineHeight: '2',
                    fontWeight: 400,
                  }}
                >
                  이 숲에서, 누군가가 처음으로 자신의 마음과 연결되는 장면을 함께 맞이할 수 있기를 바랍니다.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-pink-200/30 to-transparent my-32" />

          {/* Credentials Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* 6 Image Grid */}
            <div
              ref={galleryRef}
              className="mx-auto founder-gallery"
              style={{ 
                width: '1500px', 
                maxWidth: '100%',
                paddingLeft: 'clamp(40px, 6vw, 64px)',
                paddingRight: 'clamp(40px, 6vw, 64px)',
                boxSizing: 'border-box',
              }}
            >
              <div className="flex flex-row gap-2 md:gap-3" style={{ width: '100%' }}>
              {[1, 2, 3, 4, 5, 6].map((item, index) => {
                const extension = item === 6 ? 'png' : 'jpg';
                return (
                  <div
                    key={item}
                    className="founder-gallery-item relative group overflow-hidden rounded-lg shadow-md"
                    style={{ 
                      flex: '1 1 0',
                      height: '240px',
                      minWidth: 0,
                    }}
                  >
                    <ImageWithFallback
                      src={getImagePath(`/assets/about/under of founder/under of founder-${item}.${extension}`)}
                      alt={`크레용숲 활동 ${item}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                );
              })}
              </div>
            </div>

            {/* Credentials Text */}
            <div
              ref={cardRef}
              className="mx-auto relative founder-card"
              style={{
                width: '1500px',
                maxWidth: '100%',
                backgroundColor: '#FAF9F7',
                backgroundImage: `url(${getImagePath('/assets/about/under of founder/founder-typo.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat',
                borderRadius: '32px',
                padding: 'clamp(40px, 6vw, 64px)',
                border: '1px solid rgba(166, 124, 82, 0.12)',
                boxShadow: '0 2px 20px rgba(0, 0, 0, 0.04)',
                boxSizing: 'border-box',
              }}
            >
              {/* Name & Main Title */}
              <div className="founder-card-section mb-8 pb-6 border-b border-brown-200/30">
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    color: '#A67C52',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                  }}
                >
                  꽃밭샘 김결
                </h3>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    color: '#8FBC88',
                    fontWeight: 500,
                    lineHeight: '1.6',
                  }}
                >
                  색채심리 기반 예술교육가
                </p>
              </div>

              {/* Career Items - Horizontal Text Layout */}
              <div className="founder-card-section mb-8" style={{ width: '100%' }}>
                <div className="flex gap-2 md:gap-3 lg:gap-4 items-center flex-wrap md:flex-nowrap justify-start md:justify-between">
                  {[
                    '색채심리 기반 자기이해 콘텐츠 기획자',
                    '20년 경력 패션 소재 디자이너 & 컬러리스트',
                    '국제색채심리협회 전문색채심리사',
                    '스에나가 메소드 색채심리연구소 선임연구원',
                    '아트앤포레스트 · 크레용숲 대표',
                  ].map((credential, index) => (
                    <CareerTextItem key={index} credential={credential} index={index} />
                  ))}
                </div>
              </div>

              {/* Books and Awards Section - Horizontal Layout */}
              <div className="founder-card-section mb-8 flex flex-row gap-8 md:gap-12 lg:gap-16" style={{ flexWrap: 'wrap' }}>
                {/* Books Section */}
                <div style={{ flex: '1', minWidth: '200px' }}>
                  <h4
                    className="mb-4"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(16px, 2vw, 20px)',
                      color: '#A67C52',
                      fontWeight: 600,
                    }}
                  >
                    저서 | 색과 마음을 연결하는 기록들
                  </h4>
                  <div className="space-y-2">
                    {[
                      '《실키한 린넨, 터프한 블라우스》',
                      '《학교생활을 색칠하다》',
                      '《추억을 색칠하다》',
                      '《싸가지가 생겼어》',
                      '《마음이 성장하는 컬러다이어리》',
                    ].map((book, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.0 + index * 0.05 }}
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontSize: 'clamp(14px, 1.6vw, 16px)',
                          color: '#6B5C4F',
                          lineHeight: '1.8',
                        }}
                      >
                        {book}
                      </motion.p>
                    ))}
                  </div>
                </div>

                {/* Awards Section */}
                <div style={{ flex: '1', minWidth: '200px' }}>
                  <h4
                    className="mb-4"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(16px, 2vw, 20px)',
                      color: '#A67C52',
                      fontWeight: 600,
                    }}
                  >
                    수상
                  </h4>
                  <div className="space-y-2">
                    {[
                      '2024 부산국제어린이청소년아트페어(BICAF) 우수지도자상 수상',
                      '2025 서울역사박물관 자문위원',
                    ].map((award, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          fontFamily: "'Noto Sans KR', sans-serif",
                          fontSize: 'clamp(14px, 1.6vw, 16px)',
                          color: '#6B5C4F',
                          lineHeight: '1.8',
                        }}
                      >
                        • {award}
                      </motion.p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Social Links Section - Premium Minimal Style */}
                  <div className="founder-card-section mt-12 pt-8" style={{
                    borderTop: '1px solid rgba(166, 124, 82, 0.08)',
                  }}>
                {/* Divider - Gradient */}
                <div 
                  className="mb-8"
                  style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(166, 124, 82, 0.08) 30%, rgba(166, 124, 82, 0.12) 50%, rgba(166, 124, 82, 0.08) 70%, transparent 100%)',
                  }}
                />

                {/* Social Links - Quiet text links */}
                <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-10 justify-center md:justify-start">
                  <a
                    href="https://www.instagram.com/crayonforest.art"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4A4A4A] transition-colors duration-300"
                    style={{
                      fontFamily: "'Noto Sans KR', sans-serif",
                      fontSize: 'clamp(13px, 1.2vw, 14px)',
                      fontWeight: 300,
                      letterSpacing: '-0.01em',
                      color: '#8B8B8B',
                      textDecoration: 'none',
                    }}
                  >
                    Instagram
                  </a>
                  
                  <a
                    href="https://brunch.co.kr/@jsm925"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4A4A4A] transition-colors duration-300"
                    style={{
                      fontFamily: "'Noto Sans KR', sans-serif",
                      fontSize: 'clamp(13px, 1.2vw, 14px)',
                      fontWeight: 300,
                      letterSpacing: '-0.01em',
                      color: '#8B8B8B',
                      textDecoration: 'none',
                    }}
                  >
                    Brunch
                  </a>
                  
                  <a
                    href="https://www.ibabynews.com/news/articleView.html?idxno=114791"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4A4A4A] transition-colors duration-300"
                    style={{
                      fontFamily: "'Noto Sans KR', sans-serif",
                      fontSize: 'clamp(13px, 1.2vw, 14px)',
                      fontWeight: 300,
                      letterSpacing: '-0.01em',
                      color: '#8B8B8B',
                      textDecoration: 'none',
                    }}
                  >
                    베이비뉴스
                  </a>

                  <a
                    href="https://blog.naver.com/art_and_forrest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4A4A4A] transition-colors duration-300"
                    style={{
                      fontFamily: "'Noto Sans KR', sans-serif",
                      fontSize: 'clamp(13px, 1.2vw, 14px)',
                      fontWeight: 300,
                      letterSpacing: '-0.01em',
                      color: '#8B8B8B',
                      textDecoration: 'none',
                    }}
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* 1. 이미지 갤러리 - Hover Zoom */
        @media (hover: hover) {
          .founder-gallery-item img {
            transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .founder-gallery-item:hover img {
            transform: scale(1.035);
          }
        }

        /* 2. 경력 라인 - Micro Interaction (PC만) */
        @media (hover: hover) {
          .founder-card .group:hover p {
            transform: translateX(2px);
            color: #4a4a4a;
            transition: transform 0.4s ease, color 0.4s ease;
          }

          .founder-card .group:hover span {
            color: rgba(166, 124, 82, 0.6);
            transition: color 0.4s ease;
          }
        }

        /* 3. 카드 전체 - Breathing Effect */
        @keyframes slowBreath {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1px); }
        }

        @keyframes subtleGlow {
          0%, 100% { 
            border-color: rgba(166, 124, 82, 0.12);
          }
          50% { 
            border-color: rgba(166, 124, 82, 0.18);
          }
        }

        .founder-card {
          animation: slowBreath 10s ease-in-out infinite, subtleGlow 8s ease-in-out infinite;
        }

        /* 4. Hover 시 카드 전체 - Breathing Effect (PC만) */
        @media (hover: hover) {
          .founder-card {
            transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1),
                        box-shadow 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .founder-card:hover {
            transform: translateY(-2px);
            box-shadow:
              0 40px 80px rgba(0, 0, 0, 0.06),
              0 10px 30px rgba(0, 0, 0, 0.04);
          }
        }

        /* 5. 하단 링크 - Editorial Finish */
        .founder-card a {
          transition: color 0.4s ease;
        }

        .founder-card a:hover {
          color: #4a4a4a;
        }
      `}</style>
    </>
  );
}

// Premium Career Text Item Component
function CareerTextItem({ credential, index }: { credential: string; index: number }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: 0.7 + index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group relative flex items-center"
      style={{ flexShrink: 1, minWidth: 0 }}
    >
      {/* Number - 숨김 (공간 절약) */}
      <motion.span
        className="hidden md:inline-block"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '9px',
          fontWeight: 500,
          color: 'rgba(166, 124, 82, 0.35)',
          letterSpacing: '0.12em',
          marginRight: '12px',
          flexShrink: 0,
          transition: 'all 0.6s cubic-bezier(.16, 1, .3, 1)',
        }}
        whileHover={!isMobile ? { 
          color: 'rgba(166, 124, 82, 0.5)',
        } : {}}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.span>

      {/* Divider - 작은 화면에서만 숨김 */}
      <motion.div
        className="hidden md:block w-px h-6 mr-3 flex-shrink-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(166, 124, 82, 0.12) 50%, transparent 100%)',
          transition: 'all 0.6s cubic-bezier(.16, 1, .3, 1)',
        }}
        whileHover={!isMobile ? {
          background: 'linear-gradient(180deg, transparent 0%, rgba(166, 124, 82, 0.25) 50%, transparent 100%)',
        } : {}}
      />

      {/* Text - 더 작고 간결하게 */}
      <motion.p
        style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: 'clamp(11px, 1.1vw, 13px)',
          color: '#6B5C4F',
          fontWeight: 400,
          lineHeight: '1.5',
          letterSpacing: '-0.015em',
          whiteSpace: 'nowrap',
          transition: 'all 0.6s cubic-bezier(.16, 1, .3, 1)',
        }}
        whileHover={!isMobile ? { 
          color: '#4A4A4A',
        } : {}}
      >
        {credential}
      </motion.p>
    </motion.div>
  );
}
