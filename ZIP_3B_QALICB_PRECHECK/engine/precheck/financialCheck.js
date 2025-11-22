export function financialCheck({revenue, projectCost}){
  const r = parseFloat(revenue)||0;
  const c = parseFloat(projectCost)||0;
  if(c===0) return {ratio:0, flag:"red"};
  const ratio = r/c;
  let flag = "red";
  if(ratio > 1.5) flag="green";
  else if(ratio > 0.8) flag="yellow";
  return {ratio, flag};
}
