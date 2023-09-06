////객체 안에 객체가 들어갈 수 있다!

const person = {
  hong: { name: "홍길동", age: 20 },
  kim: { name: "김영희", age: 21 },
  park: { name: "박주호", age: 22 }
};

console.log(person.hong.name) // 홍길동
console.log(person.kim.age) // 21


////객체 안에 배열도 들어갈 수 있다!

const person2 = {
  plist: [
    { name: "홍길동", age: 20 },
    { name: "김영희", age: 21 },
    { name: "박주호", age: 22 }
  ]
};

console.log(person2.plist[1]) // { name: '김영희', age: 21 }

const person3 = {
  plist: [{ name: "홍길동", age: 20 },
  { name: ["김길동", "김철수"], age: 30 },
  { name: "박길동", age: 40 }]
};

console.log(person3.plist[1].name) //['김길동', '김철수']

