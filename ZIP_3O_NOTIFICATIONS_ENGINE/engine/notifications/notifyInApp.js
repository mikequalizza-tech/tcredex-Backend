export let inAppNotifications = [];

export function pushInApp(userId, notification){
  const entry = {
    id: 'notif_' + Date.now(),
    userId,
    ...notification,
    ts: new Date().toISOString(),
    read: false
  };
  inAppNotifications.unshift(entry);
  return entry;
}

export function getNotifications(userId){
  return inAppNotifications.filter(n=>n.userId===userId);
}

export function markRead(id){
  inAppNotifications = inAppNotifications.map(n=>n.id===id?{...n,read:true}:n);
}
