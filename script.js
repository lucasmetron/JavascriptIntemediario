function h1click(){
    console.log("executando a função")
}

function h1(){ 
    let h1 = document.getElementsByTagName("h1")[0]
    let input = document.getElementById("texto")

    h1.innerText = input.value


    console.log(h1)
    console.log(input)
}
