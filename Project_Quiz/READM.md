//Alternativa 1
    let input1 = document.createElement('input')
    input1.setAttribute('type', 'radio')
    DIVPrincipal.appendChild(input1)
//-----------------------------------------------//
    let label1 = document.createElement('label')
    label1.innerText = Tperguntas[0].respostas[0].opcoe
    DIVPrincipal.appendChild(label1)
    let br1 = document.createElement('br')
    DIVPrincipal.appendChild(br1)

///////////////////////////////////////////////////

//Alternativa 2
    let input2 = document.createElement('input')
    input2.setAttribute('type', 'radio')
    DIVPrincipal.appendChild(input2)
//-----------------------------------------------//
    let label2 = document.createElement('label')
    label2.innerText = Tperguntas[1].respostas[1].opcoe
    DIVPrincipal.appendChild(label2)
    let br2 = document.createElement('br')
    DIVPrincipal.appendChild(br2)
..............................................................................................................................................................................................................................................................................

     let loop1 = 0
    for(let j = 0; j <= 3; j++){
    //Alternativa 2
    let j = document.createElement('input')
    j.setAttribute('type', 'radio')
    DIVPrincipal.appendChild(j) 
//-----------------------------------------------//
      for(let h = 0; h <= 3; h++){
    let h = document.createElement('label')
    h.innerText = Tperguntas[0].respostas[loop1].opcoe
    DIVPrincipal.appendChild(h)
    loop1 = loop1 + 1
      }
    }

    ..............................................................................................................................................................................................................................................................................

    //Alternativa 1
let input1 = document.createElement('input')
input1.setAttribute('type', 'radio')
DIVPrincipal.appendChild(input1)
//-----------------------------------------------//
for(let j = 0; j <= 3; j++){
let label1 = document.createElement('label')
label1.innerText = Tperguntas[0].respostas[j].opcoe
DIVPrincipal.appendChild(label1)
let br1 = document.createElement('br')
DIVPrincipal.appendChild(br1)
}


///////////////////////////////////////////////////

//Alternativa 2
let input2 = document.createElement('input')
input2.setAttribute('type', 'radio')
DIVPrincipal.appendChild(input2)
//-----------------------------------------------//
for(let j = 0; j <= 3; j++){
  let label2 = document.createElement('label')
label2.innerText = Tperguntas[1].respostas[j].opcoe
DIVPrincipal.appendChild(label2)
let br2 = document.createElement('br')
DIVPrincipal.appendChild(br2)
  }