function getHTML() {
  //1초후에 HTML문자를 리턴하는 프로미스 생성
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('HTML');
    }, 1000);
  });
}

function getCSS() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('CSS');
    }, 1000);
  });
}
function getJS() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('JS');
    }, 1000);
  });
}

//비동기
async function getResult() {
  const html = await getHTML();
  const css = await getCSS();
  const js = await getJS();

  return [html, css, js];
}

getResult().then((result) => {
  console.log(result);
});

// getHTML().then((html) => {
//   console.log(html);
// });
// getCSS().then((css) => {
//   console.log(css);
// });
// getJS().then((js) => {
//   console.log(js);
// });
