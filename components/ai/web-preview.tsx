import * as React from "react"
import { ExternalLink, Laptop, RefreshCw, Smartphone, Tablet } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface WebPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string
  title?: string
}

export function WebPreview({ url, title, className, ...props }: WebPreviewProps) {
  const [viewport, setViewport] = React.useState<"desktop" | "tablet" | "mobile">("desktop")
  const [key, setKey] = React.useState(0)

  const reload = () => setKey((k) => k + 1)

  return (
    <div className={cn("flex flex-col overflow-hidden rounded-xl border bg-background shadow-md", className)} {...props}>
      <div className="flex h-11 items-center justify-between border-b bg-muted/40 px-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={reload}>
            <RefreshCw className="h-3.5 w-3.5" />
          </Button>
          <span className="font-medium text-foreground">{title || url}</span>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant={viewport === "desktop" ? "secondary" : "ghost"}
            size="icon"
            className="h-7 w-7"
            onClick={() => setViewport("desktop")}
          >
            <Laptop className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant={viewport === "tablet" ? "secondary" : "ghost"}
            size="icon"
            className="h-7 w-7"
            onClick={() => setViewport("tablet")}
          >
            <Tablet className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant={viewport === "mobile" ? "secondary" : "ghost"}
            size="icon"
            className="h-7 w-7"
            onClick={() => setViewport("mobile")}
          >
            <Smartphone className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => window.open(url, "_blank")}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-muted/20 p-4">
        <div
          className={cn(
            "transition-all duration-300 overflow-hidden rounded-lg border bg-white shadow-sm",
            viewport === "desktop" && "w-full h-[500px]",
            viewport === "tablet" && "w-[768px] h-[500px]",
            viewport === "mobile" && "w-[375px] h-[500px]"
          )}
        >
          <iframe key={key} src={url} className="h-full w-full border-0" title="Preview" />
        </div>
      </div>
    </div>
  )
}
