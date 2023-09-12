/** 프록시 생성 */
//원본 객체
const dog = { breed: 'German Shephard', age: 5 };

//프록시 객체
const dogProxy = new Proxy(dog, {
  get(target, breed) {
    return target[breed].toUpperCase();
  },
  set(target, breed, value) {
    console.log('changing breed to ...');
    target[breed] = value;
  },
});

console.log(dogProxy.breed);
console.log((dogProxy.breed = 'Labrador'));
console.log(dogProxy.breed);

/** 프록시 활용 : 데이터 검증 */
const validateAge = {
  set: function (object, property, value) {
    if (property === 'age') {
      if (value < 18) {
        throw new Error('you are too young!!');
      } else {
        //기본 동작
        console.log(`you are age is ${value}`);
        object[property] = value;
        return true;
      }
    }
  },
};

const user = new Proxy({}, validateAge);
//user.age = 17;
user.age = 21;
