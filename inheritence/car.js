class Car{
    constructor(name, model, fuelType = "diesel") {
        this.name = name,
        this.model = model,
        this.fuelType=fuelType  
    }
    getDetails() {
        console.log(`This car name is ${this.name} of model: ${this.model} use ${this.fuelType} as a fuel for running`);
    }
}

class Suzuki extends Car{
    constructor(name, model, fuelType, madeIn) {
        super(name, model, fuelType);
        this.madeIn = madeIn;
    }
}

let maruti = new Suzuki("maruti suzuki", "old", "petrol", 2009);

maruti.getDetails();