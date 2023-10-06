/* <div>
    <input type="radio">
        <label for="text">Ir ao mercado</label>
        <span>
            <button><i class="fa-solid fa-pen"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
        </span>
</div> */
//criar dinamicamente os elemnetos
//div (principal)
//input
//label
//span
//botoa excluir
//botão editar


let inputTarefa = document.querySelector('#inputTarefa')
let btnADD = document.querySelector('#btnADD')
let areaTarefa = document.querySelector('#areaTarefa')

btnADD.addEventListener('click', ()=>{
    if(inputTarefa.value != ''){
    createItem(inputTarefa.value)
    inputTarefa.value = ''
    inputTarefa.focus()
    }else{
        alert('adicione um texto dentro na area recomendada')
    }
})

function excluir(id){
    console.log(id)
    let idDiv = `#i${id}`
    let divExcluida = document.querySelector(`${idDiv}`)
    areaTarefa.removeChild(divExcluida) 
}

function editar(){

}
let statusi = true
function feita(id){
    
    if(statusi == true){
    let idDiv = `#i${id}`
    let input = document.querySelector(`${idDiv}`)
    input.style.opacity = '60%'
    console.log(input) 
    statusi = false
    }else if(statusi == false){
        let idDiv = `#i${id}`
        let input = document.querySelector(`${idDiv}`)
        input.style.opacity = '100%'
        
        console.log(input) 
        statusi = true
        
    }
   
}

function createItem(txt){
   
    let id=idR()
    let div = document.createElement('div')
    div.setAttribute('id', `i${id}`)
    

    let inputRadio = document.createElement('input')
    inputRadio.setAttribute('type','radio')
    inputRadio.setAttribute('value', `${id}`)
    inputRadio.setAttribute('onclick', `feita(${inputRadio.value})`)

    div.appendChild(inputRadio)

    let label = document.createElement('label')
    label.innerText = txt

    div.appendChild(label)

    let span = document.createElement('span')

    div.appendChild(span)

    let btnEditar = document.createElement('button')
    btnEditar.innerHTML = `<i class="fa-solid fa-pen"></i>`

    span.appendChild(btnEditar)

    let btnExcluir = document.createElement('button')
    btnExcluir.innerHTML = `<i class="fa-solid fa-trash"></i>`
    btnExcluir.setAttribute('value', `${id}`)
    btnExcluir.setAttribute('onclick', `excluir(${btnExcluir.value})`)
    
    span.appendChild(btnExcluir)

    areaTarefa.appendChild(div) 
    
  
}

function idR(){
    //return Math.random();
   // return Math.random() * 20;
    return parseInt(Math.random() * 20)
}
