import React from 'react';
import { motion } from 'motion/react';
import { Instagram, BookOpen } from 'lucide-react';

// Organic blob decoration
function FooterBlob({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`absolute pointer-events-none ${className}`}
    >
      <motion.svg
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M 60 10
             C 85 12, 105 28, 108 50
             C 110 68, 108 85, 95 98
             C 82 108, 65 112, 48 108
             C 32 104, 18 92, 14 72
             C 10 52, 15 32, 32 18
             C 45 8, 52 9, 60 10 Z"
          fill="currentColor"
          opacity="0.08"
        />
      </motion.svg>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-beige/30 border-t border-brown-200/20 overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating blobs */}
      <FooterBlob className="top-8 left-[10%] text-pink-soft" />
      <FooterBlob className="bottom-12 right-[15%] text-accent-green" />
      
      <div className="relative px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
            {/* Brand section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <h3 
                  className="text-3xl md:text-4xl mb-3"
                  style={{ 
                    fontFamily: "'Noto Serif KR', serif",
                    color: '#B88860'
                  }}
                >
                  크레용숲
                </h3>
                <p 
                  className="text-sm tracking-[0.2em] text-brown-600 opacity-70"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  Forêt des Crayons
                </p>
              </div>
              
              <p 
                className="text-base leading-relaxed text-brown-700"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                예술로 자기 세계를 만드는 곳<br />
                우리는 아이를 작품으로 만들지 않습니다
              </p>
            </motion.div>
            
            {/* Contact section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-4 space-y-4"
            >
              <h4 
                className="text-sm tracking-[0.15em] uppercase text-brown-600 mb-6 opacity-80"
              >
                Contact
              </h4>
              
              <div className="space-y-3 text-brown-700">
                <p className="text-sm">
                  <span className="opacity-60">Tel.</span>{' '}
                  <a 
                    href="tel:02-1234-5678" 
                    className="hover:text-accent-green transition-colors duration-300"
                  >
                    02-1234-5678
                  </a>
                </p>
                
                <p className="text-sm">
                  <span className="opacity-60">Email.</span>{' '}
                  <a 
                    href="mailto:hello@crayonforest.com" 
                    className="hover:text-accent-green transition-colors duration-300"
                  >
                    hello@crayonforest.com
                  </a>
                </p>
                
                <p className="text-sm leading-relaxed opacity-80 pt-2">
                  서울시 강남구 테헤란로 123<br />
                  크레용숲 미술학원
                </p>
              </div>
            </motion.div>
            
            {/* Social section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-4"
            >
              <h4 
                className="text-sm tracking-[0.15em] uppercase text-brown-600 mb-6 opacity-80"
              >
                Follow Us
              </h4>
              
              <div className="flex gap-4">
                <motion.a
                  href="https://instagram.com/crayonforest"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-pink-soft/40 to-pink-soft/20 
                             flex items-center justify-center transition-all duration-300
                             hover:shadow-lg hover:shadow-pink-soft/30"
                  style={{
                    border: '1.5px solid rgba(249, 213, 219, 0.4)'
                  }}
                >
                  <Instagram 
                    className="w-5 h-5 text-brown-600 group-hover:text-pink-600 transition-colors duration-300" 
                  />
                </motion.a>
                
                <motion.a
                  href="https://blog.naver.com/crayonforest"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-accent-green/40 to-accent-green/20 
                             flex items-center justify-center transition-all duration-300
                             hover:shadow-lg hover:shadow-accent-green/30"
                  style={{
                    border: '1.5px solid rgba(168, 198, 143, 0.4)'
                  }}
                >
                  <BookOpen 
                    className="w-5 h-5 text-brown-600 group-hover:text-accent-green transition-colors duration-300" 
                  />
                </motion.a>
              </div>
              
              <p className="text-xs text-brown-600 opacity-60 pt-2">
                크레용숲의 일상을 만나보세요
              </p>
            </motion.div>
          </div>
          
          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-8"
          >
            <div 
              className="h-px"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(184, 136, 96, 0.2) 20%, rgba(184, 136, 96, 0.15) 80%, transparent 100%)'
              }}
            />
          </motion.div>
          
          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brown-600 opacity-60"
          >
            <p style={{ fontFamily: "'Noto Serif KR', serif" }}>
              © 2025 Forêt des Crayons. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-xs">
              <a 
                href="#privacy" 
                className="hover:text-accent-green transition-colors duration-300"
              >
                개인정보처리방침
              </a>
              <a 
                href="#terms" 
                className="hover:text-accent-green transition-colors duration-300"
              >
                이용약관
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
