export function getLink(place: string) {
  return `https://www.google.de/maps/place/${encodeURIComponent(
    place
  )},+Karlsruhe`;
}
