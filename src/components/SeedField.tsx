import { useMemo } from "react"

type Seed = {
  x: number // vw
  y: number // vh
  size: number // px
  hue: "cream" | "ember"
  opacity: number
  driftDuration: number
  pulseDuration: number
  delay: number
}

// Deterministic PRNG so the constellation is identical on every visit.
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * The ambient layer: a faint dot-matrix grid with a scattering of fine,
 * crisp seed-dots drifting over it — quiet data points, no blur, no blobs.
 */
export function SeedField({ count = 56 }: { count?: number }) {
  const seeds = useMemo<Seed[]>(() => {
    const rand = mulberry32(1907)
    return Array.from({ length: count }, () => {
      const depth = rand()
      return {
        x: rand() * 100,
        y: rand() * 100,
        size: 1.5 + depth * 2.5,
        hue: rand() < 0.14 ? "ember" : "cream",
        opacity: 0.1 + depth * 0.3,
        driftDuration: 16 + rand() * 22,
        pulseDuration: 5 + rand() * 9,
        delay: -rand() * 30,
      }
    })
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* atmospheric glows — depth without noise */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90rem 60rem at 50% -20%, oklch(0.28 0.045 152 / 70%), transparent 60%)," +
            "radial-gradient(70rem 50rem at 105% 110%, oklch(0.26 0.045 152 / 55%), transparent 60%)," +
            "radial-gradient(50rem 36rem at -10% 70%, oklch(0.24 0.04 152 / 45%), transparent 65%)",
        }}
      />
      {/* dot-matrix texture, fading toward the edges */}
      <div
        className="dot-grid absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(120% 90% at 50% 35%, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 50% 35%, black 30%, transparent 85%)",
        }}
      />
      {/* fine drifting seeds */}
      <div className="absolute inset-0 motion-reduce:hidden">
        {seeds.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${s.x}vw`,
              top: `${s.y}vh`,
              width: s.size,
              height: s.size,
              background:
                s.hue === "ember" ? "oklch(0.7245 0.1866 48)" : "var(--cream)",
              ["--seed-opacity" as string]: s.opacity,
              opacity: s.opacity,
              animation: `seed-drift ${s.driftDuration}s ease-in-out infinite, seed-pulse ${s.pulseDuration}s ease-in-out infinite`,
              animationDelay: `${s.delay}s, ${s.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
