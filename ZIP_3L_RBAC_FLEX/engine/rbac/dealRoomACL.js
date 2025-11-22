export function filterDealRoomForRole(dealRoom, role){
  if(role==='admin') return dealRoom;
  // Flexible model: investors can see everything except internal notes
  if(role==='investor'){
    return {
      ...dealRoom,
      folders: dealRoom.folders.filter(f=>!f.name.includes('Internal'))
    };
  }
  // QALICB & CDE see all
  return dealRoom;
}
