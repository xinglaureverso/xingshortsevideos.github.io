function cadastrarUsuario() {
  const novoUsuario = document.getElementById('novoUsuario').value;
  const novaSenha = document.getElementById('novaSenha').value;

  // Salva os dados no localStorage
  localStorage.setItem(`senha_${novoUsuario}`, novaSenha);
  localStorage.setItem('usuarioAtual', novoUsuario); // Já loga o usuário

  alert('Cadastro realizado com sucesso!');
  window.location.href = 'perfil.html'; // redireciona pro perfil

  return false; // evita reload
}