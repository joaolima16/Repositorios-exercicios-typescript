"use strict";
function AddOrConcat(a, b) {
    if (typeof a === "string" || typeof b === "string")
        return `${a}${b}`;
    if (typeof a === "number" || typeof b === "number")
        return a + b;
}
function AddOrRemove(option, a, b) {
    if (typeof option === "string" && option == "Remove")
        return a - b;
    if (typeof option === "string" && option == "Add")
        return a + b;
}
const Result = AddOrConcat("a", "b");
const Add = AddOrRemove("Add", 10, 5);
const Remove = AddOrRemove("Remove", 5, 3);
console.log(Result);
console.log(Add);
console.log(Remove);
