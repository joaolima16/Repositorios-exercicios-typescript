type Idade = number;

type Aluno = {
    nome: string;
    idade: Idade;
    matricula: string;
};

type Jogador = {
    nome: string;
    posicao: string;
};

const Joao: Aluno = {
    nome: "João",
    idade: 15,
    matricula: "a144w42",
};

const jogador: Jogador = {
    nome: "Claudio",
    posicao: "Atacante",
};
console.log(jogador);
console.log(Joao);
