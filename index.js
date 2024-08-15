import Factory from "./src/VFactory.js";

const factory = new Factory();

const newCar =factory.NewVehicle("car","Toyota");
const newBoat=factory.NewVehicle("boat","Toyota");

console.log(newCar.turnOn());
console.log(newBoat.turnOn());