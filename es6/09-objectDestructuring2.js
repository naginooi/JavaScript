/** 객체 구조분해 - 중첩된 객체 형태 */
const person = {
  name: "hong",
  last: "gildong",
  links: {
    social: {
      facebook: "https://www.facebook.com",
      google: "https://www.google.com",
      naver: "https://www.naver.com"
    },
    website: "https://albertomontalesi.github.io/",
  },
};

const { facebook, google, naver } = person.links.social;
const { facebook: fb } = person.links.social; //별칭주기
const { f } = person.links.social; // undefined

console.log(`facebook : ${facebook}`);
console.log(`google : ${google}`);
console.log(`naver : ${naver}`);
console.log(`facebook : ${fb}`);