import React from 'react';
import { motion } from 'motion/react';
import ScrollCredits3D from '../components/contact/ScrollCredits3D';
import { Credits3DErrorBoundary } from '../components/contact/ErrorBoundary';
import { PremiumHero } from '../components/contact/PremiumHero';
import { BentoGrid } from '../components/contact/BentoGrid';
import { SocialContactSection } from '../components/contact/SocialContactSection';
import { SubscriptionSection } from '../components/contact/SubscriptionSection';

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
      <PremiumHero />
      
      {/* Bento Grid */}
      <BentoGrid />
      
      {/* Social Contact Section */}
      <SocialContactSection />
      
      {/* Subscription Section */}
      <SubscriptionSection />
      
      {/* 3D Scroll Credits with Error Boundary */}
      <Credits3DErrorBoundary>
        <ScrollCredits3D />
      </Credits3DErrorBoundary>
    </motion.div>
  );
}