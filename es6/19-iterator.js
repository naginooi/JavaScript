//iterator protocol, iterable protocol 포함하여 생성된 내장객체는 순환참조가 가능하다.
//spread 연산자, for...of 을 사용할 수 있다.
//msdn api에서 prototype을 확인함

const strArray = ['바나나', '오렌지', '복숭아'];
for (const str of strArray) {
  console.log(str);
  // 바나나
  // 오렌지
  // 복숭아
}

const charArray = 'hello';
for (const char of charArray) {
  console.log(char);
  // h
  // e
  // l
  // l
  // o
}

const tmap = new Map();
//Map 객체 생성
tmap.set(0, 'test1');
tmap.set(1, 'test2');
//
const tmapArray = tmap[Symbol.iterator]();
//반복 필요한 구문 (for of 사용 가능) 으로 사용할 수 있게 만든다

console.log(tmap);
//Map(2) { 0 => 'test1', 1 => 'test2' }
console.log(tmap.get(1));
//test2
for (const ta of tmapArray) {
  console.log(ta);
  //[0, 'test1']
  //[1, 'test2'];
}

const tObj = {
  name: '홍길동',
  age: 20,
};

/* 
const tArray = tObj[Symbol.iterator]();
for (const obj of tArray) {
  console.log(obj); // Error.
} 
*/
