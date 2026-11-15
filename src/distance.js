const KM_PER_DEGREE = 111.32;

export function kmBetween(fromLat, fromLng, toLat, toLng) {
  const latDelta = (toLat - fromLat) * Math.PI / 180;
  const lngDelta = (toLng - fromLng) * Math.PI / 180;
  const from = fromLat * Math.PI / 180;
  const to = toLat * Math.PI / 180;
  const haversine = Math.sin(latDelta / 2) ** 2
    + Math.cos(from) * Math.cos(to) * Math.sin(lngDelta / 2) ** 2;

  return 2 * 6371 * Math.asin(Math.min(1, Math.sqrt(haversine)));
}

export function boxForRadius(latitude, longitude, kilometers) {
  const latitudeDelta = (kilometers * 2) / KM_PER_DEGREE;
  const cosine = Math.cos(latitude * Math.PI / 180);
  const longitudeDelta = latitudeDelta / Math.max(0.2, Math.abs(cosine));

  return { latitude, longitude, latitudeDelta, longitudeDelta };
}

export function formatDistance(kilometers) {
  if (kilometers < 1) {
    return `${Math.max(1, Math.round(kilometers * 1000))} м`;
  }

  if (kilometers < 10) {
    const rounded = Math.round(kilometers * 10) / 10;
    return `${rounded} км`;
  }

  return `${Math.round(kilometers)} км`;
}
