export function generateFixIt(precheck, preview){
  const recs = [];

  if(precheck.distress.flag === "red")
    recs.push("Distress score is low. Consider alternative census tract or emphasize qualifying data (poverty, unemployment, AMI).");

  if(precheck.financial.flag === "red")
    recs.push("Financial feasibility is weak. Strengthen revenue projections, reduce project cost, or add additional funding sources.");

  if(precheck.impact.flag === "red")
    recs.push("Impact narrative is insufficient. Expand on jobs, community outcomes, or partnerships.");

  if(preview?.cdeMatches?.length === 0)
    recs.push("No strong CDE matches detected. Adjust project scope or target CDEs with broader mandates.");

  if(preview?.investorMatches?.length === 0)
    recs.push("No aligned investors found. Enhance impact metrics or financial stability.");

  return recs;
}
