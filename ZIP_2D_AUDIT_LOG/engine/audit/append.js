import { hashEntry } from './hashChain.js';
import { storeAudit, getAudit } from './auditStore.js';

export function appendAudit(project, cde, investor, explanation){
  const prev = getAudit().slice(-1)[0];
  const prevHash = prev ? prev.hash : null;

  const entry = {
    project,
    cde,
    investor,
    explanation,
    timestamp: new Date().toISOString()
  };

  const hash = hashEntry(entry, prevHash);

  const record = { ...entry, hash, prevHash };
  storeAudit(record);
  return record;
}
