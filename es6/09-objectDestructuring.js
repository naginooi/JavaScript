/** 객체 구조분해 - ES6 이전 */
var person = {
  first: "hong",
  last: "gildong",
};

var first = person.first;
var last = person.last; 

/* console.log(`first : ${first}`);
console.log(`last : ${last}`); */


/** 객체 구조분해 - ES6 */
var person2 = {
  first2: "hong",
  last2: "gildong",
  age: "24"
};

const { first2, last2, age } = person2;
//원래 이름과 똑같이 정의

console.log(`first : ${first2}`);
console.log(`last : ${last2}`);
console.log(`age : ${age}`);