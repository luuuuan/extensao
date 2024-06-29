let TotalAlunos = document.querySelector('#TotalAlunos');
let divisao = document.querySelector('#divisao');
let btnResultado = document.querySelector('#btnResultado');
let h4msg = document.querySelector('#h4msg');
let h4alunosTurma = document.querySelector('#h4alunosTurma');

function dividirTurma(){
    let alunos = Number(TotalAlunos.value);
    let turmas = Number(divisao.value);
    let resto = alunos % turmas;
    let alunos_por_turma = Math.round(alunos / turmas);

    if (resto > 0){
        h4msg.textContent = "Total de alunos sem turma: " + resto;
    }else{
        h4msg.textContent = "Não houve sobra de alunos";
    }
    h4alunosTurma.textContent = "Alunos por turma: " + alunos_por_turma;
}   

btnResultado.onclick = function(){
    dividirTurma();
}