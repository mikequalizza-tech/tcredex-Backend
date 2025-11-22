export async function businessLookup(ein){
  if(!ein) return null;
  return {
    name: "Sample Business",
    status: "active",
    sam: { isRegistered: true },
    guidestar: { rating: "Gold" }
  };
}
