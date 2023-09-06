const car = {
  color: "red"
}; //heap에 저장됐다. (ex.x100이라는 주소에)
const secondCar = car; // 같은 주소를 가르킴 (객체가 똑같다) (하나가 두개를 가르킨다)
const thirdCar = Object.assign({}, car); //heap에 생성된 구조를 복사(새로운 주소 할당)

car.wheels = 4;

console.log("car.color : " + car.color); //car.color : red
console.log("secondCar.color : " + secondCar.color); //secondCar.color : red
console.log("thirdCar.color : " + thirdCar.color); //thirdCar.color : red
console.log("car.wheels : " + car.wheels); //car.wheels : 4
console.log("secondCar.wheels : " + secondCar.wheels); //secondCar.wheels : 4
console.log("thirdCar.wheels : " + thirdCar.wheels); //thirdCar.wheels : undefined
console.log("\n");
console.log(car == secondCar); //true
console.log(car === secondCar); //true
console.log(car == thirdCar); //false
console.log(car === thirdCar); //false