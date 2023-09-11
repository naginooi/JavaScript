/** set/get 메소드 */
class Person {
  //생성자
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.nickname = "";
  }

  //set method
  set nicknames(value) {
    this.nickname = value;
    console.log(this.nickname); // Albi
  }

  //get method
  get nicknames() {
    console.log(`Your nickname is ${this.nickname}`); // Your nickname is Albi
  }
} //class Person

const alberto = new Person("Alberto", "Montalesi");
alberto.nicknames = "Albi"; //set
alberto.nicknames; //get
