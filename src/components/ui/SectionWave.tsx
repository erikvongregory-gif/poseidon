type SectionWaveProps = {
  fill?: string
  className?: string
}

/** Wellen-Übergang zwischen Sektionen — custom, kein Baukasten-Template */
export function SectionWave({ fill = 'var(--color-cream)', className = '' }: SectionWaveProps) {
  return (
    <div className={`relative -mt-px leading-[0] ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="animate-section-wave block h-8 w-full md:h-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
