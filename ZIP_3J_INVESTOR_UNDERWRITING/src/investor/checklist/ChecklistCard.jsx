import React from 'react';

export default function ChecklistCard({ checklist, onUpdateItem, onAddNote }){
  return (
    <div className="p-4 bg-white border rounded shadow mb-4">
      <h3 className="font-bold mb-3">Investor Underwriting Checklist</h3>
      {checklist.items.map((item,i)=>(
        <div key={i} className="mb-2">
          <div className="font-semibold">{item.label}</div>
          <div className="text-sm mb-1">Status: {item.status}</div>
          <div className="flex space-x-2">
            <button className="p-1 border" onClick={()=>onUpdateItem(item.id,'pass')}>Pass</button>
            <button className="p-1 border" onClick={()=>onUpdateItem(item.id,'fail')}>Fail</button>
            <button className="p-1 border" onClick={()=>onUpdateItem(item.id,'review')}>Needs Review</button>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <textarea className="border p-2 w-full mb-2" placeholder="Add Investor Note" id="noteBox"></textarea>
        <button className="p-2 border" onClick={()=>{
          const note = document.getElementById('noteBox').value;
          onAddNote(note);
          document.getElementById('noteBox').value='';
        }}>Add Note</button>
      </div>

      <div className="mt-4">
        <h4 className="font-bold mb-2">Notes</h4>
        {checklist.notes.map((n,i)=>(
          <div key={i} className="text-xs mb-1">
            {n.ts}: {n.note}
          </div>
        ))}
      </div>
    </div>
  );
}
