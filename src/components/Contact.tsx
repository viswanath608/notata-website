import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NotataMark } from "@/components/NotataMark"
import { Reveal } from "@/components/Reveal"

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 pb-32 pt-8 sm:pb-40">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <Reveal>
          <div className="glass-deep relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:rounded-[2.5rem] sm:px-16 sm:py-20">
            {/* faint constellation watermark */}
            <NotataMark className="pointer-events-none absolute -bottom-24 -right-20 hidden size-80 rotate-12 text-cream/[0.05] sm:block [&_[fill='#FF7E00']]:opacity-35" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
            />

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              04 — Say hello
            </p>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-medium leading-tight tracking-[-0.01em] text-cream sm:text-5xl">
              We're in stealth — but the door isn't locked.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Building robots or world models and starving for real‑world
              data? Need it raw, or annotated to your spec? We'd love to talk.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-primary px-7 text-base text-primary-foreground shadow-[0_0_40px_-8px_var(--ember)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_56px_-8px_var(--ember)]"
              >
                <a href="mailto:hello@notata.ai">
                  hello@notata.ai
                  <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground/70">
                Replies within 48h
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
