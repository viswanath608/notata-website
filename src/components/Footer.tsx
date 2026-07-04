import { NotataMark } from "@/components/NotataMark"

export function Footer() {
  return (
    <footer className="relative border-t border-border/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <NotataMark className="size-7 text-cream/80" />
          <span className="text-base font-medium tracking-[0.02em] text-cream/90">
            Notata
          </span>
        </a>

        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground/70">
          © 2026 Notata · In stealth mode
        </p>

        <a
          href="mailto:hello@notata.ai"
          className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-primary"
        >
          hello@notata.ai
        </a>
      </div>
    </footer>
  )
}
