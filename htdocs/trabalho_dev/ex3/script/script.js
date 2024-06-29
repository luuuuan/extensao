let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let h3soma = document.getElementById('soma');
let h3sub = document.getElementById('subtracao');
let h3div = document.getElementById('divisao');
let h3mult = document.getElementById('multiplicacao');

let btnCalc = document.getElementById('btnCalc');

function operacao(){
    let vlr1 = Number(number1.value);
    let vlr2 = Number(number2.value);
    let soma = vlr1 + vlr2;
    let subtracao = vlr1 - vlr2;
    let divisao = vlr1 / vlr2;
    let multiplicacao = vlr1 * vlr2;
    
    h3soma.textContent = "Valor dos números se somado: " + soma;
    h3sub.textContent = "Valor dos números se subtraido: " + subtracao;
    h3div.textContent = "Valor dos números se dividido: " + divisao;
    h3mult.textContent = "Valor dos números se multiplicado: " + multiplicacao;

}
btnCalc.onclick = function(){
    operacao()
}