import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NotataMark } from "@/components/NotataMark"
import { cn } from "@/lib/utils"

const links = [
  { label: "What we build", href: "#products" },
  { label: "How it works", href: "#how" },
  { label: "Why now", href: "#manifesto" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      <div className="w-full max-w-5xl">
        <nav
          className={cn(
            "flex w-full items-center justify-between rounded-lg py-2 pr-2 pl-3 transition-all duration-500 sm:pl-4",
            scrolled || open ? "glass-deep" : "border border-transparent"
          )}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <NotataMark className="size-8 text-cream" />
            <span className="text-lg font-medium tracking-[0.02em] text-cream">
              Notata
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-cream"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="rounded-md bg-primary px-4 text-primary-foreground shadow-[0_0_24px_-6px_var(--ember)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_36px_-6px_var(--ember)] sm:px-5"
            >
              <a href="#contact">Get in touch</a>
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-md text-cream transition-colors duration-300 hover:bg-secondary md:hidden"
            >
              {open ? (
                <X className="size-5" strokeWidth={1.8} />
              ) : (
                <Menu className="size-5" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <div
          className={cn(
            "glass-deep mt-2 grid overflow-hidden rounded-lg transition-all duration-300 md:hidden",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-transparent opacity-0"
          )}
        >
          <div className="min-h-0">
            <div className="flex flex-col p-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-cream"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
