export class Pessoa {
    readonly nome: string;
    readonly idade: number;
    private parentes: Parentes[] = [];
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    public AdicionarParente(parente: Parentes) {
        this.parentes.push(parente);
    }
}
export class Parentes {
    constructor(readonly nome: string, readonly idade: number) {
        console.log(nome);
    }
}
const pessoa = new Pessoa("João", 15);
const Pai = new Parentes("Claudio", 15);
pessoa.AdicionarParente(Pai);
console.log(pessoa);
