import { Reveal } from "@/components/Reveal"

const steps = [
  {
    n: "01",
    title: "Contribute",
    body: "People share the data they own — photos, voice, footage, documents — through the Notata app.",
  },
  {
    n: "02",
    title: "Verify",
    body: "Every datapoint is checked for consent, quality and provenance before it ever reaches a buyer.",
  },
  {
    n: "03",
    title: "License",
    body: "AI teams license exactly what they need — rights-cleared, documented, and audit-ready from day one.",
  },
  {
    n: "04",
    title: "Earn",
    body: "Contributors get paid whenever their data is licensed. Real ownership, recurring income.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            02 — How it works
          </p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium leading-tight tracking-[-0.01em] text-cream sm:text-5xl">
            From a person's pocket to a model's training run.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="group relative border-t border-border pt-6 transition-colors duration-500 hover:border-primary/50">
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full"
                />
                <span className="font-mono text-xs tracking-[0.25em] text-primary">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-medium text-cream">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
