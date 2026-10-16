import * as React from "react"

export function useDocumentTitle(title: string): void {
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = title
    }
  }, [title])
}
