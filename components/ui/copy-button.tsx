import * as React from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

export interface CopyButtonProps extends ButtonProps {
  textToCopy: string
}

export function CopyButton({ textToCopy, className, variant = "outline", size = "icon", ...props }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("relative transition-all", className)}
      onClick={handleCopy}
      {...props}
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-500 transition-transform scale-110" />
      ) : (
        <Copy className="h-4 w-4 transition-transform" />
      )}
      <span className="sr-only">Copy to clipboard</span>
    </Button>
  )
}
