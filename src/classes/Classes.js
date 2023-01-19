"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parentes = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade) {
        this.parentes = [];
        this.nome = nome;
        this.idade = idade;
    }
    AdicionarParente(parente) {
        this.parentes.push(parente);
    }
}
exports.Pessoa = Pessoa;
class Parentes {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        console.log(nome);
    }
}
exports.Parentes = Parentes;
const pessoa = new Pessoa("João", 15);
const Pai = new Parentes("Claudio", 15);
pessoa.AdicionarParente(Pai);
console.log(pessoa);
