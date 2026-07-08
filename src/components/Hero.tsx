import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NotataMark } from "@/components/NotataMark"

const ease = [0.22, 1, 0.36, 1] as const

function Enter({
  children,
  delay,
  className,
}: {
  children: React.ReactNode
  delay: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  // Parallax: copy drifts up and fades as you scroll past the hero;
  // the constellation sinks the other way for depth.
  const { scrollY } = useScroll()
  const copyY = useSpring(useTransform(scrollY, [0, 700], [0, -110]), {
    stiffness: 90,
    damping: 24,
  })
  const copyOpacity = useTransform(scrollY, [0, 550], [1, 0])
  const markY = useSpring(useTransform(scrollY, [0, 700], [0, 140]), {
    stiffness: 90,
    damping: 24,
  })
  const markRotate = useTransform(scrollY, [0, 900], [0, 14])

  return (
    <section id="top" className="relative overflow-hidden">
      {/* smart-blue tint, top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(44rem 30rem at 88% -4%, oklch(0.55 0.16 252 / 12%), transparent 60%)",
        }}
      />

      {/* the seed constellation — crisp, quiet, drifting */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-[54%] lg:block xl:right-0"
        style={{ y: markY, rotate: markRotate }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease, delay: 0.4 }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <NotataMark className="size-[26rem] text-cream/[0.09] xl:size-[30rem] [&_[fill='#0466C8']]:opacity-70" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: copyY, opacity: copyOpacity }}
        className="relative mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-32 sm:px-10 sm:pt-36"
      >
        <Enter delay={0.1}>
          <div className="glass inline-flex w-fit items-center gap-2.5 rounded-full px-4 py-1.5">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.7rem] sm:tracking-[0.22em]">
              In stealth · Pioneering Physical AI data
            </span>
          </div>
        </Enter>

        <Enter delay={0.25}>
          <h1 className="mt-8 max-w-3xl text-balance text-[2.6rem] font-medium leading-[1.06] tracking-[-0.015em] text-cream sm:text-6xl lg:text-7xl">
            Teaching AI
            <br />
            the{" "}
            <span className="relative inline-block text-azure">
              physical world
              <svg
                className="absolute -bottom-2 left-0 w-full text-azure/60"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6 C 50 1, 150 1, 198 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>
        </Enter>

        <Enter delay={0.4}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Notata is pioneering Physical AI data gathering — real‑world
            motion, sensor and interaction data captured at the source, and
            delivered as raw streams or expertly annotated datasets for
            robotics and embodied AI.
          </p>
        </Enter>

        <Enter delay={0.55} className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-primary px-7 text-base text-primary-foreground shadow-[0_0_40px_-8px_var(--ember)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_56px_-8px_var(--ember)]"
          >
            <a href="#contact">Get in touch</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="glass h-12 rounded-full border-border bg-transparent px-7 text-base text-cream transition-all duration-300 hover:bg-secondary hover:text-cream"
          >
            <a href="#products">
              See what we're building
              <ArrowDown className="ml-1 size-4" />
            </a>
          </Button>
        </Enter>

        <Enter
          delay={0.85}
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="size-3.5" />
            </motion.span>
          </div>
        </Enter>
      </motion.div>
    </section>
  )
}
