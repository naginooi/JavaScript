/** 일반적인 함수식 : 호이스팅 가능 */
greeter1("홍길순");

function greeter1(name) {
  console.log("hello~~ " + name);
}


greeter1("홍길동");

/** anonymous(익명) 함수 표현식 - 변수에 함수식을 넣은 형식, 호이스팅 주의 */
greeter2("홍길순");  //에러발생, 호이스팅이 안됨을 증명

const greeter2 = function (name) {
  console.log("hello~~ " + name);
}

greeter2("홍길동");