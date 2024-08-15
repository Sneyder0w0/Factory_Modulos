import Vehicle from "./vehicle.js";

class Car extends Vehicle {
    constructor(model) {
        super("car");
        this.model = model;
    }
    turnOn() {
        return `El carró del modelo ${this.model} está encendido`;
    }
}

export default Car;