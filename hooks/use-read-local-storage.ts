import * as React from "react"

export function useReadLocalStorage<T>(key: string): T | null {
  const [storedValue, setStoredValue] = React.useState<T | null>(null)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const item = window.localStorage.getItem(key)
      setStoredValue(item ? JSON.parse(item) : null)
    } catch (e) {
      console.warn(`Error reading localStorage key "${key}":`, e)
    }
  }, [key])

  return storedValue
}
