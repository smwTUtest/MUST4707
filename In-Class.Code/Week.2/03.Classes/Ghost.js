class Ghost {
  constructor(someRandomName, someAge, origin, scariness) {
    this.name = someRandomName;
    this.history = {
      age: someAge,
      origin: origin,
    };
    this.scareRating = scariness;
  }
  boo() {
    console.log("BOO!");
    console.log("BOO!");
    console.log("BOO!");
    console.log("BOO!");
    console.log("BOO!");
    console.log("BOO!");
  }
  fly() {
    console.log("Oh, no. That ghost is flying!");
  }
  getHistory() {
    console.log(
      `${this.name} is ${this.history.age} years old and is from ${this.history.origin}`
    );
  }
}

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cute = true;
    this.soft = true;
  }
  wag() {
    console.log("Dog is wagging tail!");
  }
}

export { Ghost, Dog };
