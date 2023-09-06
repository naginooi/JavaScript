/** 함수 표현식 */
function greeter1(name) {
  greeter2("홍길동누나");
  console.log("hello~~ " + name);
}

const greeter2 = function (name) {
  greeter3("홍길순");
  console.log("hello~~ " + name);
}

const greeter3 = (name) => {    //ES6에 추가된 Arrow function
  console.log("hello~~ " + name);
}


greeter1("홍길동");

//hello~~ 홍길순
//hello~~ 홍길동누나
//hello~~ 홍길동