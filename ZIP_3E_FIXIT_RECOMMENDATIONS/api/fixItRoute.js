import express from 'express';
import { generateFixIt } from '../engine/recommendations/fixIt.js';

const router = express.Router();

router.post('/fixit', (req,res)=>{
  const { precheck, preview } = req.body;
  const recs = generateFixIt(precheck||{}, preview||{});
  return res.json({ recommendations: recs });
});

export default router;
