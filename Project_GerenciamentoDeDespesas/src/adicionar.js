"use strict";
/*
CRUD (Create, Read, Update, Delete)
Metodos  adicionar, exibir, editar, excluir
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adicionar = void 0;
var Adicionar = /** @class */ (function () {
    function Adicionar(nome, valor, data, status) {
        this.nome = nome;
        this.valor = valor;
        this.data = data;
        this.status = status;
    }
    Adicionar.prototype.validarNome = function (nome) {
        this.nome = nome;
        if (nome.length < 2) {
            prompt("nome invalido, numero de caracteris insuficente");
            return false;
        }
        else {
            return true;
        }
    };
    Adicionar.prototype.validarValor = function (valor) {
        this.valor = valor;
        if (valor.valueOf === Number) {
            return true;
        }
        else {
            prompt("o valor informado nao conresponde com um numero");
            return false;
        }
    };
    Adicionar.prototype.validarData = function (data) {
        this.data = data;
        const regexp1 =/^\d{2}\/\d{2}$/g
        if (regexp1.test(data)) {
            console.log("data correta");
        }
        else {
            console.log("data Invalida");
        }
    };
    Adicionar.prototype.atualizarValorTotal = function (valorTotal) {
        return this.valor - valorTotal;
    };
    return Adicionar;
}());
exports.Adicionar = Adicionar;
