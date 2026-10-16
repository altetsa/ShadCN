import * as React from "react"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export interface InlineCitationProps extends React.HTMLAttributes<HTMLSpanElement> {
  index: number
  title: string
  url: string
  snippet?: string
  siteName?: string
}

export function InlineCitation({
  index,
  title,
  url,
  snippet,
  siteName,
  className,
  ...props
}: InlineCitationProps) {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <span
          className={cn(
            "mx-0.5 inline-flex h-4 w-4 cursor-pointer select-none items-center justify-center rounded-full bg-muted text-[10px] font-bold text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground",
            className
          )}
          {...props}
        >
          {index}
        </span>
      </HoverCardTrigger>
      <HoverCardContent align="start" className="w-72 p-3 text-xs">
        <a href={url} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="font-semibold text-foreground group-hover:underline">{siteName || new URL(url).hostname}</span>
            <ExternalLink className="h-3 w-3" />
          </div>
          <p className="font-medium text-foreground">{title}</p>
          {snippet && <p className="line-clamp-2 text-muted-foreground">{snippet}</p>}
        </a>
      </HoverCardContent>
    </HoverCard>
  )
}
