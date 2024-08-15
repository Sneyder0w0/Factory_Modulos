import Car from "./car.js";
import Boat from "./boat.js";

class Factory{
    NewVehicle(type,model){
        switch(type){
            case "car":
                return new Car(model);
            case "boat":
                return new Boat(model);
            default:
                throw new Error("No chilbe");
        }
    }
}

export default Factory;