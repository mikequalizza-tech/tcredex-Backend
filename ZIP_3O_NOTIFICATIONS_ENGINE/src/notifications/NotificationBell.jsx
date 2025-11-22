export default function NotificationBell({ count }){
  return (
    <div className="relative">
      <div className="text-2xl">🔔</div>
      {count>0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
          {count}
        </div>
      )}
    </div>
  );
}
