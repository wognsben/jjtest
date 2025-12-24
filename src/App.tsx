import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Hero from './components/Hero';
import Programs from './components/Programs';
import MethodNew from './components/MethodNew';
import GrowthNew from './components/GrowthNew';
import SectionDivider from './components/SectionDivider';
import Footer from './components/Footer';
import About from './pages/About';
import ProgramsPage from './pages/ProgramsPage';
import Contact from './pages/Contact';
import { BlobNavItem, BlobNavLogo } from './components/BlobNav';
import { BlobMorphTransition } from './components/PageTransition';
import ScrollProgress, { ScrollHint } from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { getImagePath } from './utils/imageUtils';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'about' | 'program' | 'contact'>('home');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  
  // Premium Device Detection (상단에 선언해야 TDZ 에러 방지)
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Refs for GSAP animations
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const paintBgRef = useRef<HTMLImageElement>(null);
  const backgroundLayerRef = useRef<HTMLDivElement>(null);
  const noiseLayerRef = useRef<HTMLDivElement>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const closeTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const headerLogoRef = useRef<HTMLButtonElement | null>(null);
  const headerScrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // Initialize GSAP timelines
  React.useEffect(() => {
    if (!mobileMenuRef.current || !menuItemsRef.current || !paintBgRef.current || !backgroundLayerRef.current || !noiseLayerRef.current) return;

    const menuItems = menuItemsRef.current.querySelectorAll('.menu-item-mobile');
    
    // Kill existing timelines if any
    if (menuTimelineRef.current) {
      menuTimelineRef.current.kill();
    }
    if (closeTimelineRef.current) {
      closeTimelineRef.current.kill();
    }
    
    // Set initial states BEFORE creating timeline
    gsap.set(mobileMenuRef.current, { opacity: 0, pointerEvents: 'none', scaleY: 0, transformOrigin: 'top center' });
    gsap.set(backgroundLayerRef.current, { opacity: 0, backdropFilter: 'blur(0px)' });
    gsap.set(paintBgRef.current, { opacity: 0, scale: 1.08 });
    gsap.set(noiseLayerRef.current, { opacity: 0.02 });
    gsap.set(menuItems, { opacity: 0, y: 24 });
    
    // ===== OPEN TIMELINE =====
    menuTimelineRef.current = gsap.timeline({ paused: true });
    
    // Phase 1: 공간 전환 (0.0s - 0.3s)
    menuTimelineRef.current
      .set(mobileMenuRef.current, { pointerEvents: 'auto' })
      .to(mobileMenuRef.current,
        { 
          opacity: 1, 
          scaleY: 1,
          duration: 0.3, 
          ease: 'power2.out' 
        },
        0
      )
      .to(backgroundLayerRef.current,
        { 
          opacity: 1,
          backdropFilter: 'blur(20px)',
          duration: 0.3,
          ease: 'power2.out'
        },
        0
      )
      // Phase 2: Paint texture 등장 (0.0s - 1.2s, 시작은 0)
      .to(paintBgRef.current,
        { 
          opacity: 0.15, // 0.35 → 0.15로 조정
          scale: 1.02, 
          duration: 1.2, 
          ease: 'power2.out' 
        },
        0
      )
      // Phase 2: 메뉴 아이템 등장 (0.3s - 0.9s, 시작은 0.3s)
      .to(menuItems,
        {
          opacity: 1,
          y: 0,
          stagger: 0.06, // 0.08 → 0.06으로 조정
          duration: 0.6,
          ease: 'expo.out' // power3.out → expo.out
        },
        0.3
      )
      // Phase 3: 마무리 숨결 (0.8s - 1.1s)
      .to(noiseLayerRef.current,
        {
          opacity: 0.04, // 0.02 → 0.04로 증가
          duration: 0.3,
          ease: 'power2.out'
        },
        0.8
      );

    // ===== CLOSE TIMELINE (순차적 닫힘) =====
    closeTimelineRef.current = gsap.timeline({ paused: true });
    
    // Phase 1: 텍스트 사라짐 (0.0s - 0.2s)
    closeTimelineRef.current
      .to(menuItems,
        {
          opacity: 0,
          y: -12, // 살짝 위로
          stagger: 0.04,
          duration: 0.2,
          ease: 'power2.in'
        },
        0
      )
      // Phase 2: 배경 레이어 (0.2s - 0.4s)
      .to(paintBgRef.current,
        {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in'
        },
        0.2
      )
      .to(backgroundLayerRef.current,
        {
          opacity: 0,
          backdropFilter: 'blur(0px)',
          duration: 0.2,
          ease: 'power2.in'
        },
        0.2
      )
      .to(noiseLayerRef.current,
        {
          opacity: 0.02,
          duration: 0.2,
          ease: 'power2.in'
        },
        0.2
      )
      // Phase 3: 공간 축소 (0.4s - 0.6s)
      .to(mobileMenuRef.current,
        {
          scaleY: 0,
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            if (mobileMenuRef.current) {
              gsap.set(mobileMenuRef.current, { pointerEvents: 'none' });
            }
          }
        },
        0.4
      );

    return () => {
      menuTimelineRef.current?.kill();
      closeTimelineRef.current?.kill();
    };
  }, [currentPage, isDesktop]);

  // Handle menu toggle with GSAP
  React.useEffect(() => {
    if (!menuTimelineRef.current || !closeTimelineRef.current || !mobileMenuRef.current) return;

    if (isMenuOpen) {
      // Play open animation
      menuTimelineRef.current.restart();
      document.body.classList.add('menu-open');
    } else {
      // Play close animation (순차적 닫힘)
      closeTimelineRef.current.restart();
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);
  
  // Scroll to top when page changes
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);
  
  // Track scroll for fade effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const fadeProgress = Math.min(scrollY / (window.innerHeight * 0.3), 1);
  
  // Header scroll state for mobile
  const isScrolled = scrollY > 30;
  
  // Premium Device Detection useEffect (Awwwards-grade)
  // CSS breakpoint 대신 JS 기반으로 안정적인 디바이스 감지
  useEffect(() => {
    // Touch device 감지 (모바일/태블릿 터치스크린)
    const checkTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore - for older browsers
        navigator.msMaxTouchPoints > 0
      );
    };
    
    // 디바이스 타입 감지 (Tailwind md: 768px와 일치)
    const checkDeviceType = () => {
      const width = window.innerWidth;
      const isTouch = checkTouchDevice();
      
      // 768px 이상 = 데스크톱 레이아웃 (태블릿 포함)
      // 터치 여부와 무관하게 화면 크기만으로 판단
      // 크기 조정은 clamp()가 자동으로 처리
      const desktop = width >= 768;
      
      setIsDesktop(desktop);
      setIsTouchDevice(isTouch);
    };
    
    // 초기 체크
    checkDeviceType();
    
    // Debounced resize handler (성능 최적화)
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkDeviceType, 100);
    };
    
    // Orientation change handler (모바일 회전 대응)
    const handleOrientationChange = () => {
      // orientation 변경 후 약간의 딜레이 후 체크 (안정성)
      setTimeout(checkDeviceType, 150);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);
  
  // 디바이스 타입 변경 시 모바일 메뉴 자동 닫기 (Premium UX)
  useEffect(() => {
    if (isDesktop && isMenuOpen) {
      setIsMenuOpen(false);
      document.body.classList.remove('menu-open');
    }
  }, [isDesktop, isMenuOpen]);
  
  // GSAP ScrollTrigger for PC Header (Hero 섹션과 연동)
  useEffect(() => {
    if (!headerRef.current || !headerLogoRef.current || !isDesktop || currentPage !== 'home') {
      // PC가 아니거나 home 페이지가 아니면 초기화
      if (headerScrollTriggerRef.current) {
        headerScrollTriggerRef.current.kill();
        headerScrollTriggerRef.current = null;
      }
      return;
    }
    
    // Hero 섹션 찾기
    const heroSection = document.querySelector('#hero-section') as HTMLElement;
    if (!heroSection) return;
    
    // 기존 ScrollTrigger 정리
    if (headerScrollTriggerRef.current) {
      headerScrollTriggerRef.current.kill();
    }
    
    // State A: Hero 위 (초기 상태)
    // State B: Transition Zone (Hero 하단 30~40%)
    // State C: Content Area
    
    // State A 초기값 설정 (Hero 위 - 투명한 헤더)
    gsap.set(headerRef.current, {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      backdropFilter: 'blur(0px)',
      paddingTop: '24px',
      paddingBottom: '24px',
      borderBottomColor: 'rgba(0, 0, 0, 0)',
    });
    if (headerLogoRef.current) {
      gsap.set(headerLogoRef.current, { fontSize: '1.5rem', opacity: 1 });
    }
    
    // GSAP Timeline with ScrollTrigger (scrub 사용)
    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: "bottom top+=80",  // 히어로 끝나기 직전
        end: "bottom top+=320",   // 전환 구간 (240px)
        scrub: true,              // 스크롤에 따라 부드럽게
        onEnter: () => {
          // Transition Zone 진입 (State A → State B)
          // State B 시작값으로 설정
          gsap.set(headerRef.current, {
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(4px)',
            paddingTop: '18px',
            paddingBottom: '18px',
            borderBottomColor: 'rgba(0, 0, 0, 0.04)',
          });
          if (headerLogoRef.current) {
            gsap.set(headerLogoRef.current, { fontSize: '1.5rem' });
          }
        },
        onLeaveBack: () => {
          // Hero 위로 돌아감 (State B → State A)
          gsap.set(headerRef.current, {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            backdropFilter: 'blur(0px)',
            paddingTop: '24px',
            paddingBottom: '24px',
            borderBottomColor: 'rgba(0, 0, 0, 0)',
          });
          if (headerLogoRef.current) {
            gsap.set(headerLogoRef.current, { fontSize: '1.5rem', opacity: 1 });
          }
        }
      }
    });
    
    // State B → State C 전환 애니메이션 (scrub으로 스크롤에 따라 부드럽게)
    headerTimeline
      .fromTo(headerRef.current,
        {
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(4px)',
          paddingTop: '18px',
          paddingBottom: '18px',
          borderBottomColor: 'rgba(0, 0, 0, 0.04)',
        },
        {
          backgroundColor: 'rgba(255, 255, 255, 0.95)', // 0.6 → 0.95
          backdropFilter: 'blur(8px)',                  // 4px → 8px
          paddingTop: '14px',                           // 18px → 14px
          paddingBottom: '14px',                        // 18px → 14px
          borderBottomColor: 'rgba(0, 0, 0, 0.06)',     // 0.04 → 0.06
          ease: 'none',  // scrub이므로 linear
          duration: 1
        },
        0
      )
      .fromTo(headerLogoRef.current,
        { fontSize: '1.5rem' },
        {
          fontSize: '1.25rem',  // 1.5rem → 1.25rem
          ease: 'none',
          duration: 1
        },
        0
      );
    
    // ScrollTrigger 인스턴스 저장
    headerScrollTriggerRef.current = headerTimeline.scrollTrigger!;
    
    return () => {
      if (headerTimeline) {
        headerTimeline.kill();
      }
      if (headerScrollTriggerRef.current) {
        headerScrollTriggerRef.current.kill();
        headerScrollTriggerRef.current = null;
      }
    };
  }, [isDesktop, currentPage]);
  
  // PC Header fallback values (ScrollTrigger가 작동하기 전까지)
  const headerOpacity = isDesktop ? 0 : (isScrolled ? 0.98 : 0.95);
  const headerBlur = isDesktop ? 0 : (isScrolled ? 12 : 4);
  const headerPadding = isDesktop ? 24 : (isScrolled ? 12 : 24);
  const borderOpacity = isDesktop ? 0 : 0.05;
  const logoSize = isDesktop ? 1.5 : (isScrolled ? 1.25 : 1.5);
  const logoOpacity = 1;
  
  // Keyboard navigation between pages
  useKeyboardNav({
    onArrowLeft: () => {
      if (currentPage === 'about') setCurrentPage('home');
      else if (currentPage === 'program') setCurrentPage('about');
      else if (currentPage === 'contact') setCurrentPage('program');
    },
    onArrowRight: () => {
      if (currentPage === 'home') setCurrentPage('about');
      else if (currentPage === 'about') setCurrentPage('program');
      else if (currentPage === 'program') setCurrentPage('contact');
    },
  });
  
  return (
    <>
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50"
        style={{ opacity: 1 - fadeProgress }}
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-accent-brown to-transparent"
          />
        </div>
      </motion.div>
      <div className="min-h-screen bg-white">
      {/* Loading screen - only show on first load */}
      {!hasLoadedOnce && <LoadingScreen onLoadingComplete={() => setHasLoadedOnce(true)} />}
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Scroll hint (only on home) */}
      {currentPage === 'home' && <ScrollHint />}
      
      {/* Navigation */}
      <motion.nav 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          // PC: GSAP ScrollTrigger가 제어 (초기값만 설정 - State A)
          // 모바일: 기존 로직 유지
          backgroundColor: isDesktop 
            ? 'rgba(255, 255, 255, 0)'  // State A 초기값 (GSAP이 제어)
            : (isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)'),
          backdropFilter: isDesktop 
            ? 'blur(0px)'  // State A 초기값 (GSAP이 제어)
            : (isScrolled ? 'blur(12px)' : 'blur(4px)'),
          paddingTop: isDesktop 
            ? '24px'  // State A 초기값 (GSAP이 제어)
            : (isScrolled ? '12px' : '24px'),
          paddingBottom: isDesktop 
            ? '24px'  // State A 초기값 (GSAP이 제어)
            : (isScrolled ? '12px' : '24px'),
          borderColor: isDesktop 
            ? 'rgba(0, 0, 0, 0)'  // State A 초기값 (GSAP이 제어)
            : 'rgba(0, 0, 0, 0.05)',
          // PC에서는 transition 제거 (GSAP이 직접 제어)
          transition: isDesktop ? 'none' : 'all 0.3s ease'
        }}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between">
            <button
              ref={headerLogoRef}
              onClick={() => setCurrentPage('home')}
              className="text-primary hover:text-secondary lg:cursor-pointer"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: isDesktop 
                  ? '1.5rem'  // State A 초기값 (GSAP이 제어)
                  : (isScrolled ? '1.25rem' : '1.5rem'),
                fontWeight: 500,
                opacity: 1,
                // PC에서는 transition 제거 (GSAP이 직접 제어)
                transition: isDesktop ? 'none' : 'font-size 0.3s ease, color 0.3s ease'
              }}
            >
              Forêt des Crayons
            </button>
            
            {/* Desktop Navigation - JS 기반 디바이스 감지 (CSS breakpoint 의존 제거) */}
            {isDesktop && (
              <div className="flex gap-4 md:gap-6">
                <BlobNavItem
                  isActive={currentPage === 'home'}
                  onClick={() => setCurrentPage('home')}
                  data-cursor-hover
                  data-cursor-text="View"
                >
                  HOME
                </BlobNavItem>
                <BlobNavItem
                  isActive={currentPage === 'about'}
                  onClick={() => setCurrentPage('about')}
                  data-cursor-hover
                  data-cursor-text="Explore"
                >
                  ABOUT
                </BlobNavItem>
                <BlobNavItem
                  isActive={currentPage === 'program'}
                  onClick={() => setCurrentPage('program')}
                  data-cursor-hover
                  data-cursor-text="Discover"
                >
                  PROGRAM
                </BlobNavItem>
                <BlobNavItem
                  isActive={currentPage === 'contact'}
                  onClick={() => setCurrentPage('contact')}
                  data-cursor-hover
                  data-cursor-text="Connect"
                >
                  CONTACT
                </BlobNavItem>
              </div>
            )}

            {/* Mobile Menu Button - JS 기반 디바이스 감지 (줌 시에도 안정적) */}
            {!isDesktop && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-[100] flex flex-col items-center justify-center gap-1.5 p-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                style={{ 
                  width: '44px',
                  height: '44px',
                  minWidth: '44px',
                  minHeight: '44px',
                  zIndex: 10000,
                  // 터치 타겟 최소 44px (접근성 기준)
                  touchAction: 'manipulation'
                }}
              >
                <motion.span
                  className="w-6 h-0.5 origin-center"
                  style={{ backgroundColor: '#2d5016' }}
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="w-6 h-0.5"
                  style={{ backgroundColor: '#2d5016' }}
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    scaleX: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="w-6 h-0.5 origin-center"
                  style={{ backgroundColor: '#2d5016' }}
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - JS 기반 디바이스 감지 (줌/회전 시에도 안정적) */}
      {!isDesktop && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="fixed inset-0 pointer-events-none"
          onClick={() => setIsMenuOpen(false)}
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            opacity: 0
          }}
        >
        {/* Background with blur */}
        <div 
          ref={backgroundLayerRef}
          className="absolute inset-0"
          style={{
            background: 'rgba(250, 249, 247, 0.95)', // #faf9f7 느낌
            backdropFilter: 'blur(20px)'
          }}
        />

        {/* Paint texture background */}
        <div className="absolute inset-0 pointer-events-none paint-bg-menu">
          <img
            ref={paintBgRef}
            src={getImagePath("/assets/main/hero.jpg")}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              mixBlendMode: 'multiply',
              opacity: 0,
              filter: 'saturate(1.05) contrast(0.95)',
              transform: 'scale(1.08)',
              objectPosition: '46% 58%'
            }}
          />
        </div>

        {/* Noise texture */}
        <div 
          ref={noiseLayerRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: 0.02
          }}
        />
        
        {/* Close Button (X) - visible when menu is open */}
        {isMenuOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
            className="absolute top-6 right-6 z-[10001] w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close menu"
            style={{
              zIndex: 10001
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2d5016"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </motion.button>
        )}

        {/* Menu Items Container */}
        <div 
          ref={menuItemsRef}
          className="relative h-full flex flex-col justify-center items-center px-10 z-10"
        >
          <nav className="space-y-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPage('home');
                setIsMenuOpen(false);
              }}
              className="menu-item-mobile relative z-10"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.75rem, 6.5vw, 2.75rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                fontWeight: 400,
                color: currentPage === 'home' ? '#2d5016' : 'rgba(0, 0, 0, 0.88)',
                fontStyle: currentPage === 'home' ? 'italic' : 'normal',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '1rem 0',
                display: 'block',
                width: '100%',
                textAlign: 'center',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'home') {
                  gsap.to(e.currentTarget, { opacity: 0.7, duration: 0.2 });
                }
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { opacity: 1, duration: 0.2 });
              }}
            >
              HOME
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPage('about');
                setIsMenuOpen(false);
              }}
              className="menu-item-mobile relative z-10"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.75rem, 6.5vw, 2.75rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                fontWeight: 400,
                color: currentPage === 'about' ? '#2d5016' : 'rgba(0, 0, 0, 0.88)',
                fontStyle: currentPage === 'about' ? 'italic' : 'normal',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '1rem 0',
                display: 'block',
                width: '100%',
                textAlign: 'center',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'about') {
                  gsap.to(e.currentTarget, { opacity: 0.7, duration: 0.2 });
                }
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { opacity: 1, duration: 0.2 });
              }}
            >
              ABOUT
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPage('program');
                setIsMenuOpen(false);
              }}
              className="menu-item-mobile relative z-10"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.75rem, 6.5vw, 2.75rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                fontWeight: 400,
                color: currentPage === 'program' ? '#2d5016' : 'rgba(0, 0, 0, 0.88)',
                fontStyle: currentPage === 'program' ? 'italic' : 'normal',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '1rem 0',
                display: 'block',
                width: '100%',
                textAlign: 'center',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'program') {
                  gsap.to(e.currentTarget, { opacity: 0.7, duration: 0.2 });
                }
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { opacity: 1, duration: 0.2 });
              }}
            >
              PROGRAM
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPage('contact');
                setIsMenuOpen(false);
              }}
              className="menu-item-mobile relative z-10"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.75rem, 6.5vw, 2.75rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                fontWeight: 400,
                color: currentPage === 'contact' ? '#2d5016' : 'rgba(0, 0, 0, 0.88)',
                fontStyle: currentPage === 'contact' ? 'italic' : 'normal',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '1rem 0',
                display: 'block',
                width: '100%',
                textAlign: 'center',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'contact') {
                  gsap.to(e.currentTarget, { opacity: 0.7, duration: 0.2 });
                }
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { opacity: 1, duration: 0.2 });
              }}
            >
              CONTACT
            </button>
          </nav>
        </div>
        </div>
      )}

      {/* Mobile Menu Styles */}
      <style>{`
        .menu-item-mobile {
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        
        .menu-item-mobile:active {
          opacity: 0.6 !important;
          transform: scale(0.98) translateY(0) !important;
        }
        
        /* Paint background for mobile menu */
        .paint-bg-menu {
          overflow: hidden;
        }
        
        .paint-bg-menu img {
          will-change: opacity, transform;
        }
        
        /* Prevent body scroll when mobile menu is open */
        body.menu-open {
          overflow: hidden !important;
          position: fixed;
          width: 100%;
          /* iOS overscroll bounce 제거 */
          touch-action: none;
          -webkit-overflow-scrolling: touch;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      {/* Page content with transition */}
      <div className="pt-20">
        <BlobMorphTransition pageKey={currentPage}>
          {currentPage === 'home' ? (
            <>
              <Hero />
              <SectionDivider />
              <Programs />
              <SectionDivider />
              <MethodNew />
              <SectionDivider />
              <GrowthNew />
            </>
          ) : currentPage === 'about' ? (
            <About />
          ) : currentPage === 'program' ? (
            <ProgramsPage />
          ) : currentPage === 'contact' ? (
            <Contact />
          ) : null}
        </BlobMorphTransition>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
    </>
  );
} 