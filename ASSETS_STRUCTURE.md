# Assets 폴더 구조 제안

## 권장 구조

```
src/assets/
├── shared/              # 여러 페이지에서 공유하는 이미지
│   ├── icons/          # 아이콘 (palette, brush 등)
│   ├── logos/          # 로고
│   └── common/         # 공통 이미지
│
├── pages/
│   ├── home/           # 홈 페이지 이미지
│   │   ├── hero/       # Hero 섹션 이미지
│   │   ├── programs/   # Programs 섹션 이미지
│   │   ├── method/     # Method 섹션 이미지
│   │   └── growth/     # Growth 섹션 이미지
│   │
│   ├── about/          # About 페이지 이미지
│   │   ├── hero/       # AboutHero 섹션
│   │   ├── founder/    # Founder 섹션
│   │   ├── interview/  # Interview 섹션
│   │   └── ...         # 기타 About 섹션들
│   │
│   ├── programs/       # Programs 페이지 이미지
│   │   ├── child-art/  # Child Art 섹션
│   │   ├── youth-art/  # Youth Art 섹션
│   │   ├── adult-art/  # Adult Art 섹션
│   │   └── for-mom/    # For Mom 섹션
│   │
│   └── contact/        # Contact 페이지 이미지
│       └── ...
```

## 장점

1. **명확한 구조**: 어떤 이미지가 어디에 사용되는지 한눈에 파악 가능
2. **유지보수 용이**: 특정 페이지/섹션의 이미지만 쉽게 찾아서 수정 가능
3. **확장성**: 새로운 페이지나 섹션 추가 시 구조가 명확함
4. **협업 효율**: 여러 개발자가 작업할 때 충돌 최소화

## 사용 예시

```typescript
// Before (현재)
import brushStroke from 'figma:asset/74285ab181c295891f912b6090ac7ae6b4fe1cd6.png';

// After (제안)
import brushStroke from '@/assets/pages/home/hero/brush-stroke.png';
import paletteIcon from '@/assets/shared/icons/palette.png';
```

## vite.config.ts 수정 필요

현재는 각 이미지마다 개별 alias를 설정하고 있지만, 
폴더 구조로 변경하면 더 간단하게 관리할 수 있습니다.
