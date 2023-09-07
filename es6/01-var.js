/** var - function scope variable */

//블록 스코프
for (var i = 0; i < 10; i++) {
  var leak = "I am available outside of the loop";
}
console.log(i);
console.log(leak);

var fscope = "I am available inside this function";
//함수 스코프 (지역 스코프)
function myfunction() {
  console.log(fscope);
}
console.log(fscope); //에러 발생, 함수 스코프 영역을 벗어남

// parameter은 로컬 변수
function myfunction2(name) {
  console.log(name);
}
myfunction2('홍길동')