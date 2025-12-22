# Awwwards / Cosmos 급 모바일 메뉴 연출 설계 문서

## 현재 상태 분석

### ✅ 이미 구현된 것들
1. **구조 분리**: fixed inset-0 오버레이로 Hero와 분리
2. **Hero 재질 재사용**: paint texture, noise layer 적용
3. **GSAP 타임라인**: 기본 구조 존재
4. **풀스크린**: 전체 화면 오버레이
5. **Z-index 계층**: 9999로 최상위 설정
6. **타이포그래피**: Noto Serif KR, 큰 사이즈

### ⚠️ 개선이 필요한 부분
1. **타임라인 연출**: 현재는 단순 fade-in/stagger, "공간 전환" 느낌 부족
2. **배경 레이어 조합**: Hero와의 연속성은 있으나 단계적 등장 부족
3. **닫힘 연출**: reverse()만 사용, 순차적 닫힘 미구현
4. **타이포그래피**: Editorial 느낌 강화 필요
5. **Micro-interaction**: hover/tap 시 subtle stroke/underline 부재

---

## 1. 구조 설계 (DOM 레벨)

### 목표 구조
```
[ DOM Hierarchy ]
├─ <body>
│  ├─ Hero / Page Content (scrollable)
│  ├─ Fixed Header (z: 50)
│  │  └─ Hamburger Button (z: 10000)
│  └─ MobileMenuOverlay (z: 9999) ← 완전히 분리
│     ├─ Background Layer Group
│     │  ├─ Base Background (#faf9f7)
│     │  ├─ Paint Texture (hero.jpg, opacity: 0.12-0.18)
│     │  └─ Noise/Grain (opacity: 0.02)
│     ├─ Menu Items Container
│     │  └─ Typographic Objects (HOME, ABOUT, PROGRAM, CONTACT)
│     ├─ Close Button (X)
│     └─ Ambient Motion Layer (very subtle)
```

### 핵심 원칙
- **Scroll과 완전 분리**: 메뉴는 독립적인 GSAP timeline만 사용
- **Hero와 재질 공유**: 같은 paint texture, noise pattern
- **공간 전환 인식**: 단순 overlay가 아닌 "다른 세계로 이동"

---

## 2. 진입 연출 타임라인 (Menu Open)

### Phase 1: 공간 전환 (0.0s - 0.3s)
**목표**: "화면 전체가 다른 세계로 전환된다"는 인식

```
Background Layer Animation:
- scaleY: 0 → 1 (또는 opacity: 0 → 1)
- duration: 0.3s
- easing: power2.out
- 동시에 backdrop-blur: 0 → 20px (subtle)
```

**현재 상태**: opacity fade만 있음 → scaleY 추가 권장

### Phase 2: 텍스트 등장 (0.3s - 0.8s)
**목표**: 텍스트가 "공간 안에서 태어남"

```
Menu Items Animation:
- opacity: 0 → 1
- y: +24px → 0
- stagger: 0.06s ~ 0.08s (각 항목 간격)
- duration: 0.6s per item
- easing: power3.out 또는 expo.out (탄성 없이)

Paint Texture Animation (동시):
- opacity: 0 → 0.15
- scale: 1.08 → 1.02
- duration: 1.2s
- easing: power2.out
```

**현재 상태**: ✅ 구현되어 있으나 easing 조정 권장

### Phase 3: 마무리 숨결 (0.8s - 1.1s)
**목표**: "브랜드 같다"는 느낌

```
Fine Details:
- Noise opacity: 0.02 → 0.04 (subtle increase)
- Optional: Underline/stroke 미세 등장 (hand-drawn 느낌)
- Ambient blob (if exists): 매우 느린 움직임
```

**현재 상태**: ❌ Phase 3 부재 → 추가 권장

---

## 3. 배경 레이어 설계 (Hero와의 연결성)

### Base Background
```css
background: #faf9f7 ~ #fefefe
/* Hero의 white 배경과 연속 */
```

### Paint Texture Layer
```css
/* Hero에서 사용하는 /assets/main/hero.jpg 재사용 */
mix-blend-mode: multiply;
opacity: 0.12 ~ 0.18 (Hero는 0.65, 메뉴는 더 subtle)
filter: saturate(1.05) contrast(0.95);
transform: scale(1.08) → scale(1.02) (등장 애니메이션)
object-position: 46% 58% (Hero와 동일 포인트)
```

**현재 상태**: ✅ 구현되어 있으나 opacity 값 조정 필요 (0.35 → 0.15)

### Noise/Grain Layer
```css
/* SVG turbulence pattern */
opacity: 0.02 ~ 0.04
/* Hero의 noise와 동일한 패턴 사용 */
```

**현재 상태**: ✅ 구현되어 있음

### Backdrop Blur
```css
backdrop-filter: blur(20px);
/* Hero의 clarity와 대비되는 "내부 공간" 느낌 */
```

**현재 상태**: ✅ 구현되어 있음

---

## 4. 타이포그래피 설계

### 현재 상태
- Font: 'Noto Serif KR'
- Size: clamp(1.8rem, 6vw, 2.6rem) ✅
- Letter-spacing: 0.08em
- Color: rgba(0,0,0,0.85) / #2d5016 (active)

### Awwwards급 권장 스펙

```css
/* Typographic Object (텍스트 = 오브젝트) */
font-family: 'Noto Serif KR', serif;
font-size: clamp(1.75rem, 6.5vw, 2.75rem); /* 조금 더 크게 */
font-weight: 400;
letter-spacing: -0.02em; /* 더 타이트하게 */
line-height: 1.2; /* 명확히 */
color: rgba(0, 0, 0, 0.88); /* 조금 더 진하게 */

/* Active State */
color: #2d5016;
font-style: italic;
```

### 인터랙션 (Hover/Tap)
**현재**: opacity 변화만

**권장**:
```css
/* Option 1: Color Temperature Shift */
color: rgba(45, 80, 22, 0.7); /* warmer green tint */

/* Option 2: Subtle Underline */
text-decoration: underline;
text-decoration-thickness: 1px;
text-underline-offset: 4px;
text-decoration-color: rgba(45, 80, 22, 0.3);

/* Option 3: Hand-drawn Stroke (SVG) */
/* 작은 손그림 느낌의 underline SVG 등장 */
```

---

## 5. 닫힘 연출 타임라인 (Menu Close)

### 현재 상태
- `timeline.reverse()` 사용
- 단순 역순 재생

### 권장: 순차적 닫힘

```
Phase 1: 텍스트 사라짐 (0.0s - 0.2s)
- Menu items opacity: 1 → 0
- y: 0 → -12px (살짝 위로)
- stagger: 0.04s
- duration: 0.2s
- easing: power2.in

Phase 2: 배경 레이어 (0.2s - 0.4s)
- Background opacity: 1 → 0
- Paint texture opacity: 0.15 → 0
- backdrop-blur: 20px → 0px
- duration: 0.2s
- easing: power2.in

Phase 3: 공간 축소 (0.4s - 0.6s)
- Overlay scaleY: 1 → 0 (또는 opacity: 0)
- pointer-events: auto → none
- body scroll unlock
- duration: 0.2s
- easing: power2.in
```

**구현 방법**:
- 별도의 close timeline 생성
- 또는 기존 timeline에 마커 추가하여 특정 구간만 reverse

---

## 6. UX 보완 포인트

### ✅ 이미 구현됨
- body scroll lock (`body.menu-open`)
- 햄버거 → X 전환 애니메이션
- Close 버튼 (X) 추가

### ⚠️ 추가 권장

#### iOS Overscroll Bounce 제거
```css
body.menu-open {
  overflow: hidden;
  position: fixed;
  width: 100%;
  /* iOS 추가 */
  touch-action: none;
  -webkit-overflow-scrolling: touch;
}
```

#### Orientation Change 대응
```javascript
// 화면 회전 시 메뉴 유지 또는 자동 닫기
window.addEventListener('orientationchange', () => {
  if (isMenuOpen) {
    // 메뉴 재배치 또는 닫기
  }
});
```

#### Hero Canvas Interaction 중지
```javascript
// 메뉴 열릴 때 Hero의 scroll interaction 일시 중지
// (필요한 경우)
```

---

## 7. 구현 우선순위

### Phase 1: 구조 확정 (필수)
1. ✅ 이미 완료: fixed inset-0 오버레이
2. ✅ 이미 완료: Hero 재질 재사용
3. ✅ 이미 완료: 독립 GSAP timeline

### Phase 2: 진입 연출 개선 (중요)
1. Background layer scaleY 애니메이션 추가
2. Paint texture opacity 조정 (0.35 → 0.15)
3. Phase 3 마무리 효과 추가 (noise opacity 변화, subtle stroke)

### Phase 3: 닫힘 연출 개선 (중요)
1. 순차적 닫힘 타임라인 구현
2. 텍스트 → 배경 → 공간 순서

### Phase 4: 타이포그래피 미세조정 (선택)
1. Letter-spacing: -0.02em로 조정
2. Hover/tap 인터랙션 개선 (underline 또는 color shift)

### Phase 5: UX 보완 (선택)
1. iOS overscroll bounce 제거
2. Orientation change 대응

---

## 8. 현재 코드와의 비교

| 항목 | 현재 상태 | 목표 상태 | 우선순위 |
|------|----------|----------|---------|
| 구조 분리 | ✅ 완료 | - | - |
| Hero 재질 재사용 | ✅ 완료 | - | - |
| 진입 타임라인 Phase 1 | ⚠️ opacity만 | scaleY 추가 | 높음 |
| 진입 타임라인 Phase 2 | ✅ 구현됨 | easing 조정 | 중간 |
| 진입 타임라인 Phase 3 | ❌ 없음 | 추가 필요 | 중간 |
| 닫힘 타임라인 | ⚠️ reverse()만 | 순차적 닫힘 | 높음 |
| Paint opacity | 0.35 | 0.12-0.18 | 높음 |
| 타이포그래피 | ✅ 좋음 | letter-spacing 미세조정 | 낮음 |
| 인터랙션 | ⚠️ opacity만 | underline/stroke | 낮음 |

---

## 9. 최종 체크리스트

### Awwwards/Cosmos 심사 기준

- [x] Full-screen 레벨의 공간 전환
- [x] Hero와 연속된 재질·톤
- [x] Scroll과 명확히 분리된 시간축 애니메이션
- [ ] 메뉴 자체가 콘텐츠처럼 느껴질 것 (개선 필요)
- [x] 독립적인 DOM 구조
- [x] Body scroll lock
- [ ] 순차적 닫힘 연출 (개선 필요)
- [ ] Phase 3 마무리 효과 (추가 필요)

---

## 결론

**현재 상태**: Awwwards 문턱 도달 (80%)

**남은 작업**: 
1. 진입 연출 Phase 1, 3 개선
2. 닫힘 연출 순차화
3. Paint opacity 미세조정

**예상 완성도**: 위 3가지만 구현하면 95%+ 달성 가능
