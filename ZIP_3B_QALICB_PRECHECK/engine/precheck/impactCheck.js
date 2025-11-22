export function impactCheck({jobs, communityBenefit}){
  let score = 0;
  if(parseInt(jobs) > 25) score += 40;
  if(communityBenefit?.length > 50) score += 40;
  const flag = score > 60 ? "green" : score > 30 ? "yellow" : "red";
  return {score, flag};
}
