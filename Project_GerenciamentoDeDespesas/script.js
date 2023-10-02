let areaMain = document.getElementById('main')
let divAdicionar = document.getElementById('divAdicionar')
divAdicionar.style.display ='none'
function NovaTransicao(){
    areaMain.style.display = 'none'
    divAdicionar.style.display ='flex'
    console.log("teste")
}
function adicionar(){
    areaMain.style.display = 'flex'
    divAdicionar.style.display ='none'
}
