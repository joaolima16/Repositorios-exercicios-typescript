"use strict";
function ConcactArray(...args) {
    return args.reduce((ac, valor) => ac + valor + ", ");
}
function SomeValues(...args) {
    return args.reduce((index, value) => index + value);
}
const result = ConcactArray("joao", "teset", "teste");
const numbers = SomeValues(10, 10, 10, 10);
console.log(numbers);
console.log(result);
