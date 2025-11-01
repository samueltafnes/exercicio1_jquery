$(document).ready(function(){
    
    // Função que valida e oculta a lista de tarefas de estiver vazia
    function verificar_lista(){
        var quantidade_pendentes = ($('#tarefas-pendentes #check')).length;
        var quantidade_concluidas = ($('#tarefas-concluidas #check')).length;

        if (quantidade_pendentes){
            $('#tarefas-pendentes').show();
        }else {
            $('#tarefas-pendentes').hide();
        }
        if (quantidade_concluidas){
            $('#tarefas-concluidas').show();
        }else {
            $('#tarefas-concluidas').hide();
        }
    }

    // Icones dos botoes de Editar e Excluir
    const btn_editar = `<ion-icon name="pencil" class="icone" id="editar"></ion-icon>`;
    const btn_excluir = `<ion-icon name="trash" class="icone" id="excluir"></ion-icon>`;

    // Adiciona a nova tarefa na lista de tarefas pendentes
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
        opcoes.innerHTML = btn_editar + btn_excluir;

        label.append(checkbox);
        label.append(tarefa);
        nova_tarefa.append(label);
        nova_tarefa.append(opcoes);
        tarefas_pendentes.append(nova_tarefa); 
        $('#nome-tarefa').val('');
        verificar_lista(); 

        //Monitora se as tarefas foram marcadas como pendentes ou concluidas e a move para a lista correspondente
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
            verificar_lista(); 
        });


        // Edita a tarefa selecionada
        $('ion-icon[name="pencil"]').on('click', function(){
            var linha = $(this).closest('li');
            tarefa = linha.find('.tarefa');
            tarefa.val('Editado');
        })



        // Exclui a tarefa selecionada da lista
        $('ion-icon[name="trash"]').on('click', function(){
            console.log($(this).closest('li'));
            //$(this).closest('li').remove();
            verificar_lista();
        }) 
        

    });
});

