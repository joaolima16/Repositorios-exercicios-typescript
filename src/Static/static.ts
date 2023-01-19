export class Aluno {
    static nomePadrao = "joão";
    static periodoPadrao = "Manhã";
    constructor(private nome: string, private periodo: string) {}
    static GetPeriodo(): void {
        console.log(
            `O aluno ${this.nomePadrao} está no periodo ${this.periodoPadrao} até o momento`
        );
    }
}
console.log(Aluno.GetPeriodo());
