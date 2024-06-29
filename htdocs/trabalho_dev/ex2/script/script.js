let pessoas = document.getElementById('QtdPessoas');
let ovos = document.getElementById('ovos');
let queijo = document.getElementById('queijo');
let btnCalcular = document.getElementById('btnCalcular');


function totalPessoas(){
    let person = Number(pessoas.value);
    
    let totalEgg = person * 2;
    let totalCheese = person * 0.5;

    ovos.textContent = "Total de ovos: " + totalEgg;
    queijo.textContent = "Total de queijo: " + totalCheese + "kg";
}

btnCalcular.onclick = function(){
    totalPessoas()
}
