let chaves = [ "Gryffindor", "Ravenclaw", "Hufflepuff","Slytherin"];
let tentativas = [];
function tentativa(){
    let palavra = document.getElementById("password").value;
    if(chaves.indexOf(palavra) != -1){
        window.open("about.html");
    }
    else{
        alert("Digite novamente!");
        tentativa.push(palavra);
        document.getElementById("lista").innerHTML = tentativa;
        document.getElementById("password").value = null;
    }
}
function voltar(){
    window.location.href="index.html";
}