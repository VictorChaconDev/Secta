const CACHE_EXPIRATION = 3600000;

export function saveToCache(key, data) {
  const cacheData = {
    timestamp: Date.now(),
    data: data,
  };
  localStorage.setItem(key, JSON.stringify(cacheData));
}

export function loadFromCache(key) {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  const { timestamp, data } = JSON.parse(cached);
  if (Date.now() - timestamp > CACHE_EXPIRATION) {
    localStorage.removeItem(key); // Cache expirado, eliminarlo
    return null;
  }
  return data;
}
