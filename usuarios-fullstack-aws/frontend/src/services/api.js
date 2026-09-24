const API_URL=import.meta.env.VITE_API_URL||'http://localhost:3000';
async function parse(r){ const d=await r.json(); if(!r.ok) throw new Error(d.error||'Error en la solicitud'); return d; }
export const getUsuarios=()=>fetch(`${API_URL}/usuarios`).then(parse);
export const crearUsuario=u=>fetch(`${API_URL}/usuarios`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(u)}).then(parse);
export const actualizarUsuario=(id,u)=>fetch(`${API_URL}/usuarios/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(u)}).then(parse);
export const eliminarUsuario=id=>fetch(`${API_URL}/usuarios/${id}`,{method:'DELETE'}).then(parse);
