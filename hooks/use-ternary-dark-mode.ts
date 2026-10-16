import * as React from "react"

export type TernaryDarkMode = "system" | "dark" | "light"

export function useTernaryDarkMode() {
  const [mode, setMode] = React.useState<TernaryDarkMode>("system")
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    const isDarkOS = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDark = mode === "dark" || (mode === "system" && isDarkOS)
    setIsDarkMode(isDark)

    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [mode])

  return { ternaryDarkMode: mode, setTernaryDarkMode: setMode, isDarkMode }
}
