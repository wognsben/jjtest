export function PremiumHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#2D5016] blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#D4A574] blur-3xl rounded-full" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(107, 68, 35, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107, 68, 35, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32">
        {/* Eyebrow text */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fadfde]/30 border border-[#6B4423]/10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2D5016] animate-pulse" />
            <span className="text-sm text-[#6B4423]/70 tracking-wider uppercase">Premium Experience</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-center mb-8 relative z-20">
          <span
            className="inline-block font-medium leading-[1.1] tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 6vw, 6rem)',
              background: 'linear-gradient(90deg, #2D5016 0%, #D4A574 50%, #6B4423 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            우리 아이의 다음 이야기
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-center text-[clamp(1rem,2vw,1.5rem)] text-[#6B4423]/60 max-w-3xl mx-auto mb-12 leading-relaxed">
          크레용숲과 함께 새로운 예술의 여정을 시작하세요.
          <br className="hidden md:block" />
          언제든지 문의 주시면 성심껏 안내해드리겠습니다.
        </p>
      </div>
    </section>
  );
}
