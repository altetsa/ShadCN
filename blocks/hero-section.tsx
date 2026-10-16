import * as React from "react"
import { Button } from "@/components/ui/button"

export interface HeroSectionProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export function HeroSection({
  title = "Build your component library with speed and clarity",
  subtitle = "Crafted with Tailwind CSS, Radix UI, and full shadcn registry compatibility. Fully customizable and production-ready.",
  ctaText = "Get Started",
  ctaHref = "#get-started",
  secondaryCtaText = "GitHub",
  secondaryCtaHref = "https://github.com/altetsa/ShadCN",
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <a href={ctaHref}>{ctaText}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={secondaryCtaHref} target="_blank" rel="noopener noreferrer">
              {secondaryCtaText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
