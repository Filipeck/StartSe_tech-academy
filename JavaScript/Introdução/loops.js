//LAÇOS DE REPETIÇÃO - LOOPS

//FOR

const listaNumeros = [04,05,09,13,25];

for(let i = 0; i < listaNumeros.length; i++){ //O For é dividido em 3 partes separadas pelo ;, na primeira parte colocamos uma ou mais variáveis de inicialização, na parte central colocamos um teste lógico/ verificação e na última parte colocamos um contador, uma variável que possa ser incrementada ou decrementada para ir controlando os números de repetições  
    console.log(listaNumeros[i]);
}

//o código acima tem a seguinte execução
//console.log(listaNumeros[0]);
//console.log(listaNumeros[1]);
//console.log(listaNumeros[2]);
//console.log(listaNumeros[3]);
//console.log(listaNumeros[4]);
// após isso o teste deu falso (5 < 5) e terminou o for

// HTML operacoes aritméticas

const operacoes = ['soma','subtração','multiplicação','divisão'];

function montaTextoDaLista() {
    let textoDaLista = '';
    for(let operacao of operacoes){
        textoDaLista += '<li>' + operacao + '</li>';
    }
    console.log(textoDaLista);
    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();

//While

const operacoesII = ['potenciação', "radiciação", "logaritmação"]

let ii = 0;

while(ii < operacoesII.length){
    console.log(operacoesII[ii])
    ii++; //para evitar o LOOP INFINITO devemos sempre acrescentar o valor da variável, com isso ele não fica preso em uma condição sem fim
}