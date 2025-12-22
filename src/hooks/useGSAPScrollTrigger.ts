import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Parallax effect hook
export function useParallaxScroll(
  ref: RefObject<HTMLElement>,
  options: {
    speed?: number;
    start?: string;
    end?: string;
    scrub?: boolean | number;
  } = {}
) {
  const { speed = 0.5, start = 'top bottom', end = 'bottom top', scrub = true } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
      },
    });

    tl.fromTo(
      element,
      { y: -100 * speed },
      { y: 100 * speed, ease: 'none' }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [ref, speed, start, end, scrub]);
}

// Fade + Scale on scroll
export function useFadeInScale(
  ref: RefObject<HTMLElement>,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    from?: { opacity: number; scale: number };
    to?: { opacity: number; scale: number };
  } = {}
) {
  const {
    start = 'top 80%',
    end = 'top 20%',
    scrub = 1,
    from = { opacity: 0, scale: 0.9 },
    to = { opacity: 1, scale: 1 },
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    gsap.fromTo(
      element,
      from,
      {
        ...to,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [ref, start, end, scrub]);
}

// Horizontal scroll section
export function useHorizontalScroll(
  containerRef: RefObject<HTMLElement>,
  options: {
    pin?: boolean;
    scrub?: boolean | number;
  } = {}
) {
  const { pin = true, scrub = 1 } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollWidth = container.scrollWidth - container.clientWidth;

    gsap.to(container, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: pin,
        scrub: scrub,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef, pin, scrub]);
}

// Rotate on scroll
export function useRotateScroll(
  ref: RefObject<HTMLElement>,
  options: {
    rotation?: number;
    start?: string;
    end?: string;
    scrub?: boolean | number;
  } = {}
) {
  const { rotation = 360, start = 'top bottom', end = 'bottom top', scrub = true } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    gsap.fromTo(
      element,
      { rotation: 0 },
      {
        rotation,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [ref, rotation, start, end, scrub]);
}

// Stagger reveal children
export function useStaggerReveal(
  containerRef: RefObject<HTMLElement>,
  options: {
    childSelector?: string;
    stagger?: number;
    start?: string;
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
  } = {}
) {
  const {
    childSelector = '> *',
    stagger = 0.1,
    start = 'top 80%',
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const children = container.querySelectorAll(childSelector);

    gsap.fromTo(
      children,
      from,
      {
        ...to,
        stagger,
        scrollTrigger: {
          trigger: container,
          start,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef, childSelector, stagger, start]);
}
