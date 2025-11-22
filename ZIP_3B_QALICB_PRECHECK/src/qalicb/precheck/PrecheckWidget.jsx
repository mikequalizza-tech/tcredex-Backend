export default function PrecheckWidget({ result }){
  if(!result) return null;

  const color = (flag)=> flag==="green"?"text-green-600":flag==="yellow"?"text-yellow-600":"text-red-600";

  return (
    <div className="p-4 bg-white border rounded shadow mt-4">
      <h3 className="font-bold mb-2">Pre-Check Summary</h3>
      <div className={color(result.distress.flag)}>Distress: {result.distress.flag}</div>
      <div className={color(result.impact.flag)}>Impact: {result.impact.flag}</div>
      <div className={color(result.financial.flag)}>Financial: {result.financial.flag}</div>
      <div className={`mt-2 font-bold ${color(result.overall)}`}>Overall: {result.overall}</div>
    </div>
  );
}
