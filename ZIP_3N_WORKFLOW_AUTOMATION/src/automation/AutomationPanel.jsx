export default function AutomationPanel({ logs }){
  return (
    <div className="p-4 bg-white border rounded shadow">
      <h3 className="font-bold mb-3">Automation Activity</h3>
      {logs.map((l,i)=>(
        <div key={i} className="text-xs mb-1">
          {l}
        </div>
      ))}
    </div>
  );
}
