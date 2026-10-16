import * as React from "react"

export function useMap<K, V>(initialEntries?: readonly (readonly [K, V])[] | null) {
  const [map, setMap] = React.useState<Map<K, V>>(() => new Map(initialEntries))

  const set = React.useCallback((key: K, value: V) => {
    setMap((prev) => {
      const copy = new Map(prev)
      copy.set(key, value)
      return copy
    })
  }, [])

  const remove = React.useCallback((key: K) => {
    setMap((prev) => {
      const copy = new Map(prev)
      copy.delete(key)
      return copy
    })
  }, [])

  const clear = React.useCallback(() => setMap(new Map()), [])

  return [map, { set, remove, clear }] as const
}
