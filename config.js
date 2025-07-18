function goBack() {
  window.location.href = "explorar.html"; // Ou para onde você quiser voltar
}

function toggleDarkMode() {
  const isDark = document.getElementById("darkMode").checked;
  localStorage.setItem("tema", isDark ? "escuro" : "claro");

  document.body.style.backgroundColor = isDark ? "#121212" : "#ffffff";
  document.body.style.color = isDark ? "#ffffff" : "#000000";
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
