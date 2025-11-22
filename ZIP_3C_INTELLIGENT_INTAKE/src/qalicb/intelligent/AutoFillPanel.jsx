export default function AutoFillPanel({ data }){
  if(!data) return null;
  return (
    <div className="p-4 bg-white border rounded shadow mt-4">
      <h3 className="font-bold mb-2">Auto-Fill Data</h3>
      <pre className="text-xs">{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}
