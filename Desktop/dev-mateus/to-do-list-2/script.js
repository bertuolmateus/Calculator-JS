let tarefas = []
let mensagem = ""
const texto = document.getElementById("mensagem");

    function adicionarTarefa() {

        //cria variavel e pega oq o usuário escreveu no input desse ID 
        let inputTarefa = document.getElementById("tarefaInput");
        let tarefa = inputTarefa.value.trim();  

        //cria mensagem e verifica se ele escreveu algo em branco apenas 
        mensagem = "Tarefa adicionada com sucesso!";
            if (tarefa == ""){
                mensagem = "A tarefa não pode estar em branco!"
                texto.style.color = "#A34743";
            }

            //se não está em branco, adiciona nova tarefa na lista 
            else {
                texto.style.color = "#28A745";
                tarefas.push(tarefa);
                renderizarTarefas();

                //aparece o botão de limpar lista 
                document.getElementById("btnReset").style.display = "inline";
            }
            texto.textContent = mensagem;
        
        inputTarefa.value = "";
 
    }
    function renderizarTarefas(){
        let listaTarefas = document.getElementById("listaTarefas");
        listaTarefas.innerHTML = ""
        
        for(let i = 0; i < tarefas.length; i++){
            let novaTarefa = document.createElement("li");
            novaTarefa.textContent = tarefas[i];

            //criação do botão de editar
            let btnEdit = document.createElement('button')
            btnEdit.className = 'editar'
            btnEdit.textContent = 'Editar'
            btnEdit.onclick = () => {
                editarTarefa(i)
                mensagem = "Tarefa editada com sucesso!"
                texto.style.color = "blue"
                texto.textContent = mensagem
            }

            //crição do botão de remover
            let btnRemover = document.createElement('button')
            btnRemover.className = 'remover'
            btnRemover.textContent = 'Remover'
            btnRemover.onclick = () => {
                removerTarefa(i)
                mensagem = "Tarefa excluída com sucesso!"
                texto.style.color = "gray"
                texto.textContent = mensagem
            }

            novaTarefa.appendChild(btnEdit);
            novaTarefa.appendChild(btnRemover);
            listaTarefas.appendChild(novaTarefa);
        }
    

    }
    function removerTarefa(i){
        tarefas.splice(i, 1) //corta o indice até o tamanho que quiser (1)
        renderizarTarefas()
    } 
    function editarTarefa(i){
        document.getElementById("modalEditar").style.display = "block";
        document.getElementById("btnSalvar").onclick = () => {
            let tarefaEditada = document.getElementById("nomeModal");
            let novoNome = tarefaEditada.value.trim();
            if (novoNome != ""){
                tarefas[i] = novoNome;
                tarefaEditada.value = "";
                document.getElementById("modalEditar").style.display = "none";
                renderizarTarefas();
            }
        }
    }
    function limparLista(){
        tarefas.length = 0
        let btnReset = document.getElementById("btnReset")
        btnReset.style.display = "none"
        renderizarTarefas()
        mensagem = "Lista apagada com sucesso!"
        texto.style.color = "purple"
        texto.textContent = mensagem
    }