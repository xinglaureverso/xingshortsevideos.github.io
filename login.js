function fazerLogin() {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  const senhaSalva = localStorage.getItem(`senha_${usuario}`);

  if (senhaSalva && senha === senhaSalva) {
    localStorage.setItem('usuarioAtual', usuario); // salva quem entrou
    window.location.href = 'perfil.html'; // redireciona para página do usuário
  } else {
    alert('Usuário ou senha incorretos!');
  }

  return false; // evita reload da página
}