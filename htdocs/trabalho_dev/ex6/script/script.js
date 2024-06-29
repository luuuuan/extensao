let nota = document.querySelector('#nota');
let resultado = document.querySelector('#resultado');
let h3msg = document.querySelector('#msgNota');

//funçao para ver as notas
function ResultadoFinal(){
    let notaFim = Number(nota.value);

    if (notaFim >= 60){
        h3msg.textContent = "Aprovado";
    } else if (notaFim < 60 && notaFim >=40)
        h3msg.textContent = "Precisa fazer prova substitutiva";
    else {
        h3msg.textContent = "Reprovado";
    }
    
}


//chamada da funcao ao clicar no botao
resultado.onclick = function(){
    ResultadoFinal();
}