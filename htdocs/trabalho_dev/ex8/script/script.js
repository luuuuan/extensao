let num = document.querySelector('#num');
let btnResultado = document.querySelector('#btnResultado');
let h3msg = document.querySelector('#h3msg');

function resultado(){
    let number = Number(num.value);
    if(number % 2 == 0){
        h3msg.textContent = "Número " + number + " é par";

    }else{
        h3msg.textContent = "Número " + number + " é ímpar";
    }


}

btnResultado.onclick = function(){
    resultado();
}