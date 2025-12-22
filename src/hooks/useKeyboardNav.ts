import { useEffect } from 'react';

interface UseKeyboardNavOptions {
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onEnter?: () => void;
  onEscape?: () => void;
  onSpace?: () => void;
  enabled?: boolean;
}

export function useKeyboardNav(options: UseKeyboardNavOptions) {
  const {
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    onEnter,
    onEscape,
    onSpace,
    enabled = true,
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          onArrowUp?.();
          break;
        case 'ArrowDown':
          e.preventDefault();
          onArrowDown?.();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onArrowLeft?.();
          break;
        case 'ArrowRight':
          e.preventDefault();
          onArrowRight?.();
          break;
        case 'Enter':
          onEnter?.();
          break;
        case 'Escape':
          onEscape?.();
          break;
        case ' ':
          e.preventDefault();
          onSpace?.();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enabled, onArrowUp, onArrowDown, onArrowLeft, onArrowRight, onEnter, onEscape, onSpace]);
}

// Section navigation with keyboard
export function useSectionKeyboardNav(sections: string[]) {
  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getCurrentSection = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let currentIndex = 0;

    sections.forEach((sectionId, index) => {
      const element = document.getElementById(sectionId);
      if (element && element.offsetTop <= scrollPosition) {
        currentIndex = index;
      }
    });

    return currentIndex;
  };

  useKeyboardNav({
    onArrowDown: () => {
      const current = getCurrentSection();
      const next = Math.min(current + 1, sections.length - 1);
      scrollToSection(next);
    },
    onArrowUp: () => {
      const current = getCurrentSection();
      const prev = Math.max(current - 1, 0);
      scrollToSection(prev);
    },
  });
}
