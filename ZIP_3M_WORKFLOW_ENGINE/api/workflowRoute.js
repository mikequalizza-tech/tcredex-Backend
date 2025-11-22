import express from 'express';
import { advanceWorkflow } from '../engine/workflow/advance.js';

let projects = [];

const router = express.Router();

router.post('/workflow/init', (req,res)=>{
  const { projectId } = req.body;
  const p = { id: projectId, state: 'intake', updatedAt: new Date().toISOString() };
  projects.push(p);
  return res.json(p);
});

router.post('/workflow/advance', (req,res)=>{
  const { projectId, nextState } = req.body;
  let p = projects.find(pr=>pr.id===projectId);
  p = advanceWorkflow(p, nextState);
  projects = projects.map(pr=>pr.id===projectId?p:pr);
  return res.json(p);
});

router.get('/workflow/:projectId', (req,res)=>{
  const p = projects.find(pr=>pr.id===req.params.projectId);
  return res.json(p);
});

export default router;
