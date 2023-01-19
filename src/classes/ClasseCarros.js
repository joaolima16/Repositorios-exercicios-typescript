"use strict";
class Garagem {
    constructor(proprietario) {
        this.carros = [];
        this.proprietario = proprietario;
    }
    SetCarro(carro) {
        this.carros.push(carro);
    }
    GetCarro() {
        console.log(this.carros);
    }
}
class Carros {
    constructor(nomeCarro, valor) {
        this.nomeCarro = nomeCarro;
        this.valor = valor;
        console.log(nomeCarro);
    }
}
const proprietario1 = new Garagem("João");
const Ferrari = new Carros("Ferrari 488", 5000424.24);
proprietario1.SetCarro(Ferrari);
proprietario1.GetCarro();
