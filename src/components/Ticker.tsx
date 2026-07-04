const modalities = [
  "Egocentric Video",
  "Depth & LiDAR",
  "Motion Capture",
  "Tactile & Haptics",
  "Teleoperation Logs",
  "IMU & Telemetry",
  "3D Scene Scans",
  "Manipulation Demos",
  "Spatial Audio",
]

export function Ticker() {
  const row = [...modalities, ...modalities]
  return (
    <section
      aria-label="Physical AI data modalities"
      className="relative border-y border-border/70 py-5"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="flex overflow-hidden">
        <div className="marquee-track flex w-max shrink-0 items-center">
          {row.map((m, i) => (
            <span key={i} className="flex items-center">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground/80">
                {m}
              </span>
              <span className="mx-8 size-1.5 rounded-full bg-primary/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
