document.getElementById("formPerfil").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const bio = document.getElementById("bio").value.trim();
  const avatarFile = document.getElementById("avatar").files[0];

  // Exibir preview
  document.getElementById("nomePreview").textContent = `👤 ${nome}`;
  document.getElementById("bioPreview").textContent = bio;

  if (avatarFile) {
    const avatarURL = URL.createObjectURL(avatarFile);
    document.getElementById("avatarPreview").src = avatarURL;
  }

  document.getElementById("previewPerfil").style.display = "block";

  // Opcional: salvar localmente
  const perfil = { nome, bio };
  localStorage.setItem("perfilXingStudio", JSON.stringify(perfil));
});
