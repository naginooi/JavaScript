/** 객체 속성에 대한 식별자 얻어오기 */
const office2 = { 
  [Symbol("Tom")]: "CEO",
  [Symbol("Mark")]: "CTO",
  [Symbol("Mark")]: "CIO",
}; // [] : 심볼값을 객체로 받아오려고 리스트화

console.log(office2); //{ [Symbol(Tom)]: 'CEO', [Symbol(Mark)]: 'CTO', [Symbol(Mark)]: 'CIO' }

//office 객체의 symbol 속성을 배열로 얻어오기
const symbolList = Object.getOwnPropertySymbols(office2);
console.log(symbolList); //[ Symbol(Tom), Symbol(Mark), Symbol(Mark) ]

//속성 배열을 이용하여 속성 값 가져오기
const value = symbolList.map(symbol => office2[symbol]);
console.log(value); //[ 'CEO', 'CTO', 'CIO' ]