export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[12px] text-text-dim">
        <p>© {new Date().getFullYear()} Daniyal Ahmed. Built from scratch, naturally.</p>
        <p>DanTech</p>
      </div>
    </footer>
  )
}
