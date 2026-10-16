import * as React from "react"

export function useScreen() {
  const getScreen = () => {
    if (typeof window === "undefined") return { width: 0, height: 0, availWidth: 0, availHeight: 0 }
    return {
      width: window.screen.width,
      height: window.screen.height,
      availWidth: window.screen.availWidth,
      availHeight: window.screen.availHeight,
    }
  }

  const [screen, setScreen] = React.useState(getScreen)

  React.useEffect(() => {
    const handleResize = () => setScreen(getScreen())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screen
}
