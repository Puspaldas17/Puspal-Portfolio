import { useEffect, useState, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

export function useParallax(ref: RefObject<HTMLElement>, options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = 'up' } = options;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate if element is in viewport
      const isInViewport = elementTop < windowHeight && elementTop + elementHeight > 0;

      if (isInViewport) {
        // Calculate parallax offset based on scroll position
        const scrolled = windowHeight - elementTop;
        const parallaxOffset = scrolled * speed * (direction === 'up' ? -1 : 1);
        setOffset(parallaxOffset);
      }
    };

    handleScroll(); // Initial calculation
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed, direction]);

  return offset;
}

export function useParallaxTransform(ref: RefObject<HTMLElement>, options: ParallaxOptions = {}) {
  const offset = useParallax(ref, options);
  return `translateY(${offset}px)`;
}
