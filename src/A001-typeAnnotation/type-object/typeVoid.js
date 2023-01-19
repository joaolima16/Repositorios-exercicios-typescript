"use strict";
function NoReturn(name) {
    console.log(name);
}
const User = {
    nome: "Joao",
    idade: 53,
};
User.idade = 51;
User.nome = "jose";
console.log(User);
NoReturn("Joao");
