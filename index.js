/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };


  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */

  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */

 function Person(name, age) {
    this.name = name,
    this.age = age,
    this.stomach = [];
  }
  Person.prototype.poop = function () {
    return this.stomach = [];
  }
  Person.prototype.eat = function(someFood){
    if(this.stomach.length < 10){
      this.stomach.push(someFood);
    }else{
      this.poop();
    }};
  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }

  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */

 function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
  }

  Car.prototype.fill = function(gallons){
    this.tank = this.tank + gallons;
    return this.tank;
  }

  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby (name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
  }
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(favoriteToy){
 return `Playing with ${this.favoriteToy}`;
}


  /*
    TASK 4
    In your own words explain the four principles for the "this" keyword below:

    1. A new Object is created while using "new" and the "this" keyword will point to it.

    2. When .call, .apply, .bind are used to call a function, the "this" keyword in the function is the Object which is passed in as the arguement.
    We are explicitly indicating what the "this" key word refers to.

    3. When the dot notation is used, the "this" keyword is the object to the left of the function being invoked.
    We are implicitly binding the "this" keyword to the object. It represents the majority of use cases.

    4. When a function is invoked without any of the other principles, the "this" keyword is refering to the global object. In the browser, the global object is
    the window. Technically it is also considered an implicit binding, but when a function is not declared as a method, it becomes a property of the global object.
  */


  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person,
    Car,
    Baby
}