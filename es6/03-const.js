/** const - block scope variable */
const z = "I am a constant"; //상수
//z = "I can't be reassign"; // 상수값이기 때문에 재할당 불가

console.log(z);

/** const - 객체 정의 */
const person = {
  name: "홍길동",
  age: 30
}; //레퍼런스 변수

person.age = 35;
console.log(person.age);