import { distressCheck } from './distressCheck.js';
import { impactCheck } from './impactCheck.js';
import { financialCheck } from './financialCheck.js';

export function precheck(data, tractData){
  const distress = distressCheck(tractData);
  const impact = impactCheck(data);
  const financial = financialCheck(data);

  const allFlags = [distress.flag, impact.flag, financial.flag];
  const bad = allFlags.includes("red");
  const good = allFlags.every(f=>f==="green");

  const overall = good ? "green" : bad ? "red" : "yellow";

  return {distress, impact, financial, overall};
}
