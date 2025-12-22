import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticHoverOptions {
  strength?: number;
  speed?: number;
  tolerance?: number;
}

/**
 * Premium magnetic hover effect
 * Element follows cursor with smooth spring animation
 */
export function useMagneticHover<T extends HTMLElement>({
  strength = 0.3,
  speed = 0.6,
  tolerance = 0.8,
}: MagneticHoverOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = rect.width * tolerance;

      if (distance < maxDistance) {
        const power = (maxDistance - distance) / maxDistance;
        const moveX = deltaX * strength * power;
        const moveY = deltaY * strength * power;

        gsap.to(element, {
          x: moveX,
          y: moveY,
          duration: speed,
          ease: 'power2.out',
        });
      } else {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: speed,
          ease: 'elastic.out(1, 0.5)',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: speed * 1.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, speed, tolerance]);

  return ref;
}
