"use client";

import { useEffect, useRef, useState } from "react";

interface UseFadeInOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useFadeIn<T extends HTMLElement = HTMLDivElement>(options: UseFadeInOptions = {}) {
  const {
    threshold = 0.2,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;

  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}

