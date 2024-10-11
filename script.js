function addNum(numero){
 let number = document.getElementById('resultado').innerHTML
document.getElementById("resultado").innerHTML = number + numero
  //document.getElementById("resultado").innerHTML = numero 
} 

function limpar(){
    document.getElementById("resultado").innerHTML = " "
}

function calcular(){
 let resultado = document.getElementById('resultado').innerHTML
 if(resultado){
 document.getElementById('resultado').innerHTML = eval(resultado)
 }          
}

// Eval()
// expressão matemática
const resultado = eval(3 + 4) 
    console.log(resultado) 

    // expressão lógica 
    let condicao = eval("5 > 3")
    console.log(condicao)