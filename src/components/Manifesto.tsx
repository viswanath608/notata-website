import { Reveal } from "@/components/Reveal"

export function Manifesto() {
  return (
    <section id="manifesto" className="relative scroll-mt-24 py-32 sm:py-44">
      {/* warm center glow behind the statement */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46rem 26rem at 50% 50%, oklch(0.7245 0.1866 48 / 8%), transparent 65%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            03 — Why now
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <blockquote className="mt-8 text-balance text-4xl font-light leading-[1.18] tracking-[-0.01em] text-cream sm:text-6xl">
            Robots can't learn the{" "}
            <em className="font-normal not-italic text-primary">world</em> from
            the web.
          </blockquote>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Language models had the entire internet. Physical AI has almost
            nothing — the real world was never digitized. Embodied models need
            touch, depth, motion and consequence: data that can only be
            gathered, never scraped. That's the frontier we're building for.
          </p>
        </Reveal>
        <Reveal delay={0.36}>
          <div className="mx-auto mt-10 flex w-fit items-center gap-3">
            <span className="h-px w-10 bg-border" />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/70">
              Consent first · Provenance always
            </span>
            <span className="h-px w-10 bg-border" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
