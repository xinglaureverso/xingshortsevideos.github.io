// perfil.js
const usuario = localStorage.getItem('usuarioAtual');
document.getElementById('nomeUsuario').innerText = usuario;

// Exibir favoritos do usuário
const favoritos = JSON.parse(localStorage.getItem(`favoritos_${usuario}`)) || [];
const lista = document.getElementById('listaFavoritos');
favoritos.forEach(video => {
  const item = document.createElement('li');
  item.textContent = video;
  lista.appendChild(item);
});
function atualizarFoto() {
  const input = document.getElementById('uploadFoto');
  const file = input.files[0];

  if (file) {
    const leitor = new FileReader();
    leitor.onload = function (e) {
      const img = document.getElementById('fotoPerfil');
      img.src = e.target.result;
      localStorage.setItem('fotoPerfil', e.target.result);
    };
    leitor.readAsDataURL(file);
  }
}

// Carrega foto salva no localStorage (caso exista)
window.onload = function () {
  const fotoSalva = localStorage.getItem('fotoPerfil');
  if (fotoSalva) {
    document.getElementById('fotoPerfil').src = fotoSalva;
  }
};
// Ao carregar o player
const usuario = localStorage.getItem('usuarioAtual');
const videoAtual = {
  titulo: titulo || 'Vídeo sem título',
  arquivo: videoSrc
};

// Recuperar lista existente
let historico = JSON.parse(localStorage.getItem(`historico_${usuario}`)) || [];

// Evita duplicados
const jaAssistiu = historico.some(v => v.arquivo === videoAtual.arquivo);
if (!jaAssistiu) {
  historico.push(videoAtual);
  localStorage.setItem(`historico_${usuario}`, JSON.stringify(historico));
}
// Dentro do onload do perfil
const historico = JSON.parse(localStorage.getItem(`historico_${usuario}`)) || [];
const lista = document.getElementById('listaHistorico');

historico.forEach(video => {
  const item = document.createElement('li');
  item.innerHTML = `<a href="player.html?video=${video.arquivo}&titulo=${encodeURIComponent(video.titulo)}">${video.titulo}</a>`;
  lista.appendChild(item);
});