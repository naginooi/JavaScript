const car = {
  wheels: 4,
  color: "red",
  "goes fast": true   //속성이 문장인 경우에는 따옴표로 묶기
};

//console.log(car.goes fast);  //에러 발생
console.log(car['goes fast']);