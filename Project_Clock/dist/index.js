let btnInicarCronometro = document.getElementById('BtnIniciarBtnIniciar')
let cronometroExibir = document.getElementById('cronometroExibir')
let divBotoes = document.getElementById('divBotoes')
let cronometroSessao = document.getElementById('cronometroSessao')
/* 
let divBotoes =document.createElement('div')
divBotoes.setAttribute('class', 'divBotoes')
cronometroSessao.appendChild(divBotoes)


let btnInicarCronometro = document.createElement('button')
btnInicarCronometro.setAttribute('class', 'btn')
btnInicarCronometro.innerText = 'Iniciar'
divBotoes.appendChild(btnInicarCronometro)

 */

let btnPararCronometro = document.createElement('button')
let btnReiniciarCronometro = document.createElement('button')
btnPararCronometro.setAttribute('class','btn')
btnPararCronometro.innerText = 'parar'
/* btnPararCronometro.addEventListener('click', ) */

let segundos = 0
let minutos = 0
let horas = 0

function iniciarCronometro(){

divBotoes.removeChild(btnInicarCronometro)

divBotoes.appendChild(btnPararCronometro)

setInterval(() => {
    segundos = segundos + 1
    if(segundos>=60){
        segundos = 0
        minutos = minutos+1
    }
    if(minutos>=60){
        minutos = 0
        horas = horas+1
    }
    cronometroExibir.innerText = `${horas} : ${minutos} : ${segundos}`
  }
    , 1000)

}
