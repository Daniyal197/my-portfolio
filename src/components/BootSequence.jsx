import { useEffect, useRef, useState } from "react";
import "./BootSequence.css";

// Lines are typed out one by one, fastest first, to feel like a real boot log.
// Edit these freely — swap in whatever modules/tools you want to reference.
const BOOT_LINES = [
  { text: "initializing session...", delay: 12 },
  { text: "loading kernel modules: net_sniffer.ko, fraud_model.xgb, keylog_watch.ko", delay: 10 },
  { text: "mounting /home/daniyal...", delay: 14 },
  { text: "verifying integrity... sha-256 OK", delay: 12 },
  { text: "establishing secure connection... [OK]", delay: 12 },
];

const PROMPT_LINES = [
  { text: "guest@daniyal:~$ whoami", delay: 22 },
  { text: "daniyal — cybersecurity intern @ arch technologies", delay: 8, accent: true },
  { text: "guest@daniyal:~$ access granted_", delay: 22, accent: true },
];

const ALL_LINES = [...BOOT_LINES, ...PROMPT_LINES];
const SESSION_KEY = "boot-sequence-played";

export default function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [typedChars, setTypedChars] = useState(0);
  const [done, setDone] = useState(false);
  const containerRef = useRef(null);

  const skip = () => {
    setDone(true);
    sessionStorage.setItem(SESSION_KEY, "1");
    onComplete?.();
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyPlayed = sessionStorage.getItem(SESSION_KEY);

    if (reduceMotion || alreadyPlayed) {
      skip();
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId;

    const typeNext = () => {
      if (lineIndex >= ALL_LINES.length) {
        timeoutId = setTimeout(skip, 700);
        return;
      }
      const current = ALL_LINES[lineIndex];
      charIndex += 1;
      setTypedChars(charIndex);

      if (charIndex >= current.text.length) {
        setVisibleLines((prev) => [...prev, current]);
        lineIndex += 1;
        charIndex = 0;
        setTypedChars(0);
        timeoutId = setTimeout(typeNext, 120);
      } else {
        timeoutId = setTimeout(typeNext, current.delay);
      }
    };

    timeoutId = setTimeout(typeNext, 300);

    const handleKey = () => skip();
    window.addEventListener("keydown", handleKey);
    containerRef.current?.addEventListener("click", handleKey);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("keydown", handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (done) return null;

  const currentLine = ALL_LINES[visibleLines.length];
  const progress = Math.round((visibleLines.length / ALL_LINES.length) * 100);

  return (
    <div ref={containerRef} className="boot-overlay" role="status" aria-live="polite">
      <div className="boot-scanlines" aria-hidden="true" />
      <div className="boot-content">
        {visibleLines.map((line, i) => (
          <p key={i} className={line.accent ? "boot-line boot-line--accent" : "boot-line"}>
            {line.text}
          </p>
        ))}
        {currentLine && (
          <p className={currentLine.accent ? "boot-line boot-line--accent" : "boot-line"}>
            {currentLine.text.slice(0, typedChars)}
            <span className="boot-cursor">_</span>
          </p>
        )}
        <div className="boot-progress">
          <div className="boot-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <button className="boot-skip" onClick={skip}>
        skip intro →
      </button>
    </div>
  );
}