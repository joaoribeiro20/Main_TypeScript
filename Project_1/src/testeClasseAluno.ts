class Aluno{
    nome:string

    constructor(nome:string){
        this.nome = nome
    }

    exibirNome(idade:number){
        console.log(this.nome, idade)
    }
}

export {Aluno};