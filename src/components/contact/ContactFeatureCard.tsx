import React from 'react';
import { motion } from 'motion/react';

interface Feature {
  title: string;
  description: string;
  size: string;
  gradient: string;
  iconColor: string;
  iconBg: string;
  borderColor: string;
  animated: boolean;
}

interface ContactFeatureCardProps {
  feature: Feature;
  index: number;
}

const sizeClasses: Record<string, string> = {
  small: 'md:col-span-2 md:row-span-1',
};

export default function ContactFeatureCard({ feature, index }: ContactFeatureCardProps) {
  if (feature.animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`group relative ${sizeClasses[feature.size]} overflow-hidden rounded-3xl`}
      >
        {/* Card background with subtle texture */}
        <div className={`absolute inset-0 bg-white border ${feature.borderColor} rounded-3xl`} />
        
        {/* Subtle background gradient overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out`}
        />

        {/* Content container */}
        <div className="relative h-full p-6 md:p-10 lg:p-12 flex flex-col justify-between min-h-[280px]">
          {/* Top section - Icon area with minimal animation */}
          <div className="flex items-start justify-between mb-6 md:mb-8">
            <motion.div
              className={`p-3 md:p-4 rounded-2xl ${feature.iconBg} border ${feature.borderColor} relative z-10`}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {/* Minimal abstract art icon - using SVG paths */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={feature.iconColor}
              >
                {/* Abstract brush stroke */}
                <motion.path
                  d="M4 12C4 12 8 8 12 10C16 12 20 8 20 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.1 + 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Subtle accent dots */}
                <motion.circle
                  cx="8"
                  cy="10"
                  r="1.5"
                  fill="currentColor"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.circle
                  cx="16"
                  cy="14"
                  r="1.5"
                  fill="currentColor"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 1, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Bottom section - Typography with refined spacing */}
          <div className="space-y-3 md:space-y-4 mt-auto relative z-10">
            <motion.h3
              className="text-[clamp(1.5rem, 2.5vw, 2rem)] md:text-[clamp(1.75rem, 3vw, 2.5rem)] text-[#6B4423] tracking-tight font-semibold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-[#6B4423]/70 text-[clamp(0.875rem, 1.2vw, 1rem)] md:text-[clamp(0.9375rem, 1.4vw, 1.125rem)] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {feature.description}
            </motion.p>
          </div>
        </div>

        {/* Subtle border glow on hover */}
        <motion.div
          className={`absolute -inset-[1px] bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-30 -z-10 transition-opacity duration-700`}
        />
      </motion.div>
    );
  }
  
  return null;
}

