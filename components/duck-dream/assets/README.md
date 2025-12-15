# SVG Assets

이 디렉토리에는 Figma에서 생성된 SVG 파일들이 포함되어 있습니다.

다음 파일들을 생성해야 합니다:

- `svg-2ooq9.ts` - Hero 섹션의 SVG 및 이미지 임포트
- `svg-g3etc.ts` - Features 섹션의 SVG 및 이미지 임포트
- `svg-iik2l.ts` - Service 섹션의 SVG 및 이미지 임포트
- `svg-9qdsf.ts` - Game 섹션의 SVG 및 이미지 임포트
- `svg-yviy7.ts` - Chat 섹션의 SVG 및 이미지 임포트
- `svg-exdp8.ts` - HealthRecord 섹션의 SVG 및 이미지 임포트

## 설정 방법

각 파일은 다음과 같은 구조로 만들어야 합니다:

```typescript
export const imgRatio = "/assets/[IMAGE_ID].png";
export const imgIconNormalLogoApple = "/assets/[IMAGE_ID].png";
// ... 기타 이미지 및 SVG
```

Figma MCP에서 생성된 코드의 import 문을 참고하여 필요한 SVG 파일들을 추가하세요.
