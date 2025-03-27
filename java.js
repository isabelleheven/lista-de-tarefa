let listaElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let botaoElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@dados")) || [];

function renderTarefas(){
    listaElement.innerHTML = "";
    
    tarefas.map((todo) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);
        let posicao = tarefas.indexOf(todo);
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        
        linkElement.setAttribute("onclick", `excluirElemento(${posicao})`);
        let linkText = document.createTextNode("x");
        linkElement.appendChild(linkText);
        
        //liElement = document.appendChild(tarefaText);
        //listaElement = document.appendChild(liElement);
        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listaElement.appendChild(liElement);
    })
}

renderTarefas();

function listaTarefas(){
    if(inputElement.value === ''){
        alert('Digite uma tarefa na lista.');
        return false;
    }else{
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        inputElement.value = "";
        
    }

    renderTarefas();
    salvarDados();
}

function excluirElemento(posicao){
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvarDados()
}

function salvarDados(){
    localStorage.setItem("@dados", JSON.stringify(tarefas));
}

botaoElement.onclick = listaTarefas;