var tarefas = []

onload = function () {
    let t = document.getElementById("telaTarefas")
    let t2 = localStorage.getItem("tarefasMemoria")
    let todasTarefas = JSON.parse(t2)

    console.log(todasTarefas)

    for (let i = 0; i < todasTarefas.length; i++){
        let liNova = document.createElement ("li") //criando tag
        let liCont = document.createTextNode(todasTarefas[i]) //conteudo da nova tag
        liNova.appendChild(liCont) //colocando conteuo dentro da nova tag

        let ulAtual = t 
        let ulItens = document.getElementsByTagName("li")

        ulAtual.insertBefore(liNova, ulItens[i])
    }

}


function addTarefa() {
    
    let tarefa = document.getElementById("contTarefa").value
    
    tarefas.push(tarefa)

    let tarefasToSting = JSON.stringify(tarefas)
    
    console.log(tarefasToSting)

    localStorage.setItem("tarefasMemoria", tarefasToSting)


   
}

function mostrarTarefas() {
    let p = document.getElementById("mostraTarefa")
    console.log(p)

    for(let i of tarefas){
        console.log(tarefas[i])

    }
}

function excluirTarefa() {
    
}



