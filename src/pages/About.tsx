import React from 'react';
import AboutHero from '../components/about/AboutHero';
import HorizontalChapterScroll from '../components/about/HorizontalChapterScroll';
import ChapterSection from '../components/about/ChapterSection';
import FloatingNav from '../components/about/FloatingNav';
import Philosophy from '../components/about/Philosophy';
import FirstRite from '../components/about/FirstRite';
import Overview from '../components/about/Overview';
import EmotionalFoundation from '../components/about/EmotionalFoundation';
import SensoryArt from '../components/about/SensoryArt';
import ArtisticGrowth from '../components/about/ArtisticGrowth';
import SelfTexture from '../components/about/SelfTexture';
import CrayonForestClass from '../components/about/CrayonForestClass';
import WhatIsEmotionalArt from '../components/about/WhatIsEmotionalArt';
import EmotionalArtProgram from '../components/about/EmotionalArtProgram';
import Karte from '../components/about/Karte';
import PartnerInstitutions from '../components/about/PartnerInstitutions';
import InstitutionCollaboration from '../components/about/InstitutionCollaboration';
import EducationPartners from '../components/about/EducationPartners';
import Interview from '../components/about/Interview';
import Founder from '../components/about/Founder';
import { SectionNav } from '../components/ScrollProgress';
import { useSectionKeyboardNav } from '../hooks/useKeyboardNav';

export default function About() {
  const sections = [
    { id: 'about-hero', label: 'Intro' },
    { id: 'chapter-cards', label: 'Chapters' },
    { id: 'chapter-philosophy', label: 'Philosophy' },
    { id: 'chapter-aboutus', label: 'About Us' },
    { id: 'chapter-founder', label: 'Founder' },
  ];

  // Keyboard navigation for sections (Arrow Up/Down)
  useSectionKeyboardNav(sections.map(s => s.id));
  
  return (
    <div className="bg-white">
      {/* Section navigation dots */}
      <SectionNav sections={sections} />
      
      {/* Hero Section */}
      <div id="about-hero">
        <AboutHero />
      </div>
      
      {/* Chapter Preview Cards */}
      <div id="chapter-cards">
        <HorizontalChapterScroll />
      </div>
      
      {/* Chapter 1: Philosophy */}
      <ChapterSection
        id="chapter-philosophy"
        number="01"
        title="Philosophy"
        subtitle="우리의 철학"
        color="rgba(255, 182, 193, 1)"
      >
        <Philosophy />
        <FirstRite />
      </ChapterSection>
      
      {/* Chapter 2: About Us */}
      <ChapterSection
        id="chapter-aboutus"
        number="02"
        title="About Us"
        subtitle="우리의 이야기"
        color="rgba(143, 188, 136, 1)"
      >
        <Overview />
        <EmotionalFoundation />
        <SensoryArt />
        <ArtisticGrowth />
        <SelfTexture />
        <CrayonForestClass />
        <WhatIsEmotionalArt />
        <EmotionalArtProgram />
        <Karte />
        <PartnerInstitutions />
        <InstitutionCollaboration />
      </ChapterSection>
      
      {/* Education Partners Section */}
      <EducationPartners />
      
      {/* Interview Section - Independent */}
      <Interview />
      
      {/* Chapter 3: Founder */}
      <ChapterSection
        id="chapter-founder"
        number="03"
        title="Founder"
        subtitle="설립자"
        color="rgba(217, 119, 87, 1)"
      >
        <Founder />
      </ChapterSection>
    </div>
  );
}
