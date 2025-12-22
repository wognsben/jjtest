/**
 * 이미지 경로 유틸리티
 * 
 * 로컬 개발 환경: /assets/... (로컬 assets 폴더 참조)
 * 프로덕션 환경: GitHub Raw URL (https://raw.githubusercontent.com/...)
 * 
 * GitHub 레포지토리: https://github.com/wognsben/jjtest
 * 브랜치: main
 */

const GITHUB_REPO = 'wognsben/jjtest';
const GITHUB_BRANCH = 'main';
const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/assets`;

/**
 * 이미지 경로를 환경에 맞게 변환
 * 
 * @param assetPath - /assets/... 형식의 경로
 * @returns 개발 환경: /assets/..., 프로덕션: GitHub Raw URL
 */
export const getImagePath = (assetPath: string): string => {
  // 경로가 /assets/로 시작하지 않으면 그대로 반환
  if (!assetPath.startsWith('/assets/')) {
    return assetPath;
  }

  // 개발 환경에서는 로컬 경로 사용
  if (import.meta.env.DEV) {
    return assetPath;
  }

  // 프로덕션 환경에서는 GitHub Raw URL 사용
  const relativePath = assetPath.replace('/assets/', '');
  return `${GITHUB_RAW_BASE}/${relativePath}`;
};

/**
 * 여러 이미지 경로를 한번에 변환
 */
export const getImagePaths = (assetPaths: string[]): string[] => {
  return assetPaths.map(path => getImagePath(path));
};
