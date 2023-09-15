function outer() {
  const a = 1;
  function inner() {
    console.log(a); //1
  }
  inner();
}
outer();
