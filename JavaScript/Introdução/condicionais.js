// CONDICIONAIS

let nota1 = 3;
let nota2 = 4;

function media(a,b){
    return (a + b) /2;
};

let resultado = media(nota1,nota2);

console.log(resultado);

//IF - Else (fazemos um teste para ver se a condição é verdadeira ou falsa)

if(resultado >= 6) {
    console.log(`Parabéns, você foi aprovado com a média ${resultado}!`);
} else if(resultado >=4){
    console.log(`Infelizmente, você está em recuperação, com a média ${resultado}!`);
} else{
    console.log(`Infelizmente, você foi reprovado com a média ${resultado}!`);
}

//Operador Ternário Condicional - 3 Operandos

let situacao = (resultado >= 6) ? `Aprovado, com média ${resultado}!` : 
               (resultado >= 4) ? `Em recuperação, com média ${resultado}!`:
                                  `Reprovado, com média ${resultado}!`;

console.log(situacao);


//SWITCH (testamos uma igualdade na condição)

let opcao = 1;

switch (opcao) {
    case 1:
        console.log(`Entrega selecionada do tipo econômica, em até 10 dias úteis.`);
        break; //a palavra reservada break serve para que após executar o case o programa encerre, se não colocada o programa continuará executando o próximo caso.
    case 2:
        console.log(`Entrega selecionada do tipo normal, em até 5 dias úteis.`);
        break;
    case 3:
        console.log(`Entrega selecionada do tipo express, em até 1 dia útil.`);
        break;
    default: //se o valor oferecido não for atendido por nenhum dos casos, ele irá executar o default. por ser o último não foi colocado break, pois após ele o switch é encerrado.
        console.log(`Opção de entrega inválida!`);
}

