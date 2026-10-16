import * as React from "react"

export function useDarkMode(defaultValue?: boolean) {
  const isDarkOS = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
  const [isDarkMode, setDarkMode] = React.useState<boolean>(defaultValue ?? isDarkOS)

  React.useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggle = React.useCallback(() => setDarkMode((prev) => !prev), [])
  const enable = React.useCallback(() => setDarkMode(true), [])
  const disable = React.useCallback(() => setDarkMode(false), [])

  return { isDarkMode, toggle, enable, disable, setDarkMode }
}
