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
const markup = `
${people.map(person => `${person.name}`)}
`;
console.log(markup);



