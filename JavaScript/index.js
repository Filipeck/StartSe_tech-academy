const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector('#caixaDeTexto');
const botaoAdicionar = document.querySelector('#botaoAdicionar');

botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = '';

    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
    caixaTexto.focus();
});

function adicionaTarefa(textoDaTarefa){
    const elementoLI = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('id','tarefa');
    elementoSPAN.textContent = textoDaTarefa;

    elementoLI.appendChild(elementoSPAN);
    elementoLI.appendChild(adicionaBotaoRemover());

    return elementoLI;
}

function adicionaBotaoRemover(){
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '✖';
    botaoRemover.className = 'remover';

    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(this.parentNode); //aqui definimos que queremos remover o nó pai do button, o li no qual ele se encontra.
       }
    );

    return botaoRemover;
}