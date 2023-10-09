import { Tperguntas } from "./scriptPerguntas.js"
let pergunta1 = document.getElementsByName("drone");

/* 
console.log(Tperguntas.length - 1)
console.log(pergunta1[0].checked) */


//CONTEUDOS QUE DEVEM SER CRIADO DINAMICAMENTE 
/* 
DIVPrincipal - AONDE VAI SER EXIBIDO A PERGUNTA E 
AS ALTERNATIVAS
h2 
hr
br
input
label

*/

let areaPergunta = document.querySelector('#areaPergunta')




function createPergunta() {

  for (let i = 0; i <= Tperguntas.length - 1; i++) {
    let DIVPrincipal = document.createElement('div')
    DIVPrincipal.setAttribute('class', 'pergunta')

    let enunciado = document.createElement('h2')
    enunciado.innerText = Tperguntas[i].questao
    DIVPrincipal.appendChild(enunciado)
    let hr = document.createElement('hr')
    let brE = document.createElement('br')
    DIVPrincipal.appendChild(hr)
    DIVPrincipal.appendChild(brE)

    //area de criação das alternativas
    let opcoesA = 0
    for (let j = 0; j <= 3; j++) {
      //criar um input
      let input = document.createElement('input')
      input.setAttribute('type', 'radio')
      input.setAttribute('name', `pergunta${i}`)
      //adiciona na div principal
      DIVPrincipal.appendChild(input)
      //-----------------------------------------------//
      //criar uma label
      let label = document.createElement('label')
      //insere o texto que ta dentro do array na posição 0 no objeto per
      label.innerText = Tperguntas[i].respostas[opcoesA].opcoe
      DIVPrincipal.appendChild(label)
      let br1 = document.createElement('br')
      DIVPrincipal.appendChild(br1)
      opcoesA = opcoesA + 1
    }
    areaPergunta.appendChild(DIVPrincipal)
  }

  let DIVSubimite = document.createElement('div')
  DIVSubimite.setAttribute('class', 'pergunta')

  let btnSubimite = document.createElement('button')
  btnSubimite.innerText = 'SALVAR'
  DIVSubimite.appendChild(btnSubimite)
  areaPergunta.appendChild(DIVSubimite)

}




window.onload = createPergunta()