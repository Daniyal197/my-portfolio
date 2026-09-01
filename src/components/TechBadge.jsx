const TECH_COLORS = {
  python: '#3776AB',
  c: '#A8B9CC',
  'c++': '#00599C',
  javascript: '#F7DF1E',
  sql: '#4479A1',
  mysql: '#4479A1',
  html: '#E34F26',
  css: '#1572B6',
  flutter: '#02569B',
  'node.js': '#83CD29',
  express: '#8A8A8A',
  react: '#61DAFB',
  git: '#F05032',
  figma: '#A259FF',
  numpy: '#4DABCF',
  scipy: '#8CAAE6',
  pillow: '#F5A623',
  'raw sockets': '#F05C5C',
  'openweathermap api': '#EB6E4B',
}

export default function TechBadge({ label }) {
  const color = TECH_COLORS[label.toLowerCase()] || 'var(--color-primary)'

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2 py-1 rounded border border-border-bright bg-surface-2 text-text-muted">
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
      {label}
    </span>
  )
}