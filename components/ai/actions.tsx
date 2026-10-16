import * as React from "react"
import { Copy, Check, RotateCw, ThumbsUp, ThumbsDown, Share2, Edit2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export interface ActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  onCopy?: () => void
  onRetry?: () => void
  onFeedback?: (type: "up" | "down") => void
  onShare?: () => void
  onEdit?: () => void
  copyContent?: string
}

export function Actions({
  onCopy,
  onRetry,
  onFeedback,
  onShare,
  onEdit,
  copyContent,
  className,
  ...props
}: ActionsProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    if (copyContent) {
      navigator.clipboard.writeText(copyContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    onCopy?.()
  }

  return (
    <TooltipProvider delayDuration={200}>
      <div className={cn("flex items-center gap-1 text-muted-foreground", className)} {...props}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleCopy}>
              {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span className="sr-only">Copy</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">Copy to clipboard</TooltipContent>
        </Tooltip>

        {onRetry && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onRetry}>
                <RotateCw className="h-3.5 w-3.5" />
                <span className="sr-only">Retry</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Regenerate response</TooltipContent>
          </Tooltip>
        )}

        {onFeedback && (
          <>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => onFeedback("up")}>
                  <ThumbsUp className="h-3.5 w-3.5" />
                  <span className="sr-only">Thumbs up</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Helpful</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => onFeedback("down")}>
                  <ThumbsDown className="h-3.5 w-3.5" />
                  <span className="sr-only">Thumbs down</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Unhelpful</TooltipContent>
            </Tooltip>
          </>
        )}

        {onShare && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onShare}>
                <Share2 className="h-3.5 w-3.5" />
                <span className="sr-only">Share</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Share message</TooltipContent>
          </Tooltip>
        )}

        {onEdit && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onEdit}>
                <Edit2 className="h-3.5 w-3.5" />
                <span className="sr-only">Edit message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Edit prompt</TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  )
}
