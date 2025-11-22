export function predictMissingDocs(data){
  const required = ["financials","corporateDocs","siteControl"];
  return required.filter(r=>!data[r]);
}
