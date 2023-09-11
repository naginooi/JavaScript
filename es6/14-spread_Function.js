/** 함수와 스프레드 연산자 */

function doSuff(x, y, z) {
  console.log(x + y + z);
}

//기존 방식
var args = [0, 1, 2];
doSuff.apply(null, args);  //함수 호출, 인수 전달 : //3

//스프레드 문법
doSuff(...args);   //3 
console.log(args); //[ 0, 1, 2 ]