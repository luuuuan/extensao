let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let btnResultado = document.querySelector('#btnResultado');
let h1resposta = document.querySelector('#h1resposta');


function MaiorMenor(){
    let vlr1 = Number(num1.value);
    let vlr2 = Number(num2.value);

    if (vlr1 > vlr2){
        h1resposta.textContent = "Número " + vlr1 + " é maior que " + vlr2;
    } else if(vlr1 == vlr2){
        h1resposta.textContent = "Número " + vlr1 + " é igual a " + vlr2;
    } else{
        h1resposta.textContent = "Número " + vlr1 + " é menor que " + vlr2;
    }


}

btnResultado.onclick = function(){
    MaiorMenor();
}