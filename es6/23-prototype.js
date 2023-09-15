// 객체(오브젝트)의 타입 비교 : Object.prototype.__proto__
const obj1 = new Object();
const obj2 = new Object();
console.log(obj1.__proto__ == obj2.__proto__); // true

// 클래스 : 여러 개의 객체를 생성하는 틀
class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}
class Actor extends Person {
  constructor(name, age, movieName) {
    //Actor 객체가 생성되기 전에 Person이 생성되어야 하므로
    //Person의 생성자를 반드시!! 맨 처음 호출해야 함
    super(name, age);
    this.movieName = movieName;
  }
}
Person.prototype.eat = function () {
  console.log(`${this.name} 밥을 먹어요`);
};

Actor.prototype.act = function () {
  console.log(`${this.name} 배우가 연기를 해요`);
};

const hong = new Actor("hong", 20, "도깨비");
const park = new Person("park", 21);
const kim = new Person("kim", 22);
console.log(hong.name); //hong
console.log(park.age); //21
hong.eat();
hong.act();
