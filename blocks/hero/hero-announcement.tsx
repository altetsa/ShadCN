"use client"

import * as React from "react"
import { ArrowRight, ChevronRight, Sparkles, X, Star, ShieldCheck, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface HeroAnnouncementProps extends React.HTMLAttributes<HTMLElement> {
  announcementBadge?: string
  announcementText?: string
  announcementLink?: string
  title?: string
  titleHighlight?: string
  description?: string
  primaryCtaText?: string
  primaryCtaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export function HeroAnnouncement({
  announcementBadge = "New Launch",
  announcementText = "Enterprise UI Blocks & AI Chat Components are now live",
  announcementLink = "#announcement",
  title = "Design, Build & Ship Faster with",
  titleHighlight = "Production-Ready ShadCN",
  description = "A comprehensive collection of 100+ accessible, customizable UI components and marketing blocks built for high-performance React and Next.js applications.",
  primaryCtaText = "Start Building Free",
  primaryCtaLink = "#get-started",
  secondaryCtaText = "Browse Components",
  secondaryCtaLink = "#components",
  onPrimaryClick,
  onSecondaryClick,
  className,
  ...props
}: HeroAnnouncementProps) {
  const [showAnnouncement, setShowAnnouncement] = React.useState(true)

  return (
    <section className={cn("relative overflow-hidden bg-background text-foreground", className)} {...props}>
      {/* 1. Dismissible Top Announcement Bar */}
      {showAnnouncement && (
        <aside
          role="region"
          aria-label="Announcement"
          className="relative z-20 border-b border-primary/10 bg-muted/60 backdrop-blur-md transition-all duration-300"
        >
          <div className="container mx-auto flex h-10 items-center justify-between px-4 text-xs font-medium">
            <div className="mx-auto flex items-center gap-2">
              <Badge variant="default" className="h-5 px-1.5 text-[10px] uppercase font-bold tracking-wider">
                {announcementBadge}
              </Badge>
              <a
                href={announcementLink}
                className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary hover:underline"
              >
                <span>{announcementText}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <button
              onClick={() => setShowAnnouncement(false)}
              className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Dismiss announcement"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="container mx-auto px-4 py-20 sm:py-28 text-center">
        {/* Sub-badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur-xs">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Next-Gen UI Architecture</span>
        </div>

        {/* Hero Title */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          {title}{" "}
          <span className="bg-gradient-to-r from-primary via-indigo-500 to-sky-500 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        </h1>

        {/* Hero Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
          {description}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-12 px-6 text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            onClick={onPrimaryClick}
            asChild={!onPrimaryClick}
          >
            {onPrimaryClick ? (
              <>
                {primaryCtaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              <a href={primaryCtaLink}>
                {primaryCtaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            )}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-12 px-6 text-sm font-semibold backdrop-blur-xs hover:bg-muted/60"
            onClick={onSecondaryClick}
            asChild={!onSecondaryClick}
          >
            {onSecondaryClick ? (
              secondaryCtaText
            ) : (
              <a href={secondaryCtaLink}>{secondaryCtaText}</a>
            )}
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>Enterprise Grade</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-amber-500" />
            <span>Zero Runtime Overhead</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400">
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
            </div>
            <span>5/5 Developer Rating</span>
          </div>
        </div>

        {/* 16:9 Product Preview Mockup Window */}
        <div className="relative mx-auto mt-16 max-w-5xl rounded-2xl border bg-card/60 p-2 shadow-2xl backdrop-blur-md">
          <div className="flex h-9 items-center justify-between rounded-t-xl border-b bg-muted/40 px-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="w-64 rounded-md border bg-background/80 px-3 py-0.5 text-center text-[11px] font-mono text-muted-foreground">
              https://app.arteefa.com/dashboard
            </div>
            <div className="w-12" />
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-b-xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 text-left text-zinc-100 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-4">
                <span className="text-xs text-zinc-400">Total Revenue</span>
                <p className="mt-1 text-2xl font-bold text-white">$142,890.00</p>
                <span className="text-xs text-emerald-400">+18.2% from last month</span>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-4">
                <span className="text-xs text-zinc-400">Active Subscriptions</span>
                <p className="mt-1 text-2xl font-bold text-white">4,812</p>
                <span className="text-xs text-emerald-400">+124 new today</span>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-4">
                <span className="text-xs text-zinc-400">Conversion Rate</span>
                <p className="mt-1 text-2xl font-bold text-white">4.35%</p>
                <span className="text-xs text-emerald-400">+0.8% increase</span>
              </div>
            </div>

            <div className="mt-6 flex-1 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-center items-center text-center">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <h3 className="mt-3 text-lg font-semibold text-white">Live AI Analytics Canvas</h3>
              <p className="mt-1 max-w-md text-xs text-zinc-400">
                Interactive real-time visual telemetry, streaming chat insights, and component inspector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
