/* 
CRUD (Create, Read, Update, Delete) 
Metodos  adicionar, exibir, editar, excluir
*/

class Adicionar{

    nome:string;
    valor:number;
    data:string; /* realizar regex para confirma a data */
    status:boolean;

    constructor(nome:string,valor:number,data:string,status:boolean){
        this.nome = nome;
        this.valor = valor;
        this.data = data;
        this.status = status
    }


    validarNome(nome:string) {
        this.nome = nome;
        if(nome.length < 2){
            prompt("nome invalido, numero de caracteris insuficente")
            return false;
        }else{
            return true;
        }
    }
    validarValor(valor:number) {
        this.valor = valor
        if(valor.valueOf === Number){
            return true;
        }else{
            prompt("o valor informado nao conresponde com um numero");
            return false;
        }
    }

    validarData(data:string) : void{

        this.data = data
        const regexp = new RegExp('/^\d{2}\/\d{2}$/g')
        if(regexp.test(data)){
            prompt("data Invalida")
        }else{
            console.log("data correta")
        }
    }

    atualizarValorTotal(valorTotal:number) : number{
        return this.valor - valorTotal  
    }

}

export{ Adicionar };