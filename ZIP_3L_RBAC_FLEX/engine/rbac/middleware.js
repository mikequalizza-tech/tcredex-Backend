import { PERMISSIONS } from './roles.js';

export function requirePermission(permission){
  return function(req,res,next){
    const role = req.headers['x-role'] || 'qalicb';
    const allowed = PERMISSIONS[permission] || [];
    if(!allowed.includes(role)) return res.status(403).json({error:'Forbidden'});
    next();
  }
}
