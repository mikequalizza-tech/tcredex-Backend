import { STATES, canTransition } from './stateMachine.js';
import { broadcast } from '../../events/eventBus.js';
import { EVENT_TYPES } from '../../events/types.js';

export function advanceWorkflow(project, nextState){
  if(!canTransition(project.state, nextState)){
    throw new Error('Invalid transition: '+project.state+' -> '+nextState);
  }
  project.state = nextState;
  project.updatedAt = new Date().toISOString();
  broadcast(EVENT_TYPES.MATCH_CREATED, {projectId:project.id, state:nextState});
  return project;
}
