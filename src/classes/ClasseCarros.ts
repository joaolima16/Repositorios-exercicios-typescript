class Garagem {
    private readonly proprietario: string;
    private readonly carros: Carros[] = [];
    constructor(proprietario: string) {
        this.proprietario = proprietario;
    }
    public SetCarro(carro: Carros) {
        this.carros.push(carro);
    }
    public GetCarro(): void {
        console.log(this.carros);
    }
}
class Carros {
    constructor(readonly nomeCarro: string, readonly valor: number) {
        console.log(nomeCarro);
    }
}
const proprietario1 = new Garagem("João");
const Ferrari = new Carros("Ferrari 488", 5000424.24);
proprietario1.SetCarro(Ferrari);
proprietario1.GetCarro();
