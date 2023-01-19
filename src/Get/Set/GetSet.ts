export class Carro {
    constructor(private modelo: string, private valor: number) {}
    set Valor(valor: number) {
        this.valor = valor;
    }
    get Valor(): number {
        return this.valor;
    }
}

const Ferrari = new Carro("Ferrari", 500000);
Ferrari.Valor = 123445;
console.log(Ferrari.Valor);
