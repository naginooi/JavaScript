/** 태그된 템플릿 리터럴 */
let person = "hong";
let age = 25;

function myTag(strings, personName, personAge) {
  let str = strings[1];  //'is a'
  let ageStr;

  personAge > 50 ? ageStr = "grandPa" : ageStr = "youngster";

  return personName + str + ageStr;
}

let sentence = myTag`That ${person} is a ${age}!!`;
// ``으로 매개변수 설정 가능
//strings : ['That ',' is a',' !!']
//personName = hong
//personAge = 25
console.log(sentence);  //hong is a youngster
