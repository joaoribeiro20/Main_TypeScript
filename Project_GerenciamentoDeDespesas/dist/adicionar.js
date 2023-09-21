"use strict";
/*
CRUD (Create, Read, Update, Delete)
Metodos  adicionar, exibir, editar, excluir
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adicionar = void 0;
class Adicionar {
    constructor(nome, valor, data, status) {
        this.nome = nome;
        this.valor = valor;
        this.data = data;
        this.status = status;
    }
    validarNome(nome) {
        this.nome = nome;
        if (nome.length < 2) {
            prompt("nome invalido, numero de caracteris insuficente");
            return false;
        }
        else {
            return true;
        }
    }
    validarValor(valor) {
        this.valor = valor;
        if (valor.valueOf === Number) {
            return true;
        }
        else {
            prompt("o valor informado nao conresponde com um numero");
            return false;
        }
    }
    validarData(data) {
        this.data = data;
        const regexp = new RegExp('/^\d{2}\/\d{2}$/g');
        if (regexp.test(data)) {
            prompt("data Invalida");
        }
        else {
            console.log("data correta");
        }
    }
    atualizarValorTotal(valorTotal) {
        return this.valor - valorTotal;
    }
}
exports.Adicionar = Adicionar;
