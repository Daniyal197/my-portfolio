import TiltCard from './TiltCard'
import './ProfilePhoto.css'

export default function ProfilePhoto() {
  return (
    <TiltCard className="w-48 sm:w-56 lg:w-64 shrink-0 mx-auto lg:mx-0" max={6}>
      <div className="relative">
        <div className="relative rounded-lg overflow-hidden border border-border-bright bg-surface card-hover">
          <img
            src="/daniyal-photo.jpg"
            alt="Daniyal Ahmed"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="scan-sweep" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 px-3 py-2 font-mono text-[11px] bg-bg/70 backdrop-blur-sm border-t border-border">
            <span className="text-text-dim">$</span>{' '}
            <span className="text-text-muted">whoami</span>{' '}
            <span className="text-primary">✓ verified</span>
          </div>
        </div>

        {/* corner brackets — pulse in sequence around the frame */}
        <span
          className="bracket-pulse absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-primary"
          style={{ animationDelay: '0s' }}
          aria-hidden="true"
        />
        <span
          className="bracket-pulse absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-primary"
          style={{ animationDelay: '0.2s' }}
          aria-hidden="true"
        />
        <span
          className="bracket-pulse absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-primary"
          style={{ animationDelay: '0.4s' }}
          aria-hidden="true"
        />
        <span
          className="bracket-pulse absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-primary"
          style={{ animationDelay: '0.6s' }}
          aria-hidden="true"
        />
      </div>
    </TiltCard>
  )
}