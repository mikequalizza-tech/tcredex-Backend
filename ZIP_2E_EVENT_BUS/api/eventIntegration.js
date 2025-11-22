import { broadcast } from '../events/eventBus.js';
import { EVENT_TYPES } from '../events/types.js';

export function emitMatchCreated(record){
  broadcast(EVENT_TYPES.MATCH_CREATED, record);
}

export function emitAuditLogged(record){
  broadcast(EVENT_TYPES.AUDIT_LOGGED, record);
}

export function emitDocUploaded(doc){
  broadcast(EVENT_TYPES.DOC_UPLOADED, doc);
}

export function emitAllocationUpdated(update){
  broadcast(EVENT_TYPES.ALLOCATION_UPDATED, update);
}
