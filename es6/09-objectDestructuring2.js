/** 객체 디스트럭처링 - 중첩된 객체 형태 */
const person = {
  name: "hong",
  last: "gildong",
  links: {
    social: {
      facebook: "https://www.facebook.com/alberto.montalesi",
    },
    website: "https://albertomontalesi.github.io/",
  },
};

const { facebook } = person.links.social;
const { facebook: fb } = person.links.social; //별칭주기

console.log(`facebook : ${facebook}`);
console.log(`facebook : ${fb}`);