import express from 'express';
import { computeLiquidityState } from '../engine/liquidityState.js';
import { computeVelocity } from '../engine/velocity.js';
import { marketSignal } from '../engine/marketSignal.js';

const router = express.Router();

router.post('/liquidity', (req, res) => {
  const { allocations, historicalRates, timestamp } = req.body;

  const state = computeLiquidityState(allocations);
  const velocity = computeVelocity(historicalRates, timestamp);
  const signal = marketSignal(allocations, historicalRates, timestamp);

  res.json({ state, velocity, signal });
});

export default router;
