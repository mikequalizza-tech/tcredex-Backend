import express from 'express';
import { filterDealRoomForRole } from '../engine/rbac/dealRoomACL.js';
import { requirePermission } from '../engine/rbac/middleware.js';

let dealRooms = [];

const router = express.Router();

router.get('/dealroom/protected/:projectId', requirePermission('VIEW_DEALROOM'), (req,res)=>{
  const role = req.headers['x-role'] || 'qalicb';
  const dr = dealRooms.find(d=>d.projectId===req.params.projectId);
  return res.json(filterDealRoomForRole(dr, role));
});

export default router;
