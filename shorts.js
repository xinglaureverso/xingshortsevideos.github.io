let liked = false;
let sharedCount = 0;

function like() {
  liked = !liked;
  const btn = document.querySelector(".actions button:nth-child(1)");
  btn.textContent = liked ? "❤️ Curtido!" : "❤️";
  alert(liked ? "Você curtiu o vídeo!" : "Você retirou o like!");
}

function share() {
  sharedCount++;
  alert(`Você compartilhou esse vídeo ${sharedCount}x! 🔄`);
}

function toggleComments() {
  const panel = document.getElementById("comments");
  panel.style.display = panel.style.display === "flex" ? "none" : "flex";
}

function addComment() {
  const input = document.getElementById("comment-input");
  const comment = input.value.trim();
  if (comment !== "") {
    const list = document.getElementById("comment-list");
    const newComment = document.createElement("li");
    newComment.innerHTML = `<strong>Você:</strong> ${comment}`;
    list.appendChild(newComment);
    input.value = "";
  }
}
function goBack() {
  window.location.href = "explorar.html"; // coloque aqui o link da sua página principal
}
document.querySelector("video").muted = false;
document.querySelector("video").play();
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
