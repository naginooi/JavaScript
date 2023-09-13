//generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.
//generator is a subclass of the hidden Iterator class.

/** 제너레이터 */
function* fruitList() {
  yield 'Banana'; //반환할 컨텐츠 앞에 yield 정의
  yield 'Apple';
  yield 'Orange';
}

let fruits = '';
for (const fruit of fruitList()) {
  fruits = fruits + fruit + ' ';
}

console.log(fruits);

const fruitGen = fruitList();
//객체타입으로 반환
// console.log(fruitGen.next()); //{ value: 'Banana', done: false }
// console.log(fruitGen.next().value); //Apple

while (true) {
  const data = fruitGen.next();
  if (!data.done) console.log(data.value); //done: true 일 때 value는 undefined. next()가 끝났다는 뜻
  else break;
}
