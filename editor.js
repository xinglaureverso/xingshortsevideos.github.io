document.getElementById("videoInput").addEventListener("change", function () {
  const file = this.files[0];
  const video = document.getElementById("videoPreview");

  if (file && file.type.startsWith("video/")) {
    const url = URL.createObjectURL(file);
    video.src = url;
    video.load();
  }
});

function aplicarEdicao() {
  const video = document.getElementById("videoPreview");
  const start = parseFloat(document.getElementById("startTime").value) || 0;
  const end = parseFloat(document.getElementById("endTime").value) || video.duration;
  const speed = parseFloat(document.getElementById("speed").value);

  video.currentTime = start;
  video.playbackRate = speed;

  // Pausa automaticamente no tempo final
  video.addEventListener("timeupdate", function () {
    if (video.currentTime >= end) {
      video.pause();
    }
  });
}
function aplicarFiltro(filtro) {
  const video = document.getElementById("videoPreview");
  video.style.filter = filtro;
}

// Botão para aplicar filtro vintage
document.getElementById("btnVintage").addEventListener("click", function () {
  aplicarFiltro("sepia(80%) brightness(1.2)");
});
// Exemplo: aplicar filtro vintage
document.getElementById("btnVintage").addEventListener("click", () => {
  const video = document.getElementById("videoPreview");
  video.style.filter = "sepia(80%) contrast(1.2)";
});
