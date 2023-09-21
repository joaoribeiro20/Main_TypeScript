let valor1 = document.getElementById('TimerValor1')
let valor2 = document.getElementById('TimerValor2')
let valor3 = document.getElementById('TimerValor3')
let divTimerPrincipal = document.getElementById('timerSessao1')
let divExibidorInput = document.getElementById('divExibidorTimerInput')
let divExibiriReal = document.getElementById('divExibidorReal')
let timerExibirReal = document.getElementById('timerExibirReal')
let btnTimerIniciar = document.getElementById('btnTimerIniciar')
divTimerPrincipal.removeChild(divExibiriReal)

let horasTimer 
let minutosTimer 
let segundosTimer
let tempo

function iniciarTimer(){
if(valor1.value != '' && valor1.value >= 0){
    horasTimer = valor1.value
}else{
    horasTimer=0
}
if(valor2.value != '' && valor2.value >= 0){
    minutosTimer = valor2.value
}else{
    minutosTimer=0
}
if(valor3.value != '' && valor3.value >= 0){
    segundosTimer = valor3.value
}else{
    segundosTimer=0
}
    

console.log(valor1.value)
console.log(valor2.value)
console.log(valor3.value)

divTimerPrincipal.removeChild(divExibidorInput)
divTimerPrincipal.appendChild(divExibiriReal)
exibir = true
  tempo = setInterval(() => {
    segundosTimer = segundosTimer-1
    if(segundosTimer == 0 && minutosTimer > 0){
        segundosTimer = 59
        minutosTimer = minutosTimer - 1
    }
    if(minutosTimer == 0 && horasTimer > 0){
        minutosTimer = 60
        horasTimer = horasTimer - 1
    }
    
    if(horasTimer == 0 && minutosTimer == 0 && segundosTimer == 0){
    clearTimeout(tempo)
    timerExibirReal.innerText = `00 : 00 : 00`
    exibir = false
    }
    if(exibir){
        timerExibirReal.innerText = `${horasTimer} ${minutosTimer} ${segundosTimer}`
    }
    
    }
    , 1000)
    timerExibirReal.innerText = `${horasTimer} ${minutosTimer} ${segundosTimer}`
}
function pausarTimer(){

}
function retornaTimer(){
    
}
function excluirTimer(){

}
