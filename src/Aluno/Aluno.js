"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Turma;
(function (Turma) {
    Turma[Turma["PRIMEIRO"] = 0] = "PRIMEIRO";
    Turma[Turma["SEGUNDO"] = 1] = "SEGUNDO";
    Turma[Turma["TERCEIRO"] = 2] = "TERCEIRO";
})(Turma || (Turma = {}));
var Situacao;
(function (Situacao) {
    Situacao[Situacao["REPROVADO"] = 0] = "REPROVADO";
    Situacao[Situacao["APROVADO"] = 1] = "APROVADO";
})(Situacao || (Situacao = {}));
function CalcularMedia(aluno, nota) {
    const nota_final = (nota.nota_um + nota.nota_dois + nota.nota_tres) / 3;
    if (nota_final >= 6) {
        console.log(`O aluno ${aluno.nome} da turma ${aluno.turma} Foi aprovado com a média ${nota_final}`);
    }
    if (nota_final < 6) {
        console.log(`O aluno ${aluno.nome} da turma ${aluno.turma} Foi reprovado com a média ${nota_final}`);
    }
}
const notas = {
    nota_um: 3,
    nota_dois: 5,
    nota_tres: 3,
};
const Aluno_um = {
    nome: "João",
    turma: Turma.PRIMEIRO,
};
const Result = CalcularMedia(Aluno_um, notas);
