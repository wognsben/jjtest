import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import ContactHero from '../components/contact/ContactHero';
import KakaoTalkCTA from '../components/contact/KakaoTalkCTA';
import ContactInfo from '../components/contact/ContactInfo';
import ScrollCredits3D from '../components/contact/ScrollCredits3D';
import { Credits3DErrorBoundary } from '../components/contact/ErrorBoundary';

export default function Contact() {
  return (
    <motion.div
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Hero Section */}
      <ContactHero />
      
      {/* KakaoTalk CTA */}
      <KakaoTalkCTA />
      
      {/* Contact Info */}
      <ContactInfo />
      
      {/* 3D Scroll Credits with Error Boundary */}
      <Credits3DErrorBoundary>
        <ScrollCredits3D />
      </Credits3DErrorBoundary>
    </motion.div>
  );
}