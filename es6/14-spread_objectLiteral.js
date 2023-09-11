/** 객체 리터럴과 스프레드 */
let person = {
  name: 'Alberto',
  surname: 'Montalesi',
  age: 30,
};

let clone = { ...person };
console.log(clone); // { name: 'Alberto', surname: 'Montalesi', age: 30 }

//person 속성 추가
person.addr = 'gangnam';

console.log(person); // { name: 'Alberto', surname: 'Montalesi', age: 30, addr: 'gangnam' }
console.log(clone); // { name: 'Alberto', surname: 'Montalesi', age: 30 }