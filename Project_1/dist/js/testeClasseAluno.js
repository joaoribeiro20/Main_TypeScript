"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(nome) {
        this.nome = nome;
    }
    exibirNome(idade) {
        console.log(this.nome, idade);
    }
}
exports.Aluno = Aluno;
