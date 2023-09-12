/** 제너레이터 */
function* fruitList() {
  yield 'Banana'; //반환할 컨텐츠 앞에 yield 정의
  yield 'Apple';
  yield 'Orange';
}

const fruits = fruitList();

//제너레이터
console.log(fruits.next()); //{ value: 'Banana', done: false }
console.log(fruits.next()); //{ value: 'Apple', done: false }
console.log(fruits.next()); //{ value: 'Orange', done: false }
console.log(fruits.next()); //{ value: undefined, done: true }

/** 제너레이터 종료 */
function* fList() {
  yield '바나나';
  yield '복숭아';
  yield '사과';
  yield '멜론';
  yield '수박';
}

const fts = fList();

console.log(fts.return()); //{ value: undefined, done: true }
