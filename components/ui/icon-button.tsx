import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

export interface IconButtonProps extends ButtonProps {
  glow?: boolean
}

export function IconButton({ glow = false, className, children, ...props }: IconButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "relative rounded-full transition-transform active:scale-95",
        glow && "hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
