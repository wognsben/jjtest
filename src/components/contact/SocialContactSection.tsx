import { motion } from "motion/react";
import { Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "네이버 블로그",
    icon: Mail,
    url: "https://blog.naver.com/dreaming_art_play",
    displayText: "dreaming_art_play",
    color: "#03C75A",
    iconBg: "#ffffff"
  },
  {
    name: "인스타그램",
    icon: Instagram,
    url: "https://instagram.com/crayonforest.art",
    displayText: "@crayonforest.art",
    secondaryText: "@crayonforest_childart",
    color: "#E4405F",
    iconBg: "#ffffff"
  }
];

export function SocialContactSection() {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F5F5DC]/20">
      {/* Top Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto mb-20 h-px bg-gradient-to-r from-transparent via-[#6B4423]/20 to-transparent"
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-white border border-black/5 rounded-2xl p-8 min-h-[200px] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Hover Gradient Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-600"
                  style={{
                    background: `radial-gradient(circle, ${link.color} 0%, transparent 70%)`
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon */}
                  <div 
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: link.iconBg }}
                  >
                    <link.icon 
                      className="w-7 h-7" 
                      style={{ color: link.color }}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <h3 
                      className="mb-3 text-[#6B4423]/50 uppercase tracking-wider"
                      style={{ fontSize: '0.85rem' }}
                    >
                      {link.name}
                    </h3>
                    <div>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[#6B4423] hover:text-[#7CB342] transition-colors duration-300 break-words"
                        style={{ 
                          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                          lineHeight: 1.5,
                          textDecoration: `underline 2px ${link.color}`,
                          textUnderlineOffset: '4px'
                        }}
                      >
                        {link.displayText}
                      </a>
                      {link.secondaryText && (
                        <p 
                          className="mt-2 text-[#6B4423]/60"
                          style={{
                            fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
                            lineHeight: 1.5
                          }}
                        >
                          {link.secondaryText}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 md:mt-40 mb-12 h-px bg-gradient-to-r from-transparent via-[#6B4423]/20 to-transparent"
        />
      </div>
    </section>
  );
}

