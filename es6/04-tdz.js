/** TDZ(Temporal Dead Zone) */

// var : 선언, 초기화 -> 할당
console.log(i);
var i = "I am a var";

// let, const : 선언 -> TDZ -> 초기화 -> 할당
console.log(j);
let j = "I am a let"; //ReferenceError: Cannot access 'j' before initialization

// 초기화 단계를 거치고 나면 해당 변수에 임시 메모리 공간이 할당되기 때문에
// 부여된 메모리는 존재하나, 값은 존재하지 않는 undefined가 담기게 되는 것.
// 사실은 둘 다 호이스팅이 가능하지만 let과 const는 TDZ가 존재하기 때문에
// 초기화 단계를 거치기 전에, 즉 해당 공간에서 머무르는 변수를 참조하려 시도하니까 참조 에러(Reference Error)를 발생