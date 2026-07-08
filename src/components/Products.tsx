import { Archive, Smartphone, Store } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/Reveal"
import { cn } from "@/lib/utils"

const products = [
  {
    icon: Store,
    name: "Data Marketplace",
    status: "Private beta",
    live: true,
    description:
      "License physical-world datasets your way: RAW — unprocessed sensor streams straight from capture — or fully annotated: labeled, segmented and QA'd by experts, ready for training.",
    footnote: "Raw & annotated · For robotics and embodied-AI teams",
  },
  {
    icon: Smartphone,
    name: "Notata App",
    status: "Coming soon",
    live: false,
    description:
      "Turn your phone into a Physical AI sensor. Capture egocentric video, motion and spatial scans of the everyday world — and get paid every time your data trains a robot.",
    footnote: "iOS & Android",
  },
  {
    icon: Archive,
    name: "Data Archive",
    status: "Coming soon",
    live: false,
    description:
      "A permanent, provenance-tracked library of the physical world — every scene, scan and interaction versioned, auditable and ready for the next decade of embodied models.",
    footnote: "Provenance ledger included",
  },
]

export function Products() {
  return (
    <section id="products" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-azure">
            01 — What we're building
          </p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium leading-tight tracking-[-0.01em] text-cream sm:text-5xl">
            One supply chain for physical‑world data.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12} className="h-full">
              <article
                className={cn(
                  "glass group relative flex h-full flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5",
                  p.live
                    ? "hover:shadow-[0_28px_70px_-28px_oklch(0.55_0.16_252/45%)]"
                    : "hover:shadow-[0_28px_70px_-28px_oklch(0_0_0/60%)]"
                )}
              >
                {/* smart-blue top-edge glow on the live product */}
                {p.live && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent"
                  />
                )}

                <div className="flex items-start justify-between">
                  <div className="glass flex size-12 items-center justify-center rounded-2xl">
                    <p.icon
                      className={cn(
                        "size-5 transition-transform duration-500 group-hover:scale-110",
                        p.live ? "text-azure" : "text-sage"
                      )}
                      strokeWidth={1.6}
                    />
                  </div>
                  <Badge
                    className={cn(
                      "rounded-full border px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em]",
                      p.live
                        ? "border-primary/40 bg-primary/12 text-azure"
                        : "border-border bg-secondary text-muted-foreground"
                    )}
                  >
                    {p.live && (
                      <span className="mr-1.5 inline-block size-1.5 rounded-full bg-primary" />
                    )}
                    {p.status}
                  </Badge>
                </div>

                <h3 className="mt-7 text-xl font-medium text-cream">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <p className="mt-7 border-t border-border/60 pt-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground/70">
                  {p.footnote}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
