function ConcactArray(...args: string[]): string {
    return args.reduce((ac: string, valor: string) => ac + valor + ", ");
}

function SomeValues(...args: number[]): number {
    return args.reduce((index, value) => index + value);
}
const result = ConcactArray("joao", "teset", "teste");
const numbers = SomeValues(10, 10, 10, 10);

console.log(numbers);
console.log(result);
