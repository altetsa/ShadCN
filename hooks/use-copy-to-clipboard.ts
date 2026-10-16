import * as React from "react"

export interface UseCopyToClipboardProps {
  timeout?: number
  onCopy?: () => void
}

export function useCopyToClipboard({
  timeout = 2000,
  onCopy,
}: UseCopyToClipboardProps = {}) {
  const [isCopied, setIsCopied] = React.useState(false)

  const copyToClipboard = React.useCallback(
    (value: string) => {
      if (typeof window === "undefined" || !navigator.clipboard?.writeText) {
        return
      }

      if (!value) {
        return
      }

      navigator.clipboard.writeText(value).then(() => {
        setIsCopied(true)
        if (onCopy) {
          onCopy()
        }

        setTimeout(() => {
          setIsCopied(false)
        }, timeout)
      })
    },
    [timeout, onCopy]
  )

  return { isCopied, copyToClipboard }
}
