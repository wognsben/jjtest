/**
 * Font Utilities
 * 
 * 모든 사용 가능한 폰트를 중앙 관리합니다.
 * GitHub 저장소: https://github.com/wognsben/font
 */

// ============================================
// Google Fonts (자동 로드됨)
// ============================================
export const GOOGLE_FONTS = {
  // 한글
  NOTO_SERIF_KR: "'Noto Serif KR', serif",
  PRETENDARD: "'Pretendard', -apple-system, sans-serif",
  
  // 영문 세리프
  PLAYFAIR_DISPLAY: "'Playfair Display', serif",
  CORMORANT_GARAMOND: "'Cormorant Garamond', serif",
  
  // 영문 산세리프
  INTER: "'Inter', sans-serif",
} as const;

// ============================================
// Awwwards/Behance/Dribbble Style Fonts
// ============================================
export const PREMIUM_FONTS = {
  SPACE_GROTESK: "'Space Grotesk', sans-serif",
  POPPINS: "'Poppins', sans-serif",
  DM_SANS: "'DM Sans', sans-serif",
  MANROPE: "'Manrope', sans-serif",
  OUTFIT: "'Outfit', sans-serif",
  WORK_SANS: "'Work Sans', sans-serif",
  PLUS_JAKARTA_SANS: "'Plus Jakarta Sans', sans-serif",
  SORA: "'Sora', sans-serif",
  CLASH_DISPLAY: "'Clash Display', sans-serif",
} as const;

// ============================================
// Big Tech Fonts
// ============================================
export const TECH_FONTS = {
  APPLE: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif",
  MICROSOFT: "'Segoe UI', 'Segoe UI Variable', system-ui, sans-serif",
  GOOGLE: "'Roboto', 'Google Sans', system-ui, sans-serif",
  OPEN_SANS: "'Open Sans', system-ui, sans-serif",
} as const;

// ============================================
// CSS 변수 (index.css에 정의됨)
// ============================================
export const CSS_VAR_FONTS = {
  SPACE_GROTESK: 'var(--font-space-grotesk)',
  POPPINS: 'var(--font-poppins)',
  DM_SANS: 'var(--font-dm-sans)',
  MANROPE: 'var(--font-manrope)',
  OUTFIT: 'var(--font-outfit)',
  WORK_SANS: 'var(--font-work-sans)',
  JAKARTA: 'var(--font-jakarta)',
  SORA: 'var(--font-sora)',
  CLASH: 'var(--font-clash)',
  APPLE: 'var(--font-apple)',
  MICROSOFT: 'var(--font-microsoft)',
  GOOGLE: 'var(--font-google)',
  OPEN_SANS: 'var(--font-open-sans)',
} as const;

// ============================================
// GitHub 저장소에서 로드할 커스텀 폰트
// ============================================
// 사용법: GitHub에 폰트 파일을 업로드한 후 아래에 추가
// 예시:
// export const CUSTOM_FONTS = {
//   MY_CUSTOM_FONT: "'My Custom Font', sans-serif",
// } as const;

// ============================================
// 폰트 헬퍼 함수
// ============================================
export type FontFamily = string;

/**
 * 폰트를 style 객체에 적용
 * @example
 * <div style={{ ...getFontStyle(GOOGLE_FONTS.NOTO_SERIF_KR) }}>
 */
export const getFontStyle = (fontFamily: FontFamily) => ({
  fontFamily,
});

/**
 * React 컴포넌트에서 사용하는 폰트 스타일
 * @example
 * <div style={fontStyle(GOOGLE_FONTS.NOTO_SERIF_KR)}>
 */
export const fontStyle = (fontFamily: FontFamily) => ({
  fontFamily,
});

// ============================================
// 폰트 카테고리별 추천
// ============================================
export const FONT_RECOMMENDATIONS = {
  // 모던/미니멀
  MODERN: [PREMIUM_FONTS.SPACE_GROTESK, PREMIUM_FONTS.SORA, PREMIUM_FONTS.MANROPE],
  
  // 프리미엄/럭셔리
  PREMIUM: [PREMIUM_FONTS.CLASH_DISPLAY, PREMIUM_FONTS.MANROPE, GOOGLE_FONTS.PLAYFAIR_DISPLAY],
  
  // 깔끔한 UI
  CLEAN: [PREMIUM_FONTS.WORK_SANS, PREMIUM_FONTS.OUTFIT, TECH_FONTS.APPLE],
  
  // 빅테크 스타일
  TECH: [TECH_FONTS.APPLE, TECH_FONTS.MICROSOFT, TECH_FONTS.GOOGLE],
  
  // 한글
  KOREAN: [GOOGLE_FONTS.PRETENDARD, GOOGLE_FONTS.NOTO_SERIF_KR],
} as const;

