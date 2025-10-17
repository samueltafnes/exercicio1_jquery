$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const lista_de_tarefas = $('#task_list');
        const nova_tarefa = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const descricao = document.createElement('span');
        descricao.textContent = $('#desc_tarefa').val();

        const btn_excluir = document.createElement('button');
        btn_excluir.textContent = 'Excluir';

        nova_tarefa.appendChild(checkbox);
        nova_tarefa.appendChild(descricao);
        nova_tarefa.appendChild(btn_excluir);

        lista_de_tarefas.append(nova_tarefa);
        $('#desc_tarefa').val('');

        btn_excluir.addEventListener('click', () => {
           nova_tarefa.remove(); // Remove o item da lista
       });
    })

    




});
