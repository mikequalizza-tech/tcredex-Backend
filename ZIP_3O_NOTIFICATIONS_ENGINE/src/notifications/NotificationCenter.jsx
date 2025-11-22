export default function NotificationCenter({ notifications, onRead }){
  return (
    <div className="p-4 bg-white border rounded shadow w-80">
      <h3 className="font-bold mb-3">Notifications</h3>
      {notifications.map((n,i)=>(
        <div key={i} className="border-b py-2">
          <div className="text-sm">{n.message}</div>
          <div className="text-xs text-gray-500">{new Date(n.ts).toLocaleString()}</div>
          {!n.read && (
            <button className="mt-1 text-blue-600 text-xs" onClick={()=>onRead(n.id)}>
              Mark Read
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
