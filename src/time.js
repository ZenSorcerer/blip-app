export function timeAgo(createdAt, now = Date.now()) {
  const ms = now - new Date(createdAt).getTime();

  if (!Number.isFinite(ms) || ms < 45000) {
    return 'Току-що';
  }

  const minutes = Math.floor(ms / 60000);

  if (minutes < 60) {
    return minutes === 1 ? 'преди 1 мин' : `преди ${minutes} мин`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return hours === 1 ? 'преди 1 час' : `преди ${hours} часа`;
  }

  const days = Math.floor(hours / 24);

  return days === 1 ? 'преди 1 ден' : `преди ${days} дни`;
}

export function timeLeft(expiresAt, now = Date.now()) {
  const ms = new Date(expiresAt).getTime() - now;

  if (!Number.isFinite(ms) || ms <= 0) {
    return 'Изтече';
  }

  const minutes = Math.max(1, Math.ceil(ms / 60000));

  if (minutes < 60) {
    return `още ${minutes} мин`;
  }

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  if (rest === 0) {
    return `още ${hours} ч`;
  }

  return `още ${hours} ч ${rest} мин`;
}
