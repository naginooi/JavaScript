/** var - function scope variable */

// var은 함수 내에서만 지역 변수로 유지되기 때문에, 
// 아래 코드에서는 전역 변수로 취급된다.
for (var i = 0; i < 10; i++) {
  var leak = "I am available outside of the loop";
}
console.log(i);
console.log(leak);

//함수 스코프 (지역 스코프)
function myfunction() {
  var fscope = "I am available inside this function";
  console.log(fscope);
}
console.log(fscope); //에러 발생, 함수 스코프 영역을 벗어남

// parameter은 로컬 변수
function myfunction2(name) {
  console.log(name);
}
myfunction2('홍길동')
