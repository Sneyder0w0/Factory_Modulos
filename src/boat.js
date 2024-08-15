import Vehicle from "./vehicle.js";

class Boat extends Vehicle {
    constructor(model) {
        super("boat");
        this.model = model;
    }
    turnOn() {
        return `El bote del modelo ${this.model} está encendido`;
    }
}

export default Boat;
