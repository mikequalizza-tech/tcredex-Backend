import express from 'express';
import { match } from '../engine/matchEngine.js';
import { explainMatch } from '../engine/reasons/explain.js';
import { appendAudit } from '../audit/append.js';
import { getAudit } from '../audit/auditStore.js';

const router = express.Router();

router.post('/audit/log', (req,res)=>{
  const { project, cde, investor } = req.body;
  const scores = match(project,cde,investor);
  const explanation = explainMatch(project,cde,investor,scores);
  const record = appendAudit(project, cde, investor, explanation);
  return res.json(record);
});

router.get('/audit/query', (req,res)=>{
  const log = getAudit();
  return res.json(log);
});

export default router;
