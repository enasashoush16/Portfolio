import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export function useCounter(ref, target, duration = 1100) {
  const [value, setValue] = useState(0);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return undefined;

    let frameId;
    const started = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - started) / duration, 1);
      setValue(Math.round(target * progress));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, isInView, target]);

  return value;
}
