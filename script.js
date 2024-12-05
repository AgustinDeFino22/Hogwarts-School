let casas = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"]; // Lista de palavras mágicas
let tentativasErradas = []; // Registro de tentativas erradas

function tentativa() {
  let palavra = document.getElementById("password").value.trim(); // Captura e remove espaços
  let listaTentativas = document.getElementById("lista"); // Onde exibiremos as tentativas erradas

  if (casas.includes(palavra)) {
    // Palavra correta
    alert("Bem-vindo(a) à sua casa mágica!");
    window.open("about.html");
  } else {
    // Palavra errada
    alert("Senha incorreta! Tente novamente.");
    tentativasErradas.push(palavra);
    listaTentativas.innerHTML = tentativasErradas.join(", ");
    document.getElementById("password").value = ""; // Limpa o campo de senha
  }
}

function voltar() {
  // Retorna para a página inicial
  window.location.href = "index.html";
}
