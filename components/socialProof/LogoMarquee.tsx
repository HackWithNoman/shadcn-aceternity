"use client"
import { useRef } from "react"

const logos = [
  { name: "Vercel", bg: "#000", text: "#fff", letter: "V" },
  { name: "Stripe", bg: "#635BFF", text: "#fff", letter: "S" },
  { name: "Linear", bg: "#5E6AD2", text: "#fff", letter: "L" },
  { name: "Notion", bg: "#000", text: "#fff", letter: "N" },
  { name: "Figma", bg: "#F24E1E", text: "#fff", letter: "F" },
  { name: "Supabase", bg: "#3ECF8E", text: "#fff", letter: "S" },
  { name: "Resend", bg: "#000", text: "#fff", letter: "R" },
  { name: "Clerk", bg: "#6C47FF", text: "#fff", letter: "C" },
]

export function LogoMarquee() {
  const doubled = [...logos, ...logos]

  return (
    <div className="w-full overflow-hidden py-8">
      <p className="mb-6 text-center text-xs tracking-widest text-muted-foreground uppercase">
        Trusted by teams at
      </p>
      <div className="flex w-max animate-marquee hover:paused">
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="mx-4 flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2"
          >
            <div
              className="flex h-5 w-5 items-center justify-center rounded text-[11px] font-medium"
              style={{ background: logo.bg, color: logo.text }}
            >
              {logo.letter}
            </div>
            <span className="text-sm font-medium whitespace-nowrap text-muted-foreground">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
