let auditLog = [];

export function storeAudit(record){
  auditLog.push(record);
}

export function getAudit(){
  return auditLog;
}

export function queryAudit(filterFn){
  return auditLog.filter(filterFn);
}
