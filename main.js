$(document).ready(function(){

    const icones = `<ion-icon name="pencil" class="icone" id="editar"></ion-icon>
                    <ion-icon name="trash" class="icone" id="excluir"></ion-icon>`;
    $('form').on('submit', function(e){
        e.preventDefault();

        const lista_de_tarefas = $('#lista-de-tarefas');
        const nome_tarefa = $('#nome-tarefa').val();
        const nova_tarefa = document.createElement('li');
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'check';

        const tarefa = document.createElement('span');
        tarefa.className = 'tarefa';
        tarefa.append(nome_tarefa);

        const opcoes = document.createElement('span');
        opcoes.id = 'icones';
        opcoes.innerHTML = icones;

        label.append(checkbox);
        label.append(tarefa);
        nova_tarefa.append(label);
        nova_tarefa.append(opcoes);
        lista_de_tarefas.append(nova_tarefa); 

        console.log(nova_tarefa)
        $('#nome-tarefa').val('');
    });

    



})

