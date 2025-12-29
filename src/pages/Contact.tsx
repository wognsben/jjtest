import React from 'react';
import { motion } from 'motion/react';
import ScrollCredits3D from '../components/contact/ScrollCredits3D';
import { Credits3DErrorBoundary } from '../components/contact/ErrorBoundary';
import { PremiumHero } from '../components/contact/PremiumHero';
import { BentoGrid } from '../components/contact/BentoGrid';

export default function Contact() {
  return (
    <motion.div
      className="bg-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Hero Section */}
      <PremiumHero />
      
      {/* Bento Grid */}
      <BentoGrid />
      
      {/* 3D Scroll Credits with Error Boundary */}
      <Credits3DErrorBoundary>
        <ScrollCredits3D />
      </Credits3DErrorBoundary>
    </motion.div>
  );
}