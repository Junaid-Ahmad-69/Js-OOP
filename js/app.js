"use strict";

const Person = function (name, birth, age) {
  // Instance property is created to add these properties to the Person object
  this.firstName = name;
  this.birthDate = birth;
  this.age = age;

  // Methods
  // Never Do this in real code make a prototypal Inheritance for this type of Method
  // const newDate = new Date().getFullYear()
  // this.calcAge = function(){
  //     return newDate - this.age
  // }
};

// Now, Instance Created using the new Key word which is the Instance of Person object
const jonas = new Person("jj", 34, 1998);

// When using the new Keyword
// 1. New {} is created
// 2. function is called , this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// console.log(jonas.calcAge())

console.log(jonas instanceof Person);
console.log(Person.prototype);
// Prototypes
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.age);
};
jonas.calcAge();

console.log(jonas.__proto__ === Person.prototype);
console.log(jonas.__proto__);
console.log(Person.prototype.isPrototypeOf(jonas)); // its just check if the jonas has new instance of the given obj like Person.prototype

// When you want to add the own __proto__ to ay object

Person.prototype.species = "Home Sapiens";
console.log(jonas.species);

console.log(jonas.hasOwnProperty("firstName")); // Give ture becase it define in the OBject constructor
console.log(jonas.hasOwnProperty("species")); // Give falsebecause it was explicitly add using the prototype in person object which is not core related to the Object




// The difference between `__proto__` and `prototype` is simple: `__proto__` is a property of an object instance, 
// while `prototype` is a property of a constructor function. When you use `__proto__` , you're looking up properties and methods on an object's prototype chain.

// Prototypal Inheritance and Prototype Chaing

console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto___proto__);

const arr= [1,2,4,5,5,5,5,5,5]
Array.prototype.unique = function(){
    return [...new Set(this)]
    
}
console.log(arr.unique());


///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed
}

const bwm = new Car("Bmw", 120);
const mercedes = new Car("Mercedes",95)

Car.prototype.accelerate = function() {
    this.speed += 10
    console.log(`${this.make} going at ${this.speed}  km/h`);

}

Car.prototype.brake = function() {
    this.speed -=5
    console.log(`${this.make} going at ${this.speed}  km/h`);
}
bwm.accelerate()
bwm.accelerate()
bwm.brake()
bwm.accelerate()




// class
// 1) Classes are  Not Hoisted
// 2) Classes are executed in stict mode
// 3) Classes are first class citizes

class PersonBio {
    constructor(firstName, birth){
        this.firstName = firstName;
        this.birth = birth;
    }

    // Also define method in side the class
    calcAge(){
        console.log(new Date().getFullYear() - this.birth);
    }


}

const john = new PersonBio("jo", 1998);
john.calcAge()


// Static Method

// Array.from() is static method its always using with Array not applied on any variable beacuse it not make a method in prototype chain it is property of Array

// Not  Like
// Array.prototype.from = function(){ e.g}

//Like this
// const Array = function(form) { this.form} 

// Using the Object .create


const PersonProto = {
    calcAge(){
        console.log(2044 - this.birthYear);
    },
    init(first, second){
        this.first = first;
        this.second = second;
    }
}

const jj = Object.create(PersonProto)
console.log(jj);
jj.init("ddd", "hhhh")
console.log(jj);
jj.birthYear = 300;
// jj.calcAge(333)
console.log(jj);




///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class car{
    constructor(make, speed){
        this.make= make;
        this.speed= speed;
    }
    accelerate(){
        this.speed +=10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake(){
        this.speed -=5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    get speedUs(){
        return this.speed / 1.6;
    }
    set speedUs(speed){
        this.speed = speed * 1.6;
    }

}
const ford = new car('ford', 120)
console.log(ford.speedUs);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUs = 50
console.log(ford);




// Inheritance bwterrn classse and method


// Base Class / Parent Class
const Parent = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


// Not the student class and parent has has some properties which is not changed in future 
// then we call the parent in Student class  like this

// const Student = function (firstName, lastName, course){
//     Parent(firstName, lastName)
//     this.course = course;
// }

// Is the above code work not beacause you just call the parent class in student which is function expression while calling the function in 
// sub class which is student class it loss his /****** this Argument*******/ so we use the /****** Call method *******/ to define there this     


// sub class / child class
const Student = function (firstName, lastName, course){
    // this.firstName = firstName;
    // this.lastName = lastName;
    Parent.call(this, firstName, lastName);
    this.course =course;
}

Student.prototype.detail = function (){
    console.log(`My name is ${this.firstName} and my name last name is ${this.lastName}`);
}

const info  = new Student('ddd', "llll", "cs");
console.log(info);












