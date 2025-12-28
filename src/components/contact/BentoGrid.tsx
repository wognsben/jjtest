import { motion } from "motion/react";
import { MessageCircle, Instagram, Mail } from "lucide-react";
import { useState } from "react";

const features = [
  {
    id: 1,
    title: "카카오톡 채널",
    description: "C:ing project의 새로운 소식을 가장 먼저 받아보세요",
    icon: MessageCircle,
    link: "https://pf.kakao.com/_ELTxcK",
    gradient: "from-[#D4A574]/10 to-[#D4A574]/5",
    iconColor: "text-[#D4A574]",
    iconBg: "bg-[#D4A574]/10",
    borderColor: "border-[#D4A574]/20",
    size: "large"
  },
  {
    id: 2,
    title: "인스타그램",
    description: "@crayonforest.art",
    subtitle: "@crayonforest_childart",
    icon: Instagram,
    link: "https://www.instagram.com/crayonforest.art",
    link2: "https://www.instagram.com/crayonforest_childart",
    gradient: "from-[#fadfde]/30 to-[#fadfde]/10",
    iconColor: "text-[#6B4423]",
    iconBg: "bg-[#fadfde]/50",
    borderColor: "border-[#fadfde]/40",
    size: "medium"
  },
  {
    id: 3,
    title: "네이버 블로그",
    description: "dreaming_art_play",
    icon: Mail,
    link: "https://blog.naver.com/dreaming_art_play",
    gradient: "from-[#2D5016]/10 to-[#2D5016]/5",
    iconColor: "text-[#2D5016]",
    iconBg: "bg-[#2D5016]/10",
    borderColor: "border-[#2D5016]/20",
    size: "medium"
  },
  {
    id: 4,
    title: "Get in Touch",
    description: "함께 시작할 준비가 되셨나요?",
    gradient: "from-[#6B4423]/10 to-[#6B4423]/5",
    iconColor: "text-[#6B4423]",
    iconBg: "bg-[#6B4423]/10",
    borderColor: "border-[#6B4423]/20",
    size: "small",
    animated: true
  }
];

function BentoCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-1",
    small: "md:col-span-2 md:row-span-1"
  };

  // Animated card special rendering
  if (feature.animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`group relative ${sizeClasses[feature.size]} overflow-hidden rounded-3xl`}
      >
        {/* Card background */}
        <div className={`absolute inset-0 bg-white border ${feature.borderColor} rounded-3xl`} />

        {/* Subtle background gradient overlay - only on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Content container */}
        <div className="relative h-full p-6 md:p-10 lg:p-12 flex flex-col justify-between min-h-[280px]">
          {/* Top section - Icon area with refined animation */}
          <div className="flex items-start justify-between mb-6 md:mb-8">
            <motion.div
              className={`p-3 md:p-4 rounded-2xl ${feature.iconBg} border ${feature.borderColor} relative z-10`}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {/* Minimal abstract art icon - custom SVG */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={feature.iconColor}
              >
                {/* Abstract brush stroke - subtle animation */}
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
          className={`absolute -inset-[1px] bg-gradient-to-r ${feature.gradient} rounded-3xl -z-10`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative ${sizeClasses[feature.size]} overflow-hidden rounded-3xl`}
    >
      {/* Card background with glass effect */}
      <div className={`absolute inset-0 bg-white border ${feature.borderColor}`} />
      
      {/* Gradient overlay on hover */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`}
      />

      {/* Content */}
      <div className="relative h-full p-8 md:p-10 flex flex-col justify-between">
        {/* Top section */}
        <div className="flex items-start justify-between">
          <div className={`p-4 rounded-2xl ${feature.iconBg} border ${feature.borderColor} ${feature.iconColor} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
            <feature.icon className="w-7 h-7" strokeWidth={1.5} />
          </div>
          
          {feature.link && (
            <motion.a
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-full ${feature.iconBg} hover:bg-opacity-80 transition-colors`}
            >
              <svg className={`w-5 h-5 ${feature.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          )}
        </div>

        {/* Bottom section */}
        <div className="space-y-3 mt-auto">
          <h3 className="text-2xl md:text-3xl text-[#6B4423] tracking-tight">
            {feature.title}
          </h3>
          {feature.id === 2 && feature.link && feature.link2 ? (
            <div className="space-y-2">
              <a 
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#6B4423]/60 hover:text-[#6B4423] text-sm md:text-base leading-relaxed transition-colors underline decoration-dotted underline-offset-4"
              >
                {feature.description}
              </a>
              <a 
                href={feature.link2}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#6B4423]/40 hover:text-[#6B4423]/70 text-sm transition-colors underline decoration-dotted underline-offset-4"
              >
                {feature.subtitle}
              </a>
            </div>
          ) : (
            <>
              <p className="text-[#6B4423]/60 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
              {feature.subtitle && (
                <p className="text-[#6B4423]/40 text-sm">
                  {feature.subtitle}
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute -inset-[1px] bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl -z-10`}
      />
    </motion.div>
  );
}

export function BentoGrid() {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-[#fadfde]/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#2D5016] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#D4A574] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] text-[#6B4423] mb-6 tracking-tight">
            크레용숲의 새로운 소식
          </h2>
          <p className="text-[#6B4423]/60 text-lg max-w-2xl mx-auto">
            다양한 채널을 통해 크레용숲과 소통하세요
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]">
          {features.map((feature, index) => (
            <BentoCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
