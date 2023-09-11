/** 배열의 복사 - 기존 배열의 참조 */

const veggie = ['tomato', 'cucumber', 'beans'];
const newVeggie = veggie;

//veggie 복사본을 생성한 것처럼 보이지만, 다음을 확인
veggie.push('peas');

console.log(veggie);
// [ 'tomato', 'cucumber', 'beans', 'peas' ]
// 기존 배열에도 영향을 끼친다. (주소값이 바뀐게 아니기 때문)
console.log(newVeggie);
// [ 'tomato', 'cucumber', 'beans', 'peas' ]