class Vehicle {
    constructor(type) {
        this.type = type;
    }
    turnOn() {
        throw new Error("No está definido");
    }
}

export default Vehicle;