/** 심벌의 고유성 */
//원시데이터타입을 상수형태로 만들어주는 기능
const me = Symbol("Alberto"); 
console.log(me); //Symbol(Alberto)

/** 같은 값을 가진 새로운 심벌을 만들면 어떻게 될까? */
const clone = Symbol("Alberto");
console.log(clone); //Symbol(Alberto)

//심벌 비교
console.log(me == clone);   //false
console.log(me === clone);  //false

const symObj = Object(me) 
console.log(symObj); //[Symbol: Symbol(Alberto)]