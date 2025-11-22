import { pushInApp } from './notifyInApp.js';
import { sendEmail } from './sendEmail.js';
import { NOTIFY_TYPES } from './types.js';

export function notifyUser(user, type, payload){
  const msg = {
    type,
    payload,
    message: buildMessage(type,payload)
  };

  if(user.email){
    sendEmail(user.email, 'tCredex Notification', msg.message);
  }

  return pushInApp(user.id, msg);
}

function buildMessage(type,payload){
  switch(type){
    case NOTIFY_TYPES.WORKFLOW:
      return `Workflow update: ${payload.status || ''}`;
    case NOTIFY_TYPES.RFI:
      return `RFI ${payload.action}: ${payload.rfiId}`;
    case NOTIFY_TYPES.DOC:
      return `Document update in folder ${payload.folder}`;
    case NOTIFY_TYPES.COMMIT:
      return `Commitment update: ${payload.amount}`;
    default:
      return `System notification`;
  }
}
