export default function RoleGate({ role, allowed, children }){
  if(allowed.includes(role)) return children;
  return null;
}
