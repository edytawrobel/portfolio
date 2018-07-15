class Person {
    constructor(name = 'Anonymous', age = 26) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}`;
    }

    getDescription() {
        return this.getGreeting() + ` and I am ${this.age} old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription(); 
        
        if (this.hasMajor()) {
           description += ` I study ${this.major}.` 
        }
        return description;
    }
}

const me = new Person('Edyta', 28);
const him = new Person('Andrew');
const other = new Student('Amanda', 25, 'maths');

// console.log('hi');
console.log(other.getDescription()); 
// console.log(him.getGreeting());
console.log(other);


// Car
// make
// model
// vin
// getDescription

