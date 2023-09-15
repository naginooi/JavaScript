class Person {
  constructor() {
    (this.name = "hong"), (this.age = 30);
  }
}

let hong = new Person();
console.log(hong); //Person { name: 'hong', age: 30 }
