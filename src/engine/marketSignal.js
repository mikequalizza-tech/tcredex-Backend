import { computeLiquidityState } from './liquidityState.js';
import { computeVelocity } from './velocity.js';

export function marketSignal(allocations, historicalRates, timestamp) {
  const state = computeLiquidityState(allocations);
  const velocity = computeVelocity(historicalRates, timestamp);

  if (state === 'tight' && velocity > 0.8) return 'overheated';
  if (state === 'loose' && velocity < 0.2) return 'cold';
  return 'neutral';
}
