import * as React from "react"
import { BookOpen, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SourceItem {
  title: string
  url: string
  snippet?: string
  siteName?: string
}

export interface SourcesProps extends React.HTMLAttributes<HTMLDivElement> {
  sources: SourceItem[]
}

export function Sources({ sources, className, ...props }: SourcesProps) {
  if (!sources || sources.length === 0) return null

  return (
    <div className={cn("my-3 space-y-2", className)} {...props}>
      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <BookOpen className="h-3.5 w-3.5" />
        <span>Used {sources.length} sources</span>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {sources.map((source, i) => (
          <a
            key={i}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-lg border bg-card p-2.5 text-xs transition-colors hover:border-primary/50 hover:bg-muted/40"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-medium text-muted-foreground">
                {source.siteName || new URL(source.url).hostname}
              </span>
              <p className="line-clamp-1 font-medium text-card-foreground group-hover:underline">
                {source.title}
              </p>
            </div>
            <div className="mt-2 flex items-center justify-end text-muted-foreground group-hover:text-foreground">
              <ExternalLink className="h-3 w-3" />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
