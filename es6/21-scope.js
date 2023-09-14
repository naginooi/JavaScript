const a = 200;
{
  const a = 100;
  console.log(a); //100
}
console.log(a); //200

function print() {
  const message = 'Hello';
  console.log(message); // Hello
}
print();

function sum(a, b) {
  console.log(a + b); // 3
}
sum(1, 2);
// console.log(a + b); // error
