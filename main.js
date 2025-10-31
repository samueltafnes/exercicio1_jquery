$(document).ready(function(){
    console.log($('#tarefas-concluidas').children.length);

    const icones = `<ion-icon name="pencil" class="icone" id="editar"></ion-icon>
                    <ion-icon name="trash" class="icone" id="excluir"></ion-icon>`;
    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefas_pendentes = $('#tarefas-pendentes');
        const nome_tarefa = $('#nome-tarefa').val();
        const nova_tarefa = document.createElement('li');
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'check';
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
        tarefas_pendentes.append(nova_tarefa); 
        $('#nome-tarefa').val('');


        $('input[name="check"]').on('change', function(){
            if ($(this).is(':checked')){
                var atual = $(this).closest('li');
                var concluido = $('#tarefas-concluidas');
                concluido.append(atual);
            }
            else{
                var atual = $(this).closest('li');
                var pendente = $('#tarefas-pendentes');
                pendente.append(atual);
            }
        });

        $('#excluir').on('click', function(){
            $(this).closest('li').remove();
        })

        $('#tarefas-concluidas').on('change', function(){
            if(this != '<ul id="tarefas-concluidas"><span>Tarefas concluidas:</span></ul>'){
                console.log($('#tarefas-concluidas').children.length);
            }
            else{
                console.log("igual");
            }
        })

        
    });



});

