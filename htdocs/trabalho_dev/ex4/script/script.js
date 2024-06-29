let sabor = document.getElementById('sabores');
let refri = document.getElementById('refrigerante');
let btnCalc = document.getElementById('btnCalc');
let TotalSabor = document.getElementById('VlrSabor');
let TotalRefri = document.getElementById('VlrRefri');


function TotalPedido(){
    let pedido1 = Number(sabor.value);
    let pedido2 = Number(refri.value);

    TotalSabor.textContent = "Valor total da pizza: R$" + pedido1 * 12;
    TotalRefri.textContent = "Valor total do refrigerante: R$" + pedido2 * 7;


}

btnCalc.onclick = function(){
    TotalPedido()
}