export default function FixItPanel({ recommendations }){
  if(!recommendations || recommendations.length===0) return null;

  return (
    <div className="p-4 bg-white border rounded shadow mt-4">
      <h3 className="font-bold mb-2 text-lg">Fix-It Recommendations</h3>
      <ul className="list-disc ml-5">
        {recommendations.map((r,i)=>(
          <li key={i} className="mb-2 text-sm">{r}</li>
        ))}
      </ul>
    </div>
  );
}
