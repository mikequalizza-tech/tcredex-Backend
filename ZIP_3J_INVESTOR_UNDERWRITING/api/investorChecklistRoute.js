import express from 'express';
import { createChecklist } from '../engine/investorChecklist/createChecklist.js';
import { updateChecklist, addInvestorNote } from '../engine/investorChecklist/updateChecklist.js';

let checklistStore = [];

const router = express.Router();

router.post('/investor/checklist/create', (req,res)=>{
  const { projectId, investorId } = req.body;
  const chk = createChecklist(projectId, investorId);
  checklistStore.push(chk);
  return res.json(chk);
});

router.post('/investor/checklist/update', (req,res)=>{
  const { checklistId, itemId, status } = req.body;
  let chk = checklistStore.find(c=>c.id===checklistId);
  chk = updateChecklist(chk, itemId, status);
  checklistStore = checklistStore.map(c=>c.id===checklistId?chk:c);
  return res.json(chk);
});

router.post('/investor/checklist/note', (req,res)=>{
  const { checklistId, note } = req.body;
  let chk = checklistStore.find(c=>c.id===checklistId);
  chk = addInvestorNote(chk, note);
  checklistStore = checklistStore.map(c=>c.id===checklistId?chk:c);
  return res.json(chk);
});

router.get('/investor/checklist/:projectId', (req,res)=>{
  const out = checklistStore.filter(c=>c.projectId===req.params.projectId);
  return res.json(out);
});

export default router;
