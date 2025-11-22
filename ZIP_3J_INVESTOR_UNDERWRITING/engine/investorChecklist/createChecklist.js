export function createChecklist(projectId, investorId){
  return {
    id: 'chk_' + Date.now(),
    projectId,
    investorId,
    items: [
      { id:'financials', label:'Financials Verified', status:'pending' },
      { id:'governance', label:'Governance Review', status:'pending' },
      { id:'impact', label:'Impact Metrics Validated', status:'pending' },
      { id:'compliance', label:'Compliance Screening', status:'pending' }
    ],
    notes: [],
    createdAt: new Date().toISOString(),
    updatedAt: null
  };
}
