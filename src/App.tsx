import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'about' | 'program' | 'contact'>('home');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  
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
          <span className="text-xs tracking-[0.1em] text-muted uppercase">Scroll</span>
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-6">
          <div className="flex items-center justify-between">
            <BlobNavLogo onClick={() => setCurrentPage('home')} data-cursor-hover data-cursor-text="Home">
              Forêt des Crayons
            </BlobNavLogo>
            
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
          </div>
        </div>
      </nav>
      
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