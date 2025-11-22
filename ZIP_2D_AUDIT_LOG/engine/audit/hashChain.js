import crypto from 'crypto';

export function hashEntry(entry, prevHash){
  const data = JSON.stringify({entry, prevHash});
  return crypto.createHash('sha256').update(data).digest('hex');
}
