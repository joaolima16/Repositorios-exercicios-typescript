"use strict";
class Car {
    constructor(value, maxSpeed, model) {
        this.Value = value;
        this.maxSpeed = maxSpeed;
        this.model = model;
    }
    GetCar() {
        console.log(this.Value);
        console.log(this.maxSpeed);
        console.log(this.model);
    }
}
const civic = new Car(5000, 250, "Civic");
console.log(civic.GetCar);
