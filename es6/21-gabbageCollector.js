let apple = {
  name: 'apple',
};

let orange = apple;
apple = null;
orange = null;
//gc start
//gc의 대상은 apple (실주소)
