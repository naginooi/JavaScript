/** let */
let x = "global"; //글로벌 변수
if (x === "global") {
  let x = "block"; //로컬 변수 
  console.log(x);  //block
}//block-scope
console.log(x);  //global


/** var */
var y = "global"; //글로벌
if (y === "global") {
  var y = "block-scope"; //재선언
  console.log(y); //block-scope
}
console.log(y); //block-scope