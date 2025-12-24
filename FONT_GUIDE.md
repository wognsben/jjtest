# 폰트 사용 가이드

이 프로젝트에서 사용 가능한 모든 폰트와 사용 방법을 안내합니다.

## 📚 폰트 저장소

- **GitHub 저장소**: https://github.com/wognsben/font
- **로컬 폴더**: `public/fonts/`

---

## 🎨 사용 가능한 폰트

### 1. Google Fonts (자동 로드)

#### 한글
- **Noto Serif KR** - 세리프 한글 폰트
- **Pretendard** - 모던 한글 폰트

#### 영문 세리프
- **Playfair Display** - 우아한 세리프
- **Cormorant Garamond** - 클래식 세리프

#### 영문 산세리프
- **Inter** - 깔끔한 산세리프

---

### 2. Awwwards/Behance/Dribbble 스타일 폰트

- **Space Grotesk** - 모던/미니멀
- **Poppins** - 인기 폰트
- **DM Sans** - 깔끔한 UI
- **Manrope** - 프리미엄 느낌
- **Outfit** - 모던 산세리프
- **Work Sans** - 깔끔한 UI
- **Plus Jakarta Sans** - 모던
- **Sora** - 미니멀
- **Clash Display** - 디스플레이 폰트

---

### 3. 빅테크 폰트

- **Apple (SF Pro)** - Apple 시스템 폰트
- **Microsoft (Segoe UI)** - Microsoft 시스템 폰트
- **Google (Roboto)** - Google 폰트
- **Open Sans** - 범용 폰트

---

## 💻 사용 방법

### 방법 1: fontUtils 사용 (권장)

```tsx
import { GOOGLE_FONTS, PREMIUM_FONTS, TECH_FONTS, fontStyle } from '@/utils/fontUtils';

// 컴포넌트에서 사용
<div style={fontStyle(GOOGLE_FONTS.NOTO_SERIF_KR)}>
  한글 텍스트
</div>

<div style={fontStyle(PREMIUM_FONTS.SPACE_GROTESK)}>
  Premium Text
</div>

<div style={fontStyle(TECH_FONTS.APPLE)}>
  Apple Style
</div>
```

### 방법 2: CSS 변수 사용

```tsx
<div style={{ fontFamily: 'var(--font-space-grotesk)' }}>
  Space Grotesk
</div>

<div style={{ fontFamily: 'var(--font-apple)' }}>
  Apple Font
</div>
```

### 방법 3: 직접 폰트명 사용

```tsx
<div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
  Space Grotesk
</div>
```

---

## 🆕 커스텀 폰트 추가하기

### GitHub 저장소에 폰트 추가

1. **폰트 파일 준비**
   - 권장 형식: `.woff2` (최신 브라우저)
   - 대체 형식: `.woff`, `.ttf`, `.otf`

2. **GitHub에 업로드**
   ```
   https://github.com/wognsben/font
   ```
   - `main` 브랜치에 폰트 파일 업로드

3. **CSS에 @font-face 추가**
   
   `src/index.css` 파일에 추가:
   
   ```css
   @font-face {
     font-family: 'MyCustomFont';
     src: url('https://raw.githubusercontent.com/wognsben/font/main/MyCustomFont-Regular.woff2') format('woff2'),
          url('https://raw.githubusercontent.com/wognsben/font/main/MyCustomFont-Regular.woff') format('woff');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   
   @font-face {
     font-family: 'MyCustomFont';
     src: url('https://raw.githubusercontent.com/wognsben/font/main/MyCustomFont-Bold.woff2') format('woff2');
     font-weight: 700;
     font-style: normal;
     font-display: swap;
   }
   ```

4. **fontUtils.ts에 추가**
   
   ```typescript
   export const CUSTOM_FONTS = {
     MY_CUSTOM_FONT: "'My Custom Font', sans-serif",
   } as const;
   ```

### 로컬 폰트 추가

1. **폰트 파일을 `public/fonts/` 폴더에 추가**

2. **CSS에 @font-face 추가**
   
   ```css
   @font-face {
     font-family: 'LocalFont';
     src: url('/fonts/LocalFont-Regular.woff2') format('woff2');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   ```

---

## 🎯 폰트 추천

### 모던/미니멀 디자인
- Space Grotesk
- Sora
- Manrope

### 프리미엄/럭셔리 느낌
- Clash Display
- Manrope
- Playfair Display

### 깔끔한 UI
- Work Sans
- Outfit
- Apple (SF Pro)

### 빅테크 스타일
- Apple (SF Pro)
- Microsoft (Segoe UI)
- Google (Roboto)

### 한글
- Pretendard (모던)
- Noto Serif KR (세리프)

---

## 📝 참고사항

- 모든 Google Fonts는 자동으로 로드됩니다.
- CSS 변수는 `src/index.css`에 정의되어 있습니다.
- 폰트 유틸리티는 `src/utils/fontUtils.ts`에서 관리됩니다.
- GitHub 저장소의 폰트는 CDN을 통해 로드됩니다.

---

## 🔗 관련 파일

- `src/index.css` - 폰트 import 및 CSS 변수 정의
- `src/utils/fontUtils.ts` - 폰트 유틸리티 함수
- `public/fonts/` - 로컬 폰트 파일 저장소
- `FONT_GUIDE.md` - 이 문서

