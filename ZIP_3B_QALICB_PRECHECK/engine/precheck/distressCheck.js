export function distressCheck(tractData){
  if(!tractData) return {score:0, flag:"unknown"};
  const { povertyRate, medianIncomePct } = tractData;
  let score = 0;
  if(povertyRate > 30) score += 40;
  if(medianIncomePct < 60) score += 40;
  const flag = score > 60 ? "green" : score > 30 ? "yellow" : "red";
  return {score, flag};
}
