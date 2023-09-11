/** 클래스 정적 메소드 */
class Person {
  //생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //전역 info --> 클래스명.메소드명 으로 호출
  static info() {
    console.log("I am a Person, nice to meet you");
  }

  //greet 함수
  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const alberto = new Person("Alberto", 30);
alberto.greet(); // Hi, my name is ALberto and I'm 30 years old

Person.info(); // 전역메소드 호출 : I am a Person, nice to meet you
// alberto.info(); //Error.
