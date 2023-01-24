enum Cargo {
    PROFESSOR = "professor",
    ALUNO = "aluno",
}
export abstract class Escola {
    protected _nome: string;
    protected _cargo: Cargo;
    constructor(_nome: string, _cargo: Cargo) {
        this._cargo = _cargo;
        this._nome = _nome;
    }
}
export class Aluno extends Escola {
    private static situacao: string;
    private static media: number;
    InserirNotas(notas: number[]): void {
        this.CalcularMedia(notas);
    }
    CalcularMedia(notas: number[]): void {
        const nota_somada: number = notas.reduce(
            (acumulador, valor) => acumulador + valor,
            0
        );
        Aluno.media = nota_somada / notas.length;
        this.Situacao(Aluno.media);
    }
    protected Situacao(media: number): string {
        if (media >= 6) {
            return (Aluno.situacao = "Aprovado");
        } else {
            return (Aluno.situacao = "Reprovado");
        }
    }
    consultarSituacao(): void {
        console.log(Aluno.situacao);
    }
}
const joao = new Aluno("João", Cargo.ALUNO);

const notas = [5, 6, 3, 4];
joao.InserirNotas(notas);
joao.consultarSituacao();
