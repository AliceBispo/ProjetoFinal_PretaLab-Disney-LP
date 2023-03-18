/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases usando uma estrutura de condição:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const note2 = parseFloat(document.getElementById("nota2").value);
    const note3 = parseFloat(document.getElementById("nota3").value);
    const note4 = parseFloat(document.getElementById("nota4").value);
  
    let mensagem = "";
    // evite mexer no código acima!
  
    const calcularMedia = (nota1 + note2 + note3 + note4)/4;
    
    if(nota1 && note2 && note3 && note4 <0 ){
        alert ("A nota informada é menor que 0. Insira uma nota que seja maior ou igual que 0.")
    } else if (nota1 || note2 || note3 || note4 >10){
        alert ("A nota informada é maior que 10. Insira uma nota que seja menor ou igual que 10.")
    } else {
    if (calcularMedia == 0){
        alert("Infelizmente você zerou a prova :( ");
    } else if (calcularMedia > 0 && calcularMedia < 3 ){
        alert( "Caramba, deu ruim, você obteve media  " + calcularMedia + ".Estude mais e tente novamente!");
    } else if (calcularMedia > 3 && calcularMedia < 6){
        alert( "Você obteve media  " + calcularMedia + ".Falta pouco para a média.");
    } else if (calcularMedia >= 6 && calcularMedia <= 7){
        alert("Você está na média com  " + calcularMedia + ".");
    } else if (calcularMedia > 7 && calcularMedia <10){
        alert("Notão! Sua média é  " + calcularMedia + "!");
    } else{
        alert ("Hoje é seu aniversário? Pq você ta de parabéns! 10 de média")
    }
    }
  
    // evite mexer na linha de código abaixo!
    document.getElementById("situacaoAluno").innerHTML = mensagem;
  }
  

