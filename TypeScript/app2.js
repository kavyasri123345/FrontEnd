"use strict";
let employee = {
    name: "Alice",
    age: 30
};
console.log(employee);
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    drive() {
        console.log(`${this.make} ${this.model} is driving!`);
    }
}
const car = new Car("Tesla", "Model 3");
car.drive();
