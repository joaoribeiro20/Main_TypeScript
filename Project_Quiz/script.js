/* import questoes from './scriptPerguntas'; */
let perguntas = [
    {
    questao: 'Quando é 10 + 100?',
    respostas: [
        {opcoe: '2', status:false},
        {opcoe: '33', status:false},
        {opcoe: '180', status:false},
        {opcoe: '110', status:true}
      ]
    },
    {
        questao: 'Quando é 10 + 100?',
        respostas: [
            {opcoe: '2', status:false},
            {opcoe: '33', status:false},
            {opcoe: '180', status:false},
            {opcoe: '110', status:true}
          ]
        },
        {
            questao: 'Quando é 10 + 100?',
            respostas: [
                {opcoe: '2', status:false},
                {opcoe: '33', status:false},
                {opcoe: '180', status:false},
                {opcoe: '110', status:true}
              ]
            },
            {
                questao: 'Quando é 10 + 100?',
                respostas: [
                    {opcoe: '2', status:false},
                    {opcoe: '33', status:false},
                    {opcoe: '180', status:false},
                    {opcoe: '110', status:true}
                  ]
                }
]
let body = document.getElementById('body')
let divPerguntas = document.createElement("div")
divPerguntas.setAttribute('class', 'pergunta')
 perguntas[1].questao
divPerguntas.innerHTML = 
`${perguntas[1].questao} 
<hr>
<br>

<input type="radio" id="2" name="1" value=`${perguntas[1].respostas[0].status}`  />
  <label for="1">43</label>
`
body.appendChild(divPerguntas)
console.log(perguntas[1].questao)