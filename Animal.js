class Animal {
    constructor(name, age, weight, limbAmount) {
      this.name = name;
      this.age = age;
      this.weight = weight;
      this.limbAmount = limbAmount;
    }
  
    move() {
      console.log(`${this.name} is moving.`);
    }
  
    say() {
      console.log(`${this.name} is making a sound.`);
    }
  
    eat(food) {
      console.log(`${this.name} is eating ${food}.`);
    }
  
    static isAnimal(obj) {
      return obj instanceof Animal;
    }
  }

  class Mammal extends Animal {
    constructor(name, age, weight, limbAmount) {
      super(name, age, weight, limbAmount);
    }
  }
  
  class Bird extends Animal {
    constructor(name, age, weight, limbAmount) {
      super(name, age, weight, limbAmount);
    }
  
    move() {
      console.log(`${this.name} is flying.`);
    }
  
    static isBird(obj) {
      return obj instanceof Bird;
    }
  }
  
  class Fish extends Animal {
    constructor(name, age, weight, limbAmount) {
      super(name, age, weight, limbAmount);
    }
  
    move() {
      console.log(`${this.name} is swimming.`);
    }
  
    static isFish(obj) {
      return obj instanceof Fish;
    }
  }
  
  class Predators extends Mammal {
    constructor(name, age, weight, limbAmount) {
      super(name, age, weight, limbAmount);
    }
  
    say() {
      console.log(`${this.name} is growling.`);
    }
  
    static isPredators(obj) {
      return obj instanceof Predators;
    }
  }
  
  class Whales extends Mammal {
    constructor(name, age, weight, limbAmount) {
      super(name, age, weight, limbAmount);
    }
  
    move() {
      console.log(`${this.name} is swimming in the ocean.`);
    }
  
    static isWhales(obj) {
      return obj instanceof Whales;
    }
  }
  
  class Primates extends Mammal {
    constructor(name, age, weight, limbAmount) {
      super(name, age, weight, limbAmount);
    }
  
    say() {
      console.log(`${this.name} is chattering.`);
    }
  
    static isPrimates(obj) {
      return obj instanceof Primates;
    }
  }
  
  const dog1 = new Predators("Dog 1", 5, 20, 4);
  const dog2 = new Predators("Dog 2", 6, 22, 4);
  
  const dolphin1 = new Whales("Dolphin 1", 10, 500, 0);
  const dolphin2 = new Whales("Dolphin 2", 12, 550, 0);
  
  const human1 = new Primates("Human 1", 30, 70, 2);
  const human2 = new Primates("Human 2", 35, 75, 2);
  
//Тест
  dog1.move();
  dog2.say();
  dog1.eat("meat");
  console.log(Predators.isPredators(dog1));
  
  dolphin1.move();
  dolphin2.say();
  dolphin1.eat("fish");
  console.log(Whales.isWhales(dolphin2));
  
  human1.move();
  human2.say();
  human2.eat("fruits");
  console.log(Primates.isPrimates(human1));
  