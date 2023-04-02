import { useMatches } from "@remix-run/react"

export const useRouteData = <T>(routePathname: string): T => {
  const matches = useMatches()
  const data = matches.find((match) => match.pathname === routePathname)?.data
  return data as T
  // e.g.,
  // export const useRootData = () => useRouteData<SerializeFrom<typeof loader>>("/");
}
