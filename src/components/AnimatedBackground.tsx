import React, { useEffect, useRef } from 'react';

const CHARS    = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01◆▲■★☆';
const COL_W    = 18;        // px per column
const FONT_PX  = 14;        // font size
const FPS      = 20;        // target frame-rate
const INTERVAL = 1000 / FPS;
const MOUSE_R  = 140;       // px — chars inside this radius light up

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, cols = 0;
    let drops: number[] = [];
    let mouseX = -9999;
    let mouseY = -9999;
    let animId: number;
    let lastTime = 0;

    /* ── initialise / resize ── */
    const init = () => {
      W     = canvas.width  = window.innerWidth;
      H     = canvas.height = window.innerHeight;
      cols  = Math.floor(W / COL_W);
      drops = Array.from({ length: cols }, () =>
        Math.floor(Math.random() * -(H / COL_W))
      );
    };

    /* ── draw (throttled to FPS) ── */
    const draw = (time: number) => {
      animId = requestAnimationFrame(draw);
      if (time - lastTime < INTERVAL) return;
      lastTime = time;

      const isDark = document.documentElement.classList.contains('dark');

      /* semi-transparent background fill → creates trailing fade */
      ctx.fillStyle = isDark
        ? 'rgba(18, 18, 18, 0.055)'
        : 'rgba(228, 228, 228, 0.11)';
      ctx.fillRect(0, 0, W, H);

      ctx.font = `${FONT_PX}px "Courier New", monospace`;

      for (let i = 0; i < cols; i++) {
        const x = i * COL_W + 2;
        const y = drops[i] * COL_W;

        const char = CHARS[Math.floor(Math.random() * CHARS.length)];

        /* mouse proximity: 0 = far, 1 = dead-centre */
        const dx   = x - mouseX;
        const dy   = y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const prox = Math.max(0, 1 - dist / MOUSE_R);

        const baseAlpha = Math.random() * 0.45 + 0.1;

        if (prox > 0.02) {
          /* near cursor — interpolate to bright green */
          const g     = Math.floor(120 + prox * 135);        // 120 – 255
          const alpha = Math.min(1, baseAlpha + prox * 0.65);
          ctx.fillStyle = `rgba(40, ${g}, 60, ${alpha})`;
          ctx.fillText(char, x, y);

          /* extra glow layer for the closest chars */
          if (prox > 0.45) {
            ctx.fillStyle = `rgba(130, 255, 140, ${prox * 0.55})`;
            ctx.fillText(char, x, y);
          }
        } else if (isDark) {
          /* dark mode baseline — deep matrix green */
          ctx.fillStyle = `rgba(20, 82, 28, ${baseAlpha})`;
          ctx.fillText(char, x, y);

          /* occasional spontaneous bright flash (~2 % of chars) */
          if (Math.random() < 0.022) {
            ctx.fillStyle = `rgba(111, 255, 111, ${baseAlpha * 1.4})`;
            ctx.fillText(char, x, y);
          }
        } else {
          /* light mode — subdued green, lower alpha so text stays readable */
          ctx.fillStyle = `rgba(15, 100, 35, ${baseAlpha * 0.40})`;
          ctx.fillText(char, x, y);

          if (Math.random() < 0.012) {
            ctx.fillStyle = `rgba(0, 130, 50, ${baseAlpha * 0.55})`;
            ctx.fillText(char, x, y);
          }
        }

        /* advance drop; reset randomly after reaching bottom */
        drops[i]++;
        if (y > H && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -12);
        }
      }
    };

    /* ── event listeners ── */
    const onResize    = () => init();
    const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onMouseOut  = () => { mouseX = -9999; mouseY = -9999; };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) { mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY; }
    };
    const onTouchEnd = () => { mouseX = -9999; mouseY = -9999; };

    /* ── theme-switch observer: hard-clear canvas on class change ── */
    const observer = new MutationObserver(() => {
      const nowDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = nowDark ? '#121212' : '#e4e4e4';
      ctx.fillRect(0, 0, W, H);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    init();
    animId = requestAnimationFrame(draw);

    window.addEventListener('resize',    onResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout',  onMouseOut);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend',  onTouchEnd);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
      window.removeEventListener('resize',    onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout',  onMouseOut);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend',  onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
    />
  );
};
