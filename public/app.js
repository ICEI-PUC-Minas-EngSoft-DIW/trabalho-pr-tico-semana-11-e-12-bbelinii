
const API_URL = 'http://localhost:3000';

async function carregarPostagens() {
  const resp = await fetch(`${API_URL}/postagens`);
  const data = await resp.json();
  window.postagens = data;
  return data;
}

async function criarPostagemAPI(postagem) {
  const resp = await fetch(`${API_URL}/postagens`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postagem)
  });
  return await resp.json();
}

async function atualizarPostagemAPI(id, postagem) {
  const resp = await fetch(`${API_URL}/postagens/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postagem)
  });
  return await resp.json();
}

async function deletarPostagemAPI(id) {
  const resp = await fetch(`${API_URL}/postagens/${id}`, { method: 'DELETE' });
  return resp.ok;
}

window.API_URL = API_URL;
window.carregarPostagens = carregarPostagens;
window.criarPostagemAPI = criarPostagemAPI;
window.atualizarPostagemAPI = atualizarPostagemAPI;
window.deletarPostagemAPI = deletarPostagemAPI;

