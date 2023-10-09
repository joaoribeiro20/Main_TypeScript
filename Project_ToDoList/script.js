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
let txtl = []

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

function editar(txtAtual,local){
    let inputEditar = document.createElement('input')
    inputEditar.setAttribute('id', `e${txtAtual}`)
    inputEditar.setAttribute('class', `divTarefa`)
    
     
    let labelTarefa1 = document.querySelector(`#L${txtAtual}`)
   
    console.log(`texto labol: ${txtl[txtAtual]}`)
    
   

    let div = document.querySelector(`#i${txtAtual}`)
    let spanBtns = document.querySelector(`#S${txtAtual}`)

    spanBtns.style.display = 'none'
    labelTarefa1.style.display= 'none'
    div.appendChild(inputEditar)
    
    inputEditar.value = txtl[txtAtual]
    inputEditar.focus()
    let btnSalvar = document.createElement('button')
    btnSalvar.innerText = `Salvar`
    btnSalvar.setAttribute('value', `${txtAtual}`)
    btnSalvar.setAttribute('id', `b${txtAtual}`)
    btnSalvar.setAttribute('onclick', `teste(${btnSalvar.value})`)
    div.appendChild(btnSalvar)


}
function teste(n){
    console.log(n)

    

    let inputEditar = document.querySelector(`#e${n}`)
    txtl[n] = inputEditar.value
    let btnSalvar = document.querySelector(`#b${n}`)
    console.log(inputEditar.value)
    let div = document.querySelector(`#i${n}`)
    let labelTarefa1 = document.querySelector(`#L${n}`)
    let spanBtns = document.querySelector(`#S${n}`)

    div.removeChild(inputEditar)
    div.removeChild(btnSalvar)
    labelTarefa1.style.display = 'flex'
    labelTarefa1.innerText =  txtl[n]
    spanBtns.style.display = 'flex'
    

console.log('ebaa')
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
    inputRadio.setAttribute('onclick', `feita(${inputRadio.value},)`)

    div.appendChild(inputRadio)

    let label = document.createElement('label')
    label.setAttribute('id', `L${id}`)
    label.setAttribute('value', `${txt}`)
    txtl[id]= txt
    console.log(txtl)
    label.innerText = txt

    div.appendChild(label)

    let span = document.createElement('span')
    span.setAttribute('id', `S${id}`)

    div.appendChild(span)

    let btnEditar = document.createElement('button')
    btnEditar.innerHTML = `<i class="fa-solid fa-pen"></i>`
    btnEditar.setAttribute('value', `${id}`)
   
    btnEditar.setAttribute('onclick', `editar(${btnEditar.value})`)

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
    return parseInt(Math.random() * 100)
}
