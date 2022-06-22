/*alert('Olá! Seja bem-vindo!');
document.querySelector('#t1').textContent = 'Cecília é Bocó';
document.querySelector('#t2').textContent = 'Cecília é Gostosona';*/

// apresenta uma mensagem e esconde o formulário de login. Para fazer comentário no js usamos //

function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').value;
    alert(`Olá, ${nome}! Seja bem-vindo!`);
    document.getElementById('formulariologin').style.display = 'none';
}

/* Utilizamos comentário neste formato para fazer comentário de bloco, quando por exemplo quisermos cancelar o uso de alguma funcionalidade ao executar o js */

function mudaCorFundo(){
    const menu = document.querySelector('#coresFundo');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;
}

//Declaramos a função. Entre parênteses definimos um parâmetro (ou seja colocamos uma variável, entre chaves está o corpo da função, onde declaramos a função, se houver variável como parâmetro ela será aplicada no corpo da função)
function exibirMsg(primeiroNome,ultimoNome){//Quando declaramos a função a variável entre parênteses chamamos de parâmetro
    alert(`${primeiroNome} ${ultimoNome}, Seja muito bem-vindo!`);
}

// Chamada ou invocação da função
exibirMsg('Fulano', 'de Tal'); //argumento da função é quando colocamos uma variável entre parênteses no momento da chamada da função

function mediaAritmetica(a,b){
    return (a + b) /2;
    
}

let resultado = mediaAritmetica(10,5);

console.log(resultado);

resultado = mediaAritmetica(200, 100);

console.log(resultado)

function calcularMilha(){
    let km = document.querySelector('#valorKM').value;
    document.querySelector('#resultado').textContent= km * 1.609
};


