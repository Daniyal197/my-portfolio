import { useEffect, useRef, useState } from "react";
import "./CommandPalette.css";

// Edit this list to match your actual section ids and links.
// "action: scroll" jumps to the given id, "action: link" opens a URL.
const COMMANDS = [
  { command: "cd ~/about", label: "go to about", action: "scroll", target: "about" },
  { command: "cd ~/skills", label: "go to skills", action: "scroll", target: "skills" },
  { command: "cd ~/projects", label: "go to projects", action: "scroll", target: "projects" },
  { command: "cd ~/experience", label: "go to experience", action: "scroll", target: "experience" },
  { command: "cd ~/contact", label: "go to contact", action: "scroll", target: "contact" },
  { command: "open github", label: "open github profile", action: "link", target: "https://github.com/Daniyal197" },
  { command: "curl resume.pdf", label: "download resume", action: "link", target: "/resume.pdf" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const filtered = COMMANDS.filter(
    (c) =>
      c.command.toLowerCase().includes(query.toLowerCase()) ||
      c.label.toLowerCase().includes(query.toLowerCase())
  );

  const close = () => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  };

  const runCommand = (cmd) => {
    if (!cmd) return;
    if (cmd.action === "scroll") {
      document.getElementById(cmd.target)?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd.action === "link") {
      window.open(cmd.target, "_blank", "noopener,noreferrer");
    }
    close();
  };

  useEffect(() => {
    const handleGlobalKey = (e) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const modifierPressed = isMac ? e.metaKey : e.ctrlKey;
      if (modifierPressed && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") close();
    };
    // Lets a visible button (e.g. in Nav) open the palette too —
    // dispatch this event from anywhere: window.dispatchEvent(new Event("cmdk:open"))
    const handleCustomOpen = () => setOpen(true);

    window.addEventListener("keydown", handleGlobalKey);
    window.addEventListener("cmdk:open", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleGlobalKey);
      window.removeEventListener("cmdk:open", handleCustomOpen);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) return null;

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runCommand(filtered[activeIndex]);
    }
  };

  return (
    <div className="cmdk-overlay" onClick={close}>
      <div className="cmdk-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cmdk-input-row">
          <span className="cmdk-prompt">guest@daniyal:~$</span>
          <input
            ref={inputRef}
            className="cmdk-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type a command..."
            aria-label="Command palette"
          />
        </div>
        <ul className="cmdk-list">
          {filtered.length === 0 && <li className="cmdk-empty">no matching command</li>}
          {filtered.map((cmd, i) => (
            <li
              key={cmd.command}
              className={i === activeIndex ? "cmdk-item cmdk-item--active" : "cmdk-item"}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => runCommand(cmd)}
            >
              <span className="cmdk-command">{cmd.command}</span>
              <span className="cmdk-label">{cmd.label}</span>
            </li>
          ))}
        </ul>
        <div className="cmdk-hint">↑↓ navigate · enter select · esc close</div>
      </div>
    </div>
  );
}