import * as React from "react"
import { Download, Sparkles, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"

export interface AIImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  prompt?: string
  model?: string
  loading?: boolean
}

export function AIImage({
  src,
  alt,
  prompt,
  model = "DALL-E 3",
  loading = false,
  className,
  ...props
}: AIImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false)

  return (
    <div className={cn("group relative overflow-hidden rounded-xl border bg-muted/30 shadow-sm", className)} {...props}>
      {loading || !isLoaded ? (
        <Skeleton className="aspect-square w-full min-w-[280px]" />
      ) : null}

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={cn("aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105", !isLoaded && "hidden")}
      />

      <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-amber-400" />
            {model}
          </span>
          <div className="flex gap-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon" variant="ghost" className="h-7 w-7 text-white hover:bg-white/20">
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl overflow-hidden p-0">
                <img src={src} alt={alt} className="w-full object-contain" />
              </DialogContent>
            </Dialog>
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 text-white hover:bg-white/20"
              onClick={() => window.open(src, "_blank")}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {prompt && (
          <p className="line-clamp-2 text-xs text-zinc-200">
            {prompt}
          </p>
        )}
      </div>
    </div>
  )
}
