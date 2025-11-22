import express from 'express';
import { marketSignal } from '../engine/marketSignal.js';

const router = express.Router();

router.post('/liquidity', (req, res) => {
  const { allocations, historicalRates, timestamp } = req.body;

  if (!allocations || !historicalRates || !timestamp) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  const signal = marketSignal(allocations, historicalRates, timestamp);
  res.json(signal);
});

export default router;

