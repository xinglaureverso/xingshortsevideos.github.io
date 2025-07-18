// Exemplo simples: alerta ao visitar
window.onload = () => {
  alert("Bem-vindo ao primeiro perfil do xingvideos: user108!");
}
// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
  
  // Botão de seguir
  const btnSeguir = document.getElementById("btnSeguir");
  if (btnSeguir) {
    btnSeguir.addEventListener("click", function () {
      alert("🔥 Você agora segue user108! Prepare-se para o universo Xing. 🚀");
    });
  }

  // Botão de compartilhar
  const btnCompartilhar = document.getElementById("btnCompartilhar");
  if (btnCompartilhar) {
    btnCompartilhar.addEventListener("click", function () {
      const linkPagina = window.location.href;
      navigator.clipboard.writeText(linkPagina)
        .then(() => {
          alert("🔗 Link copiado para a área de transferência! Compartilhe com a tropa Xing!");
        })
        .catch(err => {
          console.error("Erro ao copiar link:", err);
          alert("❌ Não foi possível copiar o link. Tente novamente.");
        });
    });
  }

});