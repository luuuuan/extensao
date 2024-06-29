let nome1 = document.getElementById('nome_pessoa1');
let nasc1 = document.getElementById('nasc1');
let nome2 = document.getElementById('nome_pessoa2');
let nasc2 = document.getElementById('nasc2');
let nome3 = document.getElementById('nome_pessoa3');
let nasc3 = document.getElementById('nasc3');
let btnCad = document.getElementById('btnCalc');
let h5pessoa1 = document.getElementById('h5pessoa1');
let h5pessoa2 = document.getElementById('h5pessoa2');
let h5pessoa3 = document.getElementById('h5pessoa3');

function CadastroPessoas() {
    let anoAtual = new Date().getFullYear();
    let primId = Number(nasc1.value);
    let segId = Number(nasc2.value);
    let tercId = Number(nasc3.value);
    let primNome = nome1.value;
    let segNome = nome2.value;
    let tercNome = nome3.value;

    let idade1 = anoAtual - primId; 
    let idade2 = anoAtual - segId;
    let idade3 = anoAtual - tercId;

    if (idade1 > idade2 && idade1 > idade3) {
        h5pessoa1.textContent = "Pessoa mais velha: " + primNome + " - " + idade1 + " anos"; 
    } else if (idade2 > idade1 && idade2 > idade3) {
        h5pessoa1.textContent = "Pessoa mais velha: " + segNome + " - " + idade2 + " anos";
    } else {
        h5pessoa1.textContent = "Pessoa mais velha: " + tercNome + " - "  + idade3 + " anos";
    }
    
    if ((idade1 < idade2 && idade1 > idade3) || (idade1 > idade2 && idade1 < idade3)) {
        h5pessoa2.textContent = "Pessoa do meio: " + primNome + " - " + idade1 + " anos";
    } else if ((idade2 < idade1 && idade2 > idade3) || (idade2 > idade1 && idade2 < idade3)) {
        h5pessoa2.textContent = "Pessoa do meio: " + segNome + " - " + idade2 + " anos";
    } else {
        h5pessoa2.textContent = "Pessoa do meio: " + tercNome + " - " + idade3 + " anos";
    }

    if (idade1 < idade2 && idade1 < idade3) {
        h5pessoa3.textContent = "Pessoa mais nova: " + primNome + " - " + idade1 + " anos";
    } else if (idade2 < idade1 && idade2 < idade3) {
        h5pessoa3.textContent = "Pessoa mais nova: " + segNome + " - " + idade2 + " anos";
    } else {
        h5pessoa3.textContent = "Pessoa mais nova: " + tercNome + " - "  + idade3 + " anos";
    }
}

btnCad.onclick = function() {
    CadastroPessoas();
}
