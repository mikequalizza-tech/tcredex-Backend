import { computeLiquidityState } from './liquidityState.js';
import { computeVelocity } from './velocity.js';

export function marketSignal(allocations, historicalRates, timestamp) {
  const state = computeLiquidityState(allocations);
  const velocity = computeVelocity(historicalRates, timestamp);

  const signal = (state.regime === 'tight' && velocity > 0.8)
    ? 'overheated'
    : (state.regime === 'loose' && velocity < 0.2)
    ? 'cold'
    : 'neutral';

  return {
    state: {
      totalAlloc: state.totalAlloc,
      totalDemand: state.totalDemand,
      pressure: state.pressure,
      regime: state.regime
    },
    velocity: Number(velocity.toFixed(4)),
    signal
  };
}
