export const STATES = {
  INTAKE: 'intake',
  PRECHECK: 'precheck',
  SUBMITTED: 'submitted',
  CDE_REVIEW: 'cde_review',
  RFI: 'rfi',
  CDE_ACCEPT: 'cde_accept',
  INVESTOR_REVIEW: 'investor_review',
  INVESTOR_SOFT: 'investor_soft',
  INVESTOR_HARD: 'investor_hard',
  DEAL_ROOM: 'deal_room',
  READY_TO_CLOSE: 'ready_to_close'
};

export const TRANSITIONS = {
  intake: ['precheck'],
  precheck: ['submitted'],
  submitted: ['cde_review'],
  cde_review: ['rfi','cde_accept'],
  rfi: ['cde_review'],
  cde_accept: ['investor_review','deal_room'],
  investor_review: ['investor_soft','investor_hard'],
  investor_soft: ['investor_hard'],
  investor_hard: ['ready_to_close'],
  deal_room: ['ready_to_close']
};

export function canTransition(from,to){
  return (TRANSITIONS[from]||[]).includes(to);
}
