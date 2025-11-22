import express from 'express';
import { autoAdvanceProject, autoRouteToCDE, autoInvestorChecklist, autoCloseIfReady } from '../engine/automation/orchestrator.js';

const router = express.Router();

router.post('/automation/advance', (req,res)=>{
  const {project, precheck} = req.body;
  const out = autoAdvanceProject(project, precheck);
  return res.json(out);
});

router.post('/automation/routeCDE', (req,res)=>{
  const {project, matchedCDEs} = req.body;
  return res.json(autoRouteToCDE(project, matchedCDEs));
});

router.post('/automation/investorChecklist', (req,res)=>{
  const {commit} = req.body;
  autoInvestorChecklist(commit);
  return res.json({ok:true});
});

router.post('/automation/close', (req,res)=>{
  const {project, commits} = req.body;
  return res.json(autoCloseIfReady(project, commits));
});

export default router;
