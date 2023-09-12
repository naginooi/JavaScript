/** 제너레이터 */
function* fruitList() {
  yield 'Banana'; //반환할 컨텐츠 앞에 yield 정의
  yield 'Apple';
  yield 'Orange';
}

const fruits = fruitList();

//제너레이터
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
