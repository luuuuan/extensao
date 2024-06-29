let dol = document.getElementById('dolar');
let preco1 = document.getElementById('precos1');
let preco2 = document.getElementById('precos2');
let preco3 = document.getElementById('precos3');
let preco4 = document.getElementById('precos4');
let btncotacao = document.getElementById('cotarDolar');

function cotacao(){
    let cotacaoDol = Number(dol.value);
    let dolar1 = cotacaoDol + (cotacaoDol/100); 
    let dolar2 = cotacaoDol + (cotacaoDol/50);
    let dolar3 = cotacaoDol + (cotacaoDol/25);
    let dolar4 = cotacaoDol + (cotacaoDol/10);


//1% , 2% , 5% , 10%
    preco1.textContent = "Preco do dolar se subir 1% " + dolar1;
    preco2.textContent = "Preco do dolar se subir 2% " + dolar2;
    preco3.textContent = "Preco do dolar se subir 5% " + dolar3;
    preco4.textContent = "Preco do dolar se subir 10% " + dolar4;

}

btncotacao.onclick = function(){
    cotacao();
}
