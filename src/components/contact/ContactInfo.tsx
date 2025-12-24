import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getImagePath } from '../../utils/imageUtils';

gsap.registerPlugin(ScrollTrigger);

export default function ContactInfo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger animation for info items
      gsap.from(itemsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
        opacity: 0,
        y: 20,
        stagger: 0.08,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactItems = [
    {
      icon: getImagePath('/assets/1x/blog bl.png'),
      label: '네이버 블로그',
      value: 'dreaming_art_play',
      link: 'https://blog.naver.com/dreaming_art_play',
      color: '#03C75A',
    },
    {
      icon: getImagePath('/assets/1x/brunch.png'),
      label: '브런치',
      value: 'jsm925',
      link: 'https://brunch.co.kr/@jsm925',
      color: '#00C896',
    },
    {
      icon: getImagePath('/assets/1x/instagram.png'),
      label: '인스타그램',
      value: '@crayonforest.art',
      link: 'https://instagram.com/crayonforest.art',
      color: '#E4405F',
      description: '@crayonforest_childart',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F5F5DC]/20"
    >
      {/* Section divider */}
      <motion.div
        className="max-w-5xl mx-auto mb-20 h-px bg-gradient-to-r from-transparent via-[#6B4423]/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="relative group"
              data-cursor-hover
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative bg-white border border-black/5 rounded-2xl p-8 min-h-[200px] flex flex-col overflow-hidden">
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-8 transition-opacity duration-600"
                  style={{
                    background: `radial-gradient(circle at center, ${item.color} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon - PNG Image */}
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white flex-shrink-0"
                    whileHover={{ scale: 1.02, rotate: 2 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-7 h-7 object-contain"
                    />
                  </motion.div>

                  {/* Content - Label and Link */}
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    {/* Label */}
                    <h3
                      className="mb-3 text-[#6B4423]/50"
                      style={{
                        fontSize: '0.85rem',
                        letterSpacing: '0.05em',
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </h3>

                    {/* Value */}
                    <div>
                      {item.link ? (
                        <>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-[#6B4423] hover:text-[#7CB342] transition-colors duration-600 break-words"
                            style={{
                              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                              lineHeight: 1.4,
                              textDecoration: 'underline',
                              textDecorationColor: item.color,
                              textDecorationThickness: '2px',
                              textUnderlineOffset: '4px',
                            }}
                          >
                            {item.value}
                          </a>
                          {item.description && (
                            <p
                              className="mt-2 text-[#6B4423]/60"
                              style={{
                                fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
                                lineHeight: 1.4,
                              }}
                            >
                              {item.description}
                            </p>
                          )}
                        </>
                      ) : (
                        <p
                          className="text-[#6B4423] whitespace-pre-line"
                          style={{
                            fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                            lineHeight: 1.7,
                          }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider before credits */}
        <motion.div
          className="mt-32 md:mt-40 mb-12 h-px bg-gradient-to-r from-transparent via-[#6B4423]/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  );
}