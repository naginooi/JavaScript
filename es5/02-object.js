const car = {
  wheels: 4,
  color: "red",
  drive: function () {
    console.log("wroom wroom");
  }
};

console.log(Object.keys(car)[0]) // wheels
console.log(Object.values(car)[0]) // 4
console.log(typeof Object.keys(car)[0]) // String

/* 점 표기법 */
car.wheels // 4
car.color // red

/* 괄호 표기법 : 괄호 안에 꼭 "" 쓰기 */
car["wheels"] // 4
car["color"] // red
