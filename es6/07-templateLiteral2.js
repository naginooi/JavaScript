/** 중첩 템플릿 */
const people = [{
  name: '홍길동',
  age: 27,
},
{
  name: '홍홍',
  age: 27,
},
{
  name: '홍길순',
  age: 31,
},
] //객체를 가지고 있는 배열

/* 

arr.map() : 값을 여러개 가지고 있는 배열에서 모든 값을 꺼내고자 할 때,
            원본 배열의 길이와 같은 길이로 새로운 배열을 만들 때 사용

arr.map( () => return `${value}`) )

*/
const markup = `
${people.map(person => `${person.name}`)}
`;
console.log(markup);



