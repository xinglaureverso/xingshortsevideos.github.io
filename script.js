function filtrarVideos() {
  const input = document.getElementById('barraPesquisa').value.toLowerCase();
  const cards = document.querySelectorAll('#galeriaVideos .video-card');

  cards.forEach(card => {
    const titulo = card.getAttribute('data-titulo').toLowerCase();
    card.style.display = titulo.includes(input) ? 'block' : 'none';
  });
}
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
window.onload = function() {
  const tema = localStorage.getItem("tema");
  if (tema === "escuro") {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
  }
}
function toggleDarkMode() {
  const isDark = document.getElementById("darkMode").checked;
  
  if (isDark) {
    document.body.style.backgroundColor = "#121212";  // fundo escuro
    document.body.style.color = "#ffffff";             // texto branco
  } else {
    document.body.style.backgroundColor = "#ffffff";  // fundo branco
    document.body.style.color = "#000000";             // texto preto!
  }

  // Você pode salvar no localStorage também
  localStorage.setItem("tema", isDark ? "escuro" : "claro");
}
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  deferredPrompt = e;
});