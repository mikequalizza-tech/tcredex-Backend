export function computeLiquidityState(allocations) {
  const totalAllocated = allocations.reduce((acc, a) => acc + Number(a.amount || 0), 0);
  const totalAvailable = allocations.reduce((acc, a) => acc + Number(a.ceiling || 0), 0);
  const pressure = totalAvailable > 0 ? totalAllocated / totalAvailable : 0;

  let regime = 'balanced';
  if (pressure > 0.85) regime = 'tight';
  else if (pressure < 0.5) regime = 'loose';

  return { totalAlloc: totalAllocated, totalDemand: totalAvailable, pressure, regime };
}

