// SELECIONAR OS ELEMENTOS 

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

//FUNÇÃO PARA CONVERTER AS UNIDADES

function convert() {
    //obtendo valores das unidades de entrada e saída
    const fromValue = fromElement.value;
    const toValue = toElement.value;


    // verificar se a entrada e a saída serão iguais
    if(fromValue === toValue){
        outputElement.value = inputElement.value
        messageElement.textContent = "";
        return;
    }

    //CONVERTER A ENTRADA PARA METROS (UNIDADE PADRÃO)
    let meters 
    switch (fromValue) {
        case "m":
            meters = inputElement.value;      
            break;
        case "km":
            meters = inputElement.value * 1000;
            break
        case "cm":
            meters = inputElement.value / 100;
            break
        case "mm":
            meters = inputElement.value / 1000;
            break    
       
    }

    //converter os metros para a unidade de saída.
    let result
    switch (toValue){
        case "m":
            result = meters;          
            break;
        case "km":
            result = meters / 1000;
            break
        case "cm":
            result = meters * 100;
            break
        case "mm":
            result = meters * 1000;
            break    
       
    }

    //EXIBIR RESULTADO NO INPUT
    outputElement.value = result;

    //EXIBIR RESULTADO NA MENSAGEM 
    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text

    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
    messageElement.textContent = message;
    return;
    

    console.log(fromValue, toValue);
    console.log(inputElement.value, meters, result)
    console.log(fromLabel, toLabel)
}

convertButton.addEventListener("click", convert)