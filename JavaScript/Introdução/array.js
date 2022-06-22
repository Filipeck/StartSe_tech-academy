// Tipos de Dado de Referência
// Array - Vetor - Arranjo

const cidades = [];

//PUSH - adiciona elemento ao final da array

cidades.push('Rio de Janeiro','São Paulo');

console.log(cidades);

cidades.push('Salvador','Recife');

console.log(cidades);

//UNSHIFT - adiciona elemento no começo da array

cidades.unshift('Campinas','Santana');

console.log(cidades);

//POP - Remove o útimo elemento e retorna o elemento removido

let cidadeRemovida = cidades.pop();

console.log(cidadeRemovida);

console.log(cidades);

//Shift - Remove o primeiro elemento e retorna o elemento removido

cidadeRemovida = cidades.shift();

console.log(cidadeRemovida);

console.log(cidades);

//Splice - Remove um ou mais ítens - utilizando um índice

const indice = cidades.indexOf('Rio de Janeiro'); //mostra qual o índice que contem o item mencionado. Se tentarmos encontrar o índice de uma string ue não existe na array será apresentado no console o valor de -1.

console.log(indice);

cidades.splice(indice,1);  //O splice remove do índice escolhido em diante se não for declarado, por isso colocamos o "1" após, para especificar que só 1 item será removido

console.log(cidades);

//CONCAT - concatenação/fusão de arrays

const cidadesInterior = ['Santo Antônio', 'Feira de Santana', 'Cruz das Almas'];
const regiaoMetropolitana = ['Salvador', 'Lauro de Freitas'];

const fusaoCidades = cidadesInterior.concat(regiaoMetropolitana);

console.log(fusaoCidades);

// Array.from

const x = Array.from('ABNT');

console.log(x);

//Includes - verifica se o item existe na array

const locais = ['Rio', 'Salvador', 'Curitiba']

console.log(locais.includes('Rio'));

// MAP - ITERAR OU PERCORRER

const jogadores = [
    {
        nome: 'Beto',
        posicao: 'atacante'
    },
    {
        nome: 'Carlos',
        posicao: 'zagueiro'
    },
    {
        nome: 'Pablo',
        posicao: 'meia'
    },
    {
        nome: 'Denis',
        posicao: 'goleiro'
    }
];

function obtemNomeJogador(j){
    return j.nome;
}

function obtemPosJogador(j){
    return j.posicao;
}

let nomesJogadores = jogadores.map(obtemNomeJogador);

console.log(nomesJogadores);

let posicaoJogadores = jogadores.map(obtemPosJogador);

console.log(posicaoJogadores);

//outro exemplo com map

let notas = [7,9,8,5,6,4];

function adicionarPonto(nota){
    return nota + 1;
}

let notasAtualizadas = notas.map(adicionarPonto);

console.log(notasAtualizadas)

//Filter

const jogadores2 = [
    {
        nome: 'Beto',
        posicao: 'atacante'
    },
    {
        nome: 'Carlos',
        posicao: 'zagueiro'
    },
    {
        nome: 'Pablo',
        posicao: 'volante'
    },
    {
        nome: 'Denis',
        posicao: 'goleiro'
    },
    {
        nome: 'Daniel',
        posicao: 'volante'
    }
];

function obtemNomeJogador(j){
    return j.nome;
}

function obtemPosJogador(j){
    return j.posicao;
}

let nomesJogadores2 = jogadores2.map(obtemNomeJogador);

console.log(nomesJogadores);

let posicaoJogadores2 = jogadores2.map(obtemPosJogador);

console.log(posicaoJogadores);

function obtemVolante(jogador){
    return jogador.posicao === 'volante';
}

const volantes = jogadores2.filter(obtemVolante);

console.log(volantes);

//FOREACH - para cada

function exibeNomeJogador(jogador){
    console.log(jogador.nome);
}

jogadores2.forEach(exibeNomeJogador);