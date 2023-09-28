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
let msg = true
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
if(valor3.value != '' && valor3.value > 0){
    segundosTimer = valor3.value
    msg = true
}else if(valor2.value != '' && valor2.value >= 0){
    msg = true
    segundosTimer = 0
}else{
    segundosTimer = 0
    msg = false
    
}
    

if(msg == false){
    window.alert('Digite algum valor para iniciar o timer')
}
    
console.log(valor1.value)
console.log(valor2.value)
console.log(valor3.value)
console.log(msg)


if(msg != false){
divTimerPrincipal.removeChild(divExibidorInput)
divTimerPrincipal.appendChild(divExibiriReal)
exibir = true
     tempo = setInterval(() => {
    if(segundosTimer > 0){
    segundosTimer = segundosTimer-1
    }
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
    divTimerPrincipal.appendChild(divExibidorInput)
    divTimerPrincipal.removeChild(divExibiriReal)
    valor3.innerText="00"
    exibir = false
    }
    if(exibir){
       if(minutosTimer > 9)
       {
        timerExibirReal.innerText = `0${horasTimer} : ${minutosTimer} : ${segundosTimer}`
       }else{
        timerExibirReal.innerText = `0${horasTimer} : 0${minutosTimer} : ${segundosTimer}`
       }
        
    }
    
    }
    , 1000)
    
}

 
}
function pausarTimer(){

}
function retornaTimer(){
    
}
function excluirTimer(){

}
