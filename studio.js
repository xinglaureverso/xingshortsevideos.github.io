function criarNovoShort() {
  alert("Abrindo editor de Shorts... 🎬");
  window.location.href = "editor.html"; // ou para uma página específica do editor
}
document.getElementById("videoUpload").addEventListener("change", function () {
  const file = this.files[0];
  const preview = document.getElementById("preview");

  if (file && file.type.startsWith("video/")) {
    const url = URL.createObjectURL(file);
    preview.src = url;
    preview.style.display = "block";
  } else {
    alert("Por favor, selecione um arquivo de vídeo válido.");
    preview.style.display = "none";
  }
});
