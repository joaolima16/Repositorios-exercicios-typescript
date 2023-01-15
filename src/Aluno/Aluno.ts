enum Turma {
    PRIMEIRO,
    SEGUNDO,
    TERCEIRO,
}

type Notas = {
    nota_um: number;
    nota_dois: number;
    nota_tres: number;
};
enum Situacao {
    REPROVADO,
    APROVADO,
}

export type Aluno = {
    nome: string;
    turma: Turma;
};

function CalcularMedia(aluno: Aluno, nota: Notas): void {
    const nota_final = (nota.nota_um + nota.nota_dois + nota.nota_tres) / 3;
    if (nota_final >= 6) {
        console.log(
            `O aluno ${aluno.nome} da turma ${aluno.turma} Foi aprovado com a média ${nota_final}`
        );
    }
    if (nota_final < 6) {
        console.log(
            `O aluno ${aluno.nome} da turma ${aluno.turma} Foi reprovado com a média ${nota_final}`
        );
    }
}

const notas: Notas = {
    nota_um: 3,
    nota_dois: 5,
    nota_tres: 3,
};
const Aluno_um = {
    nome: "João",
    turma: Turma.PRIMEIRO,
};

const Result = CalcularMedia(Aluno_um, notas);
type UpperCase = (value: number) => number;
