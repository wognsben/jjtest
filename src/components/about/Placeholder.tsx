import React from 'react';
import { motion } from 'motion/react';

interface PlaceholderProps {
  title: string;
  subtitle?: string;
  background?: 'paper' | 'beige' | 'brown';
}

export default function Placeholder({ title, subtitle, background = 'paper' }: PlaceholderProps) {
  const bgColors = {
    paper: 'bg-paper',
    beige: 'bg-brown-50',
    brown: 'bg-brown-800'
  };
  
  const textColors = {
    paper: 'text-brown-900',
    beige: 'text-brown-900',
    brown: 'text-beige'
  };
  
  return (
    <section className={`relative py-24 md:py-32 px-6 md:px-12 lg:px-24 ${bgColors[background]}`}>
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={textColors[background]}
        >
          {title}
        </motion.h2>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-sm tracking-wider uppercase ${
              background === 'brown' ? 'text-brown-200' : 'text-brown-600'
            }`}
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-8"
        >
          <p className={`text-sm ${
            background === 'brown' ? 'text-brown-300' : 'text-brown-500'
          }`}>
            Content coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
