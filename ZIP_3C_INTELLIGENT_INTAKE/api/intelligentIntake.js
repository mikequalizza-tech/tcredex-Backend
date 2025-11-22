import express from 'express';
import { businessLookup } from '../engine/intake/autofill/businessLookup.js';
import { tractLookup } from '../engine/intake/tractLookup.js';
import { predictMissingDocs } from '../engine/intake/docPredictions.js';

const router = express.Router();

router.post('/intake/autofill', async (req,res)=>{
  const { ein, address } = req.body;
  const business = await businessLookup(ein);
  const tract = await tractLookup(address);
  return res.json({business, tract});
});

router.post('/intake/docCheck', (req,res)=>{
  const missing = predictMissingDocs(req.body);
  return res.json({missing});
});

export default router;
