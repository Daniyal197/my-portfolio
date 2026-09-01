import { useEffect, useRef } from "react";

const CHARS = "01$#{}[]<>/\\ABCDEF".split("");

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 15;
    let columns = Math.floor(width / fontSize);
    let drops = new Array(columns).fill(1);

    const styles = getComputedStyle(document.documentElement);
    const bgHex = (styles.getPropertyValue("--color-bg") || "#0a0e12").trim();
    const primaryHex = (styles.getPropertyValue("--color-primary") || "#35e08a").trim();

    const toRgb = (hex) => {
      const clean = hex.replace("#", "");
      const bigint = parseInt(clean, 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    };
    const [br, bgc, bb] = toRgb(bgHex);
    const [pr, pg, pb] = toRgb(primaryHex);

    let frameId;
    let lastTime = 0;
    const frameInterval = 70; // ms — slower = subtler, calmer rain

    function draw(time) {
      frameId = requestAnimationFrame(draw);
      if (time - lastTime < frameInterval) return;
      lastTime = time;

      // fading trail
      ctx.fillStyle = `rgba(${br}, ${bgc}, ${bb}, 0.08)`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const alpha = Math.random() * 0.22 + 0.05; // kept low on purpose
        ctx.fillStyle = `rgba(${pr}, ${pg}, ${pb}, ${alpha})`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    frameId = requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(1);
    };
    window.addEventListener("resize", handleResize);

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frameId);
      } else {
        frameId = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.4 }}
    />
  );
}