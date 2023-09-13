/** 제너레이터를 사용하여 배열 반복하기 */
const fruitList = ['바나나', '사과', '오렌지', '멜론', '복숭아'];

function* loop(arr) {
  for (const item of arr) {
    yield `I like to eat ${item}`;
  }
}

const fruitGenerator = loop(fruitList); //iterator 표준을 포함하고 있기 때문에 가능
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next().value);
// { value: 'I like to eat 바나나', done: false }
// { value: 'I like to eat 사과', done: false }
// { value: 'I like to eat 오렌지', done: false }
// I like to eat 멜론
