import * as React from "react"
import { Sparkles, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface AnimatedModalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText?: string
  modalTitle?: string
  modalDescription?: string
  children?: React.ReactNode
}

export function AnimatedModalButton({
  buttonText = "Open Modal",
  modalTitle = "Animated Modal",
  modalDescription = "Smooth 3D perspective transition.",
  children,
  className,
  ...props
}: AnimatedModalButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={cn("relative overflow-hidden font-medium transition-all hover:scale-105 active:scale-95", className)}
        {...props}
      >
        <Sparkles className="mr-2 h-4 w-4" />
        {buttonText}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 transition-all">
          <div className="relative w-full max-w-md rounded-2xl border bg-background p-6 shadow-2xl transition-all duration-300 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
            <h3 className="text-lg font-semibold tracking-tight">{modalTitle}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{modalDescription}</p>
            <div className="mt-4">{children}</div>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>Close</Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
