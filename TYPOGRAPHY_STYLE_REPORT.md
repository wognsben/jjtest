# 타이포그래피 스타일 리포트

## 📝 섹션별 타이포그래피 구성

---

## 🏠 메인 페이지

### 1. Hero (src/components/Hero.tsx)

#### **메인 타이틀**
```
폰트: 'IM Fell English', 'Noto Serif KR', serif
크기: clamp(2rem, 6vw, 4.8rem)  // 모바일: 32px, 데스크톱: 76.8px
줄간격: 1.05
자간: -0.02em
굵기: 400 (Normal)
스타일: italic
색상: #2D5016
```

#### **서브 태그라인**
```
폰트: 'Inter', sans-serif
크기: clamp(0.875rem, 1.5vw, 1rem)  // 모바일: 14px, 데스크톱: 16px
줄간격: 기본
자간: 기본
굵기: 기본
색상: 기본 (secondary)
```

#### **하단 태그**
```
폰트: 'Inter', sans-serif
크기: clamp(0.7rem, 1.3vw, 0.92rem)  // 모바일: 11.2px, 데스크톱: 14.72px
줄간격: 기본
자간: 기본
굵기: 기본
색상: #666
```

---

### 2. MethodNew (src/components/MethodNew.tsx)

#### **히어로 텍스트 (브라운 배경)**
```
폰트: 'Noto Serif KR', serif
크기: text-xl md:text-2xl lg:text-3xl  // 모바일: 20px, 중간: 24px, 데스크톱: 30px
줄간격: leading-relaxed (약 1.625)
자간: 기본
굵기: 기본
색상: text-white/95
```

#### **본문 텍스트**
```
폰트: 'Noto Serif KR', serif
크기: clamp(0.85rem, 3.2vw, 1.05rem)  // 모바일: 13.6px, 데스크톱: 16.8px
줄간격: 1.65
자간: 0
굵기: 기본 (400)
색상: 기본 (brown-800)
최대폭: 34em
정렬: left
```

#### **섹션 제목**
```
폰트: 'Noto Serif KR', serif
크기: clamp(1.2rem, 3vw, 2.25rem)  // 모바일: 19.2px, 데스크톱: 36px
줄간격: 기본
자간: 기본
굵기: 기본
색상: 기본
```

---

### 3. GrowthNew (src/components/GrowthNew.tsx)

#### **섹션 제목**
```
폰트: 'Noto Serif KR', serif
크기: clamp(1.5rem, 4vw, 2.5rem)  // 모바일: 24px, 데스크톱: 40px
줄간격: 기본
자간: 기본
굵기: 600 (SemiBold)
색상: #8B6F47, #2e7d32 (두 가지 색상 사용)
```

#### **본문 텍스트**
```
폰트: 'Noto Serif KR', serif
크기: clamp(0.85rem, 3.4vw, 1.05rem)  // 모바일: 13.6px, 데스크톱: 16.8px
줄간격: 1.65
자간: 0
굵기: 기본 (400)
색상: brown-800
최대폭: 32em, 34em
정렬: left
```

#### **카드 텍스트 (모바일)**
```
폰트: 'Noto Serif KR', serif
크기: clamp(1.1rem, 3.5vw, 1.3rem)  // 모바일: 17.6px, 데스크톱: 20.8px
줄간격: 1.6
자간: 0
굵기: 기본
색상: 기본

설명 텍스트:
크기: clamp(0.95rem, 3.4vw, 1.05rem)  // 모바일: 15.2px, 데스크톱: 16.8px
줄간격: 1.6
자간: 0
```

---

## 📖 About 페이지

### 1. AboutHero (src/components/about/AboutHero.tsx)

#### **메인 타이틀**
```
폰트: 'Noto Serif KR', serif
크기: clamp(2.5rem, 8vw, 8rem)  // 모바일: 40px, 데스크톱: 128px
줄간격: 1.1
자간: 0.02em
굵기: 700 (Bold)
색상: #1a1a1a
```

#### **모바일 타이틀 (변경 시)**
```
크기: clamp(2.2rem, 7vw, 3.2rem)  // 모바일: 35.2px, 데스크톱: 51.2px
줄간격: 1.15
자간: -0.01em
```

#### **라벨**
```
폰트: 'Inter', sans-serif
크기: clamp(0.75rem, 1.5vw, 0.9rem)  // 모바일: 12px, 데스크톱: 14.4px
줄간격: 기본
자간: 기본
굵기: 600 (SemiBold)
색상: 기본
```

---

### 2. Philosophy (src/components/about/Philosophy.tsx)

#### **섹션 라벨**
```
폰트: 'Noto Serif KR', 'Noto Serif', serif
크기: clamp(0.75rem, 1.2vw, 0.85rem)  // 모바일: 12px, 데스크톱: 13.6px
줄간격: 기본
자간: 기본
굵기: 기본
색상: brown-700 italic
```

#### **제목**
```
폰트: 'Noto Serif KR', serif
크기: clamp(1.75rem, 3.5vw, 2.5rem)  // 모바일: 28px, 데스크톱: 40px
줄간격: 1.3
자간: -0.03em
굵기: 600 (SemiBold)
색상: #4A4A4A
```

#### **본문 텍스트 (일반)**
```
폰트: 'Noto Serif KR', serif
크기: clamp(0.85rem, 1.8vw, 1.125rem)  // 모바일: 13.6px, 데스크톱: 18px
줄간격: 1.65
자간: 0
굵기: 300 (Light)
색상: #666666
문단 간격: clamp(1rem, 2vw, 1.25rem)
```

#### **본문 텍스트 (강조)**
```
폰트: 'Noto Serif KR', serif
크기: clamp(0.85rem, 2vw, 1.25rem)  // 모바일: 13.6px, 데스크톱: 20px
줄간격: 1.65
자간: 0
굵기: 400 (Normal)
색상: #333333
```

#### **인용구 (Pull Quote)**
```
폰트: 'Noto Serif KR', serif
크기: clamp(0.85rem, 2vw, 1.25rem)  // 모바일: 13.6px, 데스크톱: 20px
줄간격: 1.5
자간: -0.01em
굵기: 400 (Normal)
색상: #333333
문단 간격: clamp(1rem, 2vw, 1.25rem)
```

---

### 3. FirstRite (src/components/about/FirstRite.tsx)

#### **제목**
```
폰트: 'Noto Serif KR', serif
크기: clamp(1.75rem, 3.5vw, 2.5rem)  // 모바일: 28px, 데스크톱: 40px
줄간격: 1.3
자간: 기본
굵기: 600 (SemiBold)
색상: #4A4A4A
```

#### **본문 텍스트**
```
폰트: 'Noto Serif KR', serif
크기: clamp(0.85rem, 1.6vw, 1.1rem)  // 모바일: 13.6px, 데스크톱: 17.6px
줄간격: 1.65
자간: 0
굵기: 400 (Normal) / 600 (SemiBold) - 마지막 문단
색상: #4A4A4A
문단 간격: 20px
```

#### **카드 제목**
```
폰트: 'Noto Serif KR', serif
크기: clamp(1.15rem, 2vw, 1.5rem)  // 모바일: 18.4px, 데스크톱: 24px
줄간격: 기본
자간: -0.02em
굵기: 600 (SemiBold)
색상: #8B5A3C
```

#### **카드 부제**
```
폰트: 'Noto Serif KR', serif
크기: clamp(0.85rem, 2vw, 1rem)  // 모바일: 13.6px, 데스크톱: 16px
줄간격: 기본
자간: -0.02em
굵기: 600 (SemiBold)
색상: #5A8B5A
```

#### **카드 본문**
```
폰트: 'Noto Serif KR', serif
크기: clamp(0.9rem, 1.5vw, 1rem)  // 모바일: 14.4px, 데스크톱: 16px
줄간격: 1.65
자간: 0
굵기: 기본 (400)
색상: #555
```

---

### 4. Overview (src/components/about/Overview.tsx)

#### **큰 타이틀 (숫자)**
```
폰트: 'Noto Serif KR', serif
크기: 매우 큰 사이즈 (배경용)
줄간격: 기본
자간: 기본
굵기: 기본
색상: 기본
```

#### **타이틀**
```
폰트: 'Noto Serif KR', serif
크기: text-7xl md:text-8xl lg:text-9xl  // 매우 큰 사이즈
줄간격: 기본
자간: 기본
굵기: 기본
색상: brown-700, brown-900
```

#### **서브타이틀**
```
폰트: 'Noto Serif KR', serif
크기: text-xl md:text-2xl  // 모바일: 20px, 데스크톱: 24px
줄간격: leading-relaxed (약 1.625)
자간: 기본
굵기: 기본
색상: brown-600
최대폭: max-w-md
```

---

## 📞 Contact 페이지

### 1. ContactHero (src/components/contact/ContactHero.tsx)

#### **메인 타이틀**
```
폰트: 'Pretendard Variable', sans-serif
크기: clamp(1rem, 4vw, 3rem)  // 모바일: 16px, 데스크톱: 48px
      lg: clamp(3.5rem, 3vw, 8rem)  // 큰 화면: 56px ~ 128px
줄간격: 1.2
자간: tracking-tight
굵기: 기본
색상: 기본
패딩: px-4
```

#### **서브타이틀**
```
폰트: 'Pretendard Variable', sans-serif
크기: clamp(1rem, 2vw, 1.5rem)  // 모바일: 16px, 데스크톱: 24px
줄간격: 1.65
자간: 0
굵기: 기본
색상: #6B4423/70 (70% 투명도)
최대폭: max-w-2xl
패딩: px-4
```

---

### 2. ContactInfo (src/components/contact/ContactInfo.tsx)

#### **라벨**
```
폰트: 'Noto Sans KR', sans-serif (추정)
크기: 0.85rem  // 13.6px
줄간격: 기본
자간: 0.05em
굵기: 500 (Medium)
색상: #6B4423/50 (50% 투명도)
```

#### **링크 텍스트**
```
폰트: 'Noto Sans KR', sans-serif (추정)
크기: clamp(1rem, 1.8vw, 1.2rem)  // 모바일: 16px, 데스크톱: 19.2px
줄간격: 1.65
자간: 0
굵기: 기본
색상: #6B4423
밑줄: underline (컬러: item.color, 두께: 2px, 오프셋: 4px)
```

#### **설명 텍스트**
```
폰트: 'Noto Sans KR', sans-serif (추정)
크기: clamp(0.85rem, 1.4vw, 1rem)  // 모바일: 13.6px, 데스크톱: 16px
줄간격: 1.65
자간: 0
굵기: 기본
색상: #6B4423/60 (60% 투명도)
```

#### **일반 텍스트**
```
폰트: 'Noto Sans KR', sans-serif (추정)
크기: clamp(1rem, 1.6vw, 1.2rem)  // 모바일: 16px, 데스크톱: 19.2px
줄간격: 1.65
자간: 0
굵기: 기본
색상: #6B4423
```

---

## 📊 전체 패턴 분석

### **공통 패턴**

#### **1. 본문 텍스트 스타일 (가장 많이 사용)**
```
폰트: 'Noto Serif KR', serif
크기: clamp(0.85rem, 1.6~3.4vw, 1.05~1.125rem)
     // 모바일: 13.6px, 데스크톱: 16.8~18px
줄간격: 1.65 (표준)
자간: 0
굵기: 300 (Light) ~ 400 (Normal)
색상: #4A4A4A, #666666, #333333, brown-800 등
```

#### **2. 제목 스타일**
```
폰트: 'Noto Serif KR', serif
크기: clamp(1.5rem~2.5rem, 3.5~8vw, 2.5~8rem)
     // 모바일: 24~40px, 데스크톱: 40~128px
줄간격: 1.1 ~ 1.3 (제목에 따라 다름)
자간: -0.03em ~ 0.02em (제목에 따라 다름)
굵기: 600 (SemiBold) ~ 700 (Bold)
```

#### **3. 서브 텍스트 / 라벨**
```
폰트: 'Inter' 또는 'Noto Sans KR', sans-serif
크기: clamp(0.75rem, 1.2~1.5vw, 0.9~1rem)
     // 모바일: 12px, 데스크톱: 14.4~16px
줄간격: 기본
자간: 0.05em (라벨의 경우)
굵기: 500 (Medium) ~ 600 (SemiBold)
```

---

## 🎯 주요 특징

1. **일관된 본문 스타일**
   - 대부분의 본문 텍스트는 `line-height: 1.65` 사용
   - `font-size: clamp(0.85rem, ..., 1.05~1.125rem)` 패턴
   - `letter-spacing: 0` (자간 없음)

2. **제목의 다양성**
   - 화면 크기에 따라 크게 변하는 clamp 값
   - 줄간격과 자간이 제목의 크기와 중요도에 따라 조절

3. **폰트 패밀리**
   - 한글 본문: `'Noto Serif KR', serif` (가장 많이 사용)
   - 영문/라벨: `'Inter', sans-serif` 또는 `'Pretendard Variable', sans-serif`
   - 히어로: `'IM Fell English'` (메인 히어로에만 사용)

4. **색상 시스템**
   - 본문: #4A4A4A, #666666, #333333
   - 브랜드: brown 계열 (#6B4423, #8B6F47, brown-700 등)
   - 강조: green (#7CB342, #2e7d32), pink 계열

