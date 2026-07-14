import { useEffect, useRef } from 'react';

const symbols = ['{}', '</>', 'API', '01', 'fn', 'JS', '=>'];

export default function InteractiveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationId;
    let width = 0;
    let height = 0;
    let nodes = [];
    let resizeTimer;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const createNodes = () => {
      const count = Math.min(72, Math.max(30, Math.floor((width * height) / 24000)));
      nodes = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        symbol: symbols[index % symbols.length],
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createNodes();
    };

    const draw = () => {
      if (document.visibilityState === 'hidden') {
        animationId = requestAnimationFrame(draw);
        return;
      }

      context.clearRect(0, 0, width, height);
      context.fillStyle = 'rgba(0, 0, 0, 0.18)';
      context.fillRect(0, 0, width, height);

      nodes.forEach((node, index) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        for (let otherIndex = index + 1; otherIndex < nodes.length; otherIndex += 1) {
          const other = nodes[otherIndex];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 135) {
            context.strokeStyle = `rgba(27, 144, 255, ${0.16 * (1 - distance / 135)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        const glow = 0.45 + Math.sin(node.pulse) * 0.22;
        context.fillStyle = `rgba(13, 202, 240, ${glow})`;
        context.font = '700 12px Inter, system-ui, sans-serif';
        context.fillText(node.symbol, node.x, node.y);
      });

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 160);
    };

    resize();
    draw();
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.clearTimeout(resizeTimer);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />;
}
