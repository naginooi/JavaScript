const car1 = { //본인 기준
  color: "red",
  logColor: function () {
    console.log("color : " + this.color); //color : red
    console.log("this(객체자신) : " + this); //this(객체자신) : [object Object]
  }
};

car1.logColor();

function logThis() {
  console.log("\n전역범위에서의 this는 Window객체 참조\n");
  //전역범위에서의 this는 Window객체 참조
  console.log(this); //Window
}
logThis();