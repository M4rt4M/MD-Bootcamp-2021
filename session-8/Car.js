// Naming convention - Pascal case (starts with capital letter)
// Best practice: each class in a separate file

export class Car {
    constructor(engineSize, make, model) {
        this.engineSize = engineSize; // binding 
        this._make = make; // private binding
        this._model = model;
    }

    setEngineSize(engineSize) { // setters just for properties that could change
        this.engineSize = engineSize;
    }

    getEngineSize() {
        return this.engineSize;
    }
}