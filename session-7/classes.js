class Person { //object template
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    setName(name) {
        this.name = name;
        // do not do this outside of the object template
        // folow S.O.L.I.D. principles
    }

    getName() {
        return this.name;
    }
};

const frank = new Person('Frank', 63, 'male');

console.log(frank.getName());

class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    move() {
        console.log(this.name, "is moving")
    }
};

class Lion extends Animal {
    constructor(name, age) {
        super(name);

        this.age = age;
    }

    getAge() {
        return this.age;
    }
}; 

const zebra = new Animal("Bob");
const lion = new Lion("Leo", 17);
console.log(lion.getAge());
// console.log(zebra.getAge()); zebra does not have this function