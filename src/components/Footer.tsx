import React from 'react';

export default function Footer() {
  return (
    <footer 
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FEFDFB 0%, #F8F6F2 100%)',
        paddingTop: 'clamp(80px, 12vw, 120px)',
        paddingBottom: 'clamp(60px, 8vw, 80px)',
      }}
    >
      {/* Subtle organic noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Optional abstract organic shapes - very low opacity */}
      <div 
        className="absolute top-20 right-[15%] w-64 h-64 opacity-[0.02] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(166, 124, 82, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute bottom-32 left-[10%] w-80 h-80 opacity-[0.015] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(143, 188, 136, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative w-full px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Brand Block - Editorial colophon style */}
        <div className="mb-16 md:mb-20">
          <div 
            className="mb-4"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              color: '#4A4A4A',
              lineHeight: '1.2',
            }}
          >
            크레용숲
          </div>
          <div 
            className="mb-8"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(13px, 1.2vw, 14px)',
              fontWeight: 300,
              letterSpacing: '0.08em',
              color: '#8B8B8B',
              lineHeight: '1.6',
            }}
          >
            Forêt des Crayons
          </div>
          <div 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(14px, 1.3vw, 15px)',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              color: '#6B6B6B',
              lineHeight: '1.8',
              maxWidth: '500px',
            }}
          >
            예술로 자기 세계를 만드는 곳
          </div>
        </div>

        {/* Divider - Thin gradient line */}
        <div 
          className="mb-12 md:mb-16"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(166, 124, 82, 0.08) 30%, rgba(166, 124, 82, 0.12) 50%, rgba(166, 124, 82, 0.08) 70%, transparent 100%)',
          }}
        />

        {/* Contact & Social Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-16">
          {/* Contact Information - Address only */}
          <div>
            <div 
              className="mb-6"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 'clamp(12px, 1.1vw, 13px)',
                fontWeight: 400,
                letterSpacing: '0.05em',
                color: '#999',
                textTransform: 'uppercase',
              }}
            >
              Contact
            </div>
            <div 
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 'clamp(14px, 1.2vw, 15px)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                color: '#6B6B6B',
                lineHeight: '1.8',
              }}
            >
              경기도 성남시 수정구 창곡동 563번지 위례역 푸르지오 6단지 107호
            </div>
          </div>

          {/* Social Links - Minimal, quiet */}
          <div>
            <div 
              className="mb-6"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 'clamp(12px, 1.1vw, 13px)',
                fontWeight: 400,
                letterSpacing: '0.05em',
                color: '#999',
                textTransform: 'uppercase',
              }}
            >
              Follow
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {/* Instagram - 크레용숲 */}
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
                Instagram (크레용숲)
              </a>

              {/* Instagram - 아동미술 */}
              <a
                href="https://www.instagram.com/crayonforest_childart"
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
                Instagram (아동미술)
              </a>

              {/* Brunch */}
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

              {/* Blog */}
              <a
                href="https://blog.naver.com/dreaming_art_play"
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

              {/* 베이비뉴스 */}
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
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div 
          className="mb-8 md:mb-10"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(166, 124, 82, 0.06) 30%, rgba(166, 124, 82, 0.08) 50%, rgba(166, 124, 82, 0.06) 70%, transparent 100%)',
          }}
        />

        {/* Bottom Area - Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div 
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: 'clamp(11px, 1vw, 12px)',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              color: '#999',
              lineHeight: '1.6',
            }}
          >
            © 2025 Forêt des Crayons. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="hover:text-[#8B8B8B] transition-colors duration-300"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 'clamp(11px, 1vw, 12px)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                color: '#B0B0B0',
                textDecoration: 'none',
              }}
            >
              개인정보처리방침
            </a>
            <a
              href="#terms"
              className="hover:text-[#8B8B8B] transition-colors duration-300"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 'clamp(11px, 1vw, 12px)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                color: '#B0B0B0',
                textDecoration: 'none',
              }}
            >
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
