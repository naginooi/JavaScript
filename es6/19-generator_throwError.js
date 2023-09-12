/** .throw()로 오류 잡기 */
function* gen() {
  try {
    yield 'Trying..';
    yield 'Trying harder ..';
    yield 'Trying even harder..';
  } catch (err) {
    console.log('Error : ' + err); //Error : ooops
  }
}

const myGenerator = gen();
console.log(myGenerator.next()); //{ value: 'Trying..', done: false }
console.log(myGenerator.next()); //{ value: 'Trying harder ..', done: false }
console.log(myGenerator.throw('ooops')); // { value: undefined, done: true }
