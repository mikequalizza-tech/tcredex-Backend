export function computeLiquidityState({ totalAvailable, totalDemand, commitmentsPending }) {
  const netAvailable = totalAvailable - commitmentsPending;
  const utilizationRatio = totalDemand / netAvailable;

  if (utilizationRatio >= 1.2) return 'tight';
  if (utilizationRatio <= 0.8) return 'loose';
  return 'balanced';
}
