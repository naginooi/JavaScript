const bookList = ["html", "css", "javascript"];

console.log("length = " + bookList.length); //length = 3
console.log("bookList[0] = " + bookList[0]); //bookList[0] = html
console.log("bookList[1] = " + bookList[1]); //bookList[1] = css
console.log("bookList[2] = " + bookList[2] + "\n"); //bookList[2] = javascript

//for문을 이용한 출력
for (book of bookList) console.log("book = " + book);
//book = html
//book = css
//book = javascript

//배열 마지막에 새로운 값 추가
bookList.push("react");
console.log(bookList);//(4) ['html', 'css', 'javascript', 'react']

//배열 마지막 값 삭제
bookList.pop();
console.log(bookList);//(3) ['html', 'css', 'javascript']

//배열 시작값에서 하나를 삭제
bookList.shift();
console.log(bookList);//(2) ['css', 'javascript']

//배열에 주어진 데이터가 포함되어있는지 확인
bookList.includes("css") //true

//배열에서 인덱스 번호 반환
bookList.indexOf("javascript") //2