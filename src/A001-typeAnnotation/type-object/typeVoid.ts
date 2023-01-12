function NoReturn(name: string): void {
    console.log(name);
}

const User: {
    nome: string;
    idade: number;
} = {
    nome: "Joao",
    idade: 53,
};
User.idade = 51;
User.nome = "jose";

console.log(User);
NoReturn("Joao");
