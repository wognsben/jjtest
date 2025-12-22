import { useEffect } from 'react';

// Dynamically import Lenis to avoid SSR issues
let Lenis: any = null;

/**
 * Premium smooth scroll hook using Lenis (optional)
 * Awwwards-level scrolling experience
 */
export function useSmoothScroll(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    let lenis: any = null;

    // Dynamically load Lenis
    const initLenis = async () => {
      try {
        if (!Lenis) {
          const LenisModule = await import('@studio-freight/lenis');
          Lenis = LenisModule.default;
        }

        // Initialize Lenis
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical' as const,
          gestureOrientation: 'vertical' as const,
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        // Animation frame loop
        function raf(time: number) {
          lenis?.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch (error) {
        console.warn('Lenis smooth scroll not available:', error);
      }
    };

    initLenis();

    // Cleanup
    return () => {
      lenis?.destroy();
    };
  }, [enabled]);
}