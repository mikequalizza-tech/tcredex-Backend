export function computeVelocity(historicalRates, currentTimestamp) {
  const recent = historicalRates.filter(r => r.timestamp >= currentTimestamp - 30 * 24 * 60 * 60 * 1000); // last 30 days
  const deltas = recent.map((r, i, arr) => {
    if (i === 0) return 0;
    return r.rate - arr[i - 1].rate;
  });
  const avgDelta = deltas.reduce((a, b) => a + b, 0) / deltas.length;
  return Math.min(Math.max(avgDelta, 0), 1);
}
