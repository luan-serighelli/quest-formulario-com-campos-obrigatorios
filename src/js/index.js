let inputs = document.querySelectorAll(".input");

let botaoEnviar = document.querySelector(".botao-enviar");

let inputsVazios = document.getElementsByClassName("vazio");

botaoEnviar.addEventListener("click", buscarInputsVazios);

function buscarInputsVazios(){
    inputs.forEach((input) =>{
        if(input.value == ""){
            input.classList.add("vazio");
        }else if (input.value != "" && input.classList.contains("vazio")){
            input.classList.remove("vazio");
        }else{
            return
        }
    })

    if(inputsVazios.length == 0){
        alert("Mensagem enviada com sucesso =)")
    }else{
        return
    }
}

inputs.forEach((input) =>{
    input.addEventListener("input", campoPreenchido)
})

function campoPreenchido(){
    inputs.forEach((input)=>{
        if(input.value == ""){
            input.classList.remove("preenchido")
        }else{
            input.classList.remove("vazio")
            input.classList.add("preenchido")
        }
    })
}