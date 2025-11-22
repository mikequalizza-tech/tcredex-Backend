import { transitionProject } from '../workflow/transitionEngine.js';
import { transitionCDE } from '../workflow/transitionEngine.js';
import { transitionInvestor } from '../workflow/transitionEngine.js';
import { broadcast } from '../../events/eventBus.js';
import { EVENT_TYPES } from '../../events/types.js';

export function autoAdvanceProject(project, precheck){
  if(project.state==='intake' && precheck.overall!=='red'){
    project.state = transitionProject(project.state,'submit');
    broadcast(EVENT_TYPES.MATCH_CREATED,{type:'auto-precheck-pass',projectId:project.id});
  }
  if(project.state==='precheck' && precheck.overall==='green'){
    project.state = transitionProject(project.state,'pass');
    broadcast(EVENT_TYPES.MATCH_CREATED,{type:'auto-activate',projectId:project.id});
  }
  return project;
}

export function autoRouteToCDE(project, matchedCDEs){
  return matchedCDEs.map(c=>({
    cdeId:c.id,
    state:'pending-review'
  }));
}

export function autoInvestorChecklist(commit){
  if(commit.status==='soft'){
    broadcast(EVENT_TYPES.MATCH_CREATED,{type:'auto-checklist-create',commitId:commit.id});
  }
}

export function autoCloseIfReady(project, commits){
  const hard = commits.filter(c=>c.status==='hard');
  const total = hard.reduce((a,b)=>a+b.amount,0);
  if(total >= (project.projectCost||0)){
    project.state = transitionProject(project.state,'startClosing');
    broadcast(EVENT_TYPES.MATCH_CREATED,{type:'auto-start-closing',projectId:project.id});
  }
  return project;
}
