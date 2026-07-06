/** Dezente Meeres-Atmosphäre & Dreizack — Poseidon-Motiv im Hero */
export function PoseidonAmbience() {
  return (
    <>
      <div className="poseidon-shimmer pointer-events-none absolute inset-0" aria-hidden />
      <svg
        className="poseidon-trident pointer-events-none absolute -right-6 top-1/2 hidden h-[min(68vh,600px)] w-auto text-cream md:block"
        viewBox="0 0 120 280"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M60 12 V52" />
        <path d="M60 12 Q28 18 20 50" />
        <path d="M60 12 Q92 18 100 50" />
        <path d="M20 50 H100" />
        <path d="M60 50 V268" />
        <path d="M48 268 H72" />
      </svg>
    </>
  )
}
