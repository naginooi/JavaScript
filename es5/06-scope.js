/** Global Scope(전역 스코프) */
var num1 = 1;

if (num1 == 1) {
  var num2 = 100;
  console.log("num2 : " + num2) //num2 : 100
}
console.log("num2 : " + num2); //num2 : 100


/** Block Scope(블록 스코프) */
let num3 = 1;
if (num3 == 1) {
  let num4 = 100;
  console.log("num4 : " + num4); //num4 : 100
}
console.log("num4 : " + num4);  //에러 발생 num4는 블록 스코프 변수이므로..