export default function WorkflowBadge({ state }){
  const colors = {
    intake: 'bg-gray-200',
    precheck: 'bg-blue-200',
    submitted: 'bg-indigo-200',
    cde_review: 'bg-yellow-200',
    rfi: 'bg-red-200',
    cde_accept: 'bg-green-200',
    investor_review: 'bg-purple-200',
    investor_soft: 'bg-orange-200',
    investor_hard: 'bg-green-400',
    deal_room: 'bg-blue-300',
    ready_to_close: 'bg-green-600 text-white'
  };
  return (
    <span className={"px-3 py-1 rounded text-sm "+colors[state]}>
      {state.replace('_',' ').toUpperCase()}
    </span>
  );
}
