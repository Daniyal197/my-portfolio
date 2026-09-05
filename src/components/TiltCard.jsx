import { useRef } from "react";
import "../TiltCard.css";

export default function TiltCard({ children, className = "", max = 8, glare = true }) {
  const ref = useRef(null);
  const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMouseMove = (e) => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // Horizontal 0 to 1
    const py = (e.clientY - rect.top) / rect.height; // Vertical 0 to 1

    // Fix: Names ko sahi karein (--rx vertical py se, --ry horizontal px se)
    el.style.setProperty("--rx", `${(py - 0.5) * max * 2}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
    
    // Glare position ke liye
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    // Reset tilt
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}