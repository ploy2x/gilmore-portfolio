import type { CSSProperties, ReactNode } from 'react'

type MarqueeProps = {
  children: ReactNode
  /** Scroll direction. Default 'left'. */
  direction?: 'left' | 'right'
  /** Seconds for one full loop. Lower = faster. Default 42. */
  durationSec?: number
  /** Accessible name for the strip. */
  label?: string
  className?: string
}

/**
 * CSS-only marquee. The track holds the content twice; the animation shifts it
 * -50%, so the second copy lands exactly where the first began — a seamless
 * loop. It pauses on hover/focus, and `prefers-reduced-motion` (handled in
 * index.css) drops the animation entirely and lets the first copy wrap.
 *
 * The cloned copy is aria-hidden so screen readers and the tab order see the
 * content once.
 */
export function Marquee({
  children,
  direction = 'left',
  durationSec = 42,
  label,
  className = '',
}: MarqueeProps) {
  return (
    <div
      className={`marquee ${className}`}
      data-dir={direction}
      style={{ '--marquee-dur': `${durationSec}s` } as CSSProperties}
      role="group"
      aria-label={label}
    >
      <div className="marquee__track">
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" data-clone aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
