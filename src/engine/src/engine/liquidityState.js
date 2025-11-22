export function computeLiquidityState(allocations) {
  const totalAllocated = allocations.reduce((acc, a) => acc + Number(a.amount), 0);
  const totalAvailable = allocations.reduce((acc, a) => acc + Number(a.ceiling), 0);

  const ratio = totalAllocated / totalAvailable;

  if (ratio > 0.85) return 'tight';
  if (ratio < 0.5) return 'loose';
  return 'balanced';
}
 
