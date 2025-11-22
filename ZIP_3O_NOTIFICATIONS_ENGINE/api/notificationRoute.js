import express from 'express';
import { notifyUser } from '../engine/notifications/notifyRouter.js';
import { getNotifications, markRead } from '../engine/notifications/notifyInApp.js';

const router = express.Router();

router.post('/notify/send', (req,res)=>{
  const { user, type, payload } = req.body;
  return res.json(notifyUser(user, type, payload));
});

router.get('/notify/list/:userId', (req,res)=>{
  return res.json(getNotifications(req.params.userId));
});

router.post('/notify/read', (req,res)=>{
  const { id } = req.body;
  markRead(id);
  return res.json({ok:true});
});

export default router;
