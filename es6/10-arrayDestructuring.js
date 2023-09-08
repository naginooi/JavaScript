/** 배열 구조분해 */
const person = ["hong", "gildong", 30];
const [name, sname, age] = person;

console.log('--------------> person');
console.log(name, sname, age);
console.log(`name : ${name}, sname : ${sname}, age : ${age}`);

/** person2 */
const person2 = ["hong", "gildong", 30];
const [name2, sname2] = person2;

console.log('--------------> person2');
//console.log(name2, sname2, age2); //age2는 변수로 할당되지 않아, ReferenceError 발생
//RefereceError : 대상이 없을 때 에러 발생
console.log(`name : ${name2}, sname : ${sname2}`);

/** person3 & rest operator(레스트 연산자) */
const fruits = ["사과", "복숭아", "수박", "자두", "멜론"];
const [f1, f2, ...food] = fruits;


console.log('--------------> fruits');
console.log(f1, f2);
console.log(food);

for (const f of fruits) {
  console.log(f); 
} // 배열 반복문

for (const f in food) {
  console.log(food[f]);
} // 객체 반복문


