/** 객체 속성에 대한 식별자 */
const office = {
  "Tom": "CEO",
  "Mark": "CTO",
  "Mark": "CIO",
};
for (person in office) {
  console.log(person);
}

const office2 = {
  [Symbol("Tom")]: "CEO",
  [Symbol("Mark")]: "CTO",
  [Symbol("Mark")]: "CIO",
};
for (person in office2) {
  console.log(person);
}

/** 객체 속성에 대한 식별자 얻어오기 */
const office3 = {
  [Symbol("Tom")]: "CEO",
  [Symbol("Mark")]: "CTO",
  [Symbol("Mark")]: "CIO",
};

//office 객체의 symbol 속성을 배열로 얻어오기
const symbolList = Object.getOwnPropertySymbols(office3);
console.log(symbolList);

//속성 배열을 이용하여 속성 값 가져오기
const value = symbolList.map(symbol => office3[symbol]);
console.log(value);