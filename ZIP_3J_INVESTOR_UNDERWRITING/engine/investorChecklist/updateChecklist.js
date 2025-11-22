import { broadcast } from '../../events/eventBus.js';
import { EVENT_TYPES } from '../../events/types.js';

export function updateChecklist(checklist, itemId, status){
  checklist.items = checklist.items.map(i=>i.id===itemId?{...i, status}:i);
  checklist.updatedAt = new Date().toISOString();
  broadcast(EVENT_TYPES.MATCH_CREATED, { checklistId: checklist.id, itemId, status });
  return checklist;
}

export function addInvestorNote(checklist, note){
  const entry = {
    note,
    ts: new Date().toISOString()
  };
  checklist.notes.push(entry);
  checklist.updatedAt = new Date().toISOString();
  return checklist;
}
