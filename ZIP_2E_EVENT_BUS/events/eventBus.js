import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 5001 });

let clients = [];

wss.on('connection', (ws)=>{
  clients.push(ws);
  ws.on('close', ()=>{ clients = clients.filter(c=>c!==ws); });
});

export function broadcast(eventType, payload){
  const msg = JSON.stringify({ eventType, payload, ts: Date.now() });
  clients.forEach(c => c.send(msg));
}
