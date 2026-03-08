import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  once?: boolean;
}

interface UseStaggerRevealOptions extends UseScrollRevealOptions {
  staggerDelay?: number;
}

/**
 * Hook that adds CSS class-based scroll reveal animations.
 * Elements start with opacity:0 and transition in when visible in viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', delay = 0, once = true } = options;
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsRevealed(true), delay);
          } else {
            setIsRevealed(true);
          }
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, rootMargin, delay, once]);

  return { ref, isRevealed };
}

/**
 * Hook that staggers multiple child reveals with configurable delay between each.
 */
export function useStaggerReveal(
  count: number,
  options: UseStaggerRevealOptions = {}
) {
  const { staggerDelay = 100, threshold = 0.1, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealedItems, setRevealedItems] = useState<boolean[]>(new Array(count).fill(false));
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContainerVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsContainerVisible(false);
          setRevealedItems(new Array(count).fill(false));
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, rootMargin, once, count]);

  useEffect(() => {
    if (!isContainerVisible) return;

    let cancelled = false;
    const ids: number[] = [];
    for (let i = 0; i < count; i++) {
      const id = setTimeout(() => {
        if (cancelled) return;
        setRevealedItems(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * staggerDelay);
      ids.push(id);
    }

    return () => {
      cancelled = true;
      ids.forEach(id => clearTimeout(id));
    };
  }, [isContainerVisible, count, staggerDelay]);

  const getItemStyle = useCallback(
    (index: number) => ({
      opacity: revealedItems[index] ? 1 : 0,
      transform: revealedItems[index] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
      transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)`,
    }),
    [revealedItems]
  );

  return { containerRef, revealedItems, getItemStyle, isContainerVisible };
}
