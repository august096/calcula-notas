const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt= "Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt= "Emoji decepcionado" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resulatodo aprovado">Aprovado</span>';
const spanReprovado = '<span class="resulatodo reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima:"))

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    atulaizaTabela();
    atualizaMediaFinal();
});

function addLinha() {
    const inputNameAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividade.includes(inputNameAtividade.value)) {
        alert (`A atividade ${inputNameAtividade.value} ja foi inserida`);
    } else {
        atividade.push(inputNameAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNameAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;        
    }


    inputNameAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atulaizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal() {
    let somaDasNotas = 0;
    
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    
    return media = somaDasNotas / notas.length;
}