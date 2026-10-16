import * as React from "react"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface ConversationProps extends React.HTMLAttributes<HTMLDivElement> {
  autoScroll?: boolean
  children: React.ReactNode
}

export function Conversation({
  autoScroll = true,
  children,
  className,
  ...props
}: ConversationProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [showScrollBottom, setShowScrollBottom] = React.useState(false)

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior,
      })
    }
  }

  const handleScroll = () => {
    if (!containerRef.current) return
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current
    const isBottom = scrollHeight - scrollTop - clientHeight < 80
    setShowScrollBottom(!isBottom)
  }

  React.useEffect(() => {
    if (autoScroll) {
      scrollToBottom("auto")
    }
  }, [children, autoScroll])

  return (
    <div className="relative h-full w-full">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className={cn("h-full w-full overflow-y-auto px-4 py-6 scroll-smooth", className)}
        {...props}
      >
        <div className="mx-auto max-w-3xl space-y-6">
          {children}
        </div>
      </div>
      {showScrollBottom && (
        <Button
          size="icon"
          variant="outline"
          className="absolute bottom-4 right-8 h-9 w-9 rounded-full shadow-md backdrop-blur-sm"
          onClick={() => scrollToBottom("smooth")}
        >
          <ArrowDown className="h-4 w-4" />
          <span className="sr-only">Scroll to bottom</span>
        </Button>
      )}
    </div>
  )
}
