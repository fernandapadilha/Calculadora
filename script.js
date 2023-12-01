/*é colocado dentro dos parenteses do querySelector oq queremos selecionar,
neste caso sendo o .result(ponto usado por se referir a uma classe), a mesma coisa com o .igual*/
const resultado = document.querySelector(".result");
const confirmar = document.querySelector('.igual');

/*O insert significa que eu quero inserir aluma coisa. */
function insert(valor) {
    resultado.innerHTML += valor;
}

/*A função clean é usada para limpar tudo que tá dentro do <p> */
function clean() {
    resultado.innerHTML = ' ';
}

/*backspace é para qunado eu quero apagar somente o ultimo digito */
function backspace() {
    if(resultado.textContent) {
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
}

/*confirma é para enviar o resultado final ao p quando clicar no = */
function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    }
}
