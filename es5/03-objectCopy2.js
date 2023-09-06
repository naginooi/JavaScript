const empty1 = {}; //객체
const empty2 = {}; //객체

console.log(empty1 == empty2); //false 
console.log(empty1 === empty2); //false 
/* 
== 값만 비교
=== 타입도 비교
*/

const obj1 = { a: 100 };
const obj2 = { a: 100 };

console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false


// 객체는 지금 현재 상태로 비교하는 것이 아니라, 나중에 뭐가 들어올지도 모르는 미래까지 생각해서 비교하기 때문에 똑같이 보여도 false값 리턴