export function computeVelocity(historicalRates, currentTimestamp) {
  const sorted = historicalRates
    .filter(e => e.timestamp < currentTimestamp)
    .sort((a, b) => a.timestamp - b.timestamp);

  if (sorted.length < 2) return 0;

  const last = sorted[sorted.length - 1];
  const prev = sorted[sorted.length - 2];
  const timeDelta = (last.timestamp - prev.timestamp) / (1000 * 60 * 60 * 24);

  if (timeDelta <= 0) return 0;
  return (last.rate - prev.rate) / timeDelta;
}
