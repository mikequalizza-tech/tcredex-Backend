import express from 'express';
import { precheck } from '../engine/precheck/overallPrecheck.js';

const router = express.Router();

router.post('/precheck', (req,res)=>{
  const { data, tractData } = req.body;
  return res.json(precheck(data, tractData));
});

export default router;
