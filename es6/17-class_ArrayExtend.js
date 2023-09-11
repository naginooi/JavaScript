/** 클래스를 활용하여 배열 확장하기 */
class ClassRoom extends Array {
  constructor(name, ...students) {
    //rest
    super(...students); //spread
    this.name = name;
  }
  add(student) {
    this.push(student);
  }
}

const myClass = new ClassRoom(
  "1A", //name
  { name: "Tom", mark: 6 },
  { name: "Tim", mark: 5 },
  { name: "Jon", mark: 8 },
  { name: "Jim", mark: 10 }
);
console.log("---------------------->> myClass");
console.log(myClass);
/* ClassRoom(4) [
  { name: 'Tom', mark: 6 },
  { name: 'Tim', mark: 5 },
  { name: 'Jon', mark: 8 },
  { name: 'Jim', mark: 10 },
  name: '1A'
] */

console.log("---------------------->> myClass add ");
myClass.add({ name: "Jimmy", mark: 10 });
console.log(myClass);
/* ClassRoom(5) [
  { name: 'Tom', mark: 6 },
  { name: 'Tim', mark: 5 },
  { name: 'Jon', mark: 8 },
  { name: 'Jim', mark: 10 },
  { name: 'Jimmy', mark: 10 },
  name: '1A'
] */
console.log("---------------------->> myClass[4]");
console.log(myClass[4]); //인덱스 4번지 출력
// { name: 'Jimmy', mark: 10 }

console.log("---------------------->> myClass 배열 출력");
for (const student of myClass) {
  console.log(student);
}
/* { name: 'Tom', mark: 6 }
{ name: 'Tim', mark: 5 }
{ name: 'Jon', mark: 8 }
{ name: 'Jim', mark: 10 }
{ name: 'Jimmy', mark: 10 } */
