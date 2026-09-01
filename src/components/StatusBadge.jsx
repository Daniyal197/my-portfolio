export default function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-border-bright bg-surface font-mono text-[12px] text-text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:bg-surface-2 hover:scale-105 hover:shadow-[0_0_16px_var(--color-primary-glow)] cursor-default">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
      <span>Available for Opportunities</span>
    </div>
  )
}