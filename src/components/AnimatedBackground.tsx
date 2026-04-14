import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const noise = (x: number, y: number, t: number) => {
      const nx = x * 0.0008;
      const ny = y * 0.0008;
      const v1 = Math.sin(nx * 2.5 + t);
      const v2 = Math.cos(ny * 2.0 - t * 0.8);
      const v3 = Math.sin((nx + ny) * 1.5 + t * 1.2);
      return (v1 + v2 + v3) / 3;
    };

    class Particle {
      id: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      speed: number;
      size: number;
      highlightColor: number[];

      constructor(w: number, h: number, id: number) {
        this.id = id;
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = 0;
        this.vy = 0;
        this.speed = Math.random() * 0.4 + 0.2;

        const rand = Math.random();
        this.size = rand > 0.9 ? 4 : rand > 0.4 ? 3 : 2;

        this.highlightColor = [45, 212, 191];
      }

      update(w: number, h: number, t: number, mouseX: number, mouseY: number) {
        const n = noise(this.x, this.y, t);
        const angle = n * Math.PI * 4;

        let tvx = Math.cos(angle) * this.speed;
        let tvy = Math.sin(angle) * this.speed;

        const regionalThickness = (Math.sin(this.x * 0.002 + t * 1.5) + Math.cos(this.y * 0.002 - t)) * 3.5;

        const perpOffset = Math.sin(this.id * 137.54) * regionalThickness;

        tvx += Math.cos(angle + Math.PI / 2) * perpOffset;
        tvy += Math.sin(angle + Math.PI / 2) * perpOffset;

        let dx = this.x - mouseX;
        let dy = this.y - mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const force = (200 - dist) / 200;
          this.vx += (dx / dist) * force * 2.0;
          this.vy += (dy / dist) * force * 2.0;
        }

        this.vx += (tvx - this.vx) * 0.03;
        this.vy += (tvy - this.vy) * 0.03;

        const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxAllowed = 1.0 + Math.abs(perpOffset) * 0.4;
        if (currentSpeed > maxAllowed) {
          this.vx = (this.vx / currentSpeed) * maxAllowed;
          this.vy = (this.vy / currentSpeed) * maxAllowed;
        }

        this.x += this.vx;
        this.y += this.vy;

        const margin = 50;
        if (this.x < -margin) this.x = w + margin;
        if (this.x > w + margin) this.x = -margin;
        if (this.y < -margin) this.y = h + margin;
        if (this.y > h + margin) this.y = -margin;
      }

      draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
        const gridSize = 4;
        const drawX = Math.round(this.x / gridSize) * gridSize;
        const drawY = Math.round(this.y / gridSize) * gridSize;

        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        let intensity = speed / 1.2;
        intensity = Math.max(0, Math.min(1, Math.pow(intensity, 1.5)));

        const baseColor = isDark ? [55, 55, 55] : [130, 130, 130];
        const activeHighlightColor = isDark ? this.highlightColor : [25, 170, 150];

        const r = Math.floor(baseColor[0] * (1 - intensity) + activeHighlightColor[0] * intensity);
        const g = Math.floor(baseColor[1] * (1 - intensity) + activeHighlightColor[1] * intensity);
        const b = Math.floor(baseColor[2] * (1 - intensity) + activeHighlightColor[2] * intensity);

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.85)`;
        ctx.fillRect(drawX, drawY, this.size, this.size);
      }
    }

    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;

    const init = () => {
      particles = [];
      const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 800);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height, i));
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOut = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');

      time += 0.0008;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(canvas.width, canvas.height, time, mouseX, mouseY);
        p.draw(ctx, isDark);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none transition-opacity duration-300"
    />
  );
};
