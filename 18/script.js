const plus = (x = 0, y = 0) => x + y;
const plusRes = plus(1, 2);


const withoutArgs = () => console.log('Hello world');
const singleArg = (x = 1) => x * 2;
const moreActions = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
}

const returnObj = (str = '') => ({value: str,
  length: str.length,});


function plusFoo(x,y) {
  console.log(arguments);
  return x+y;
}
// plusFoo(1, 2, 3, 'hello');


const obj = {
  firstName: 'Dariia',
  age: 27,
  getFirstName() {
    console.log(this);
  },
  getAgeArrow: null,
  getAge() {
    // t
    setTimeout(() => console.log(this));
  },
};
obj.getAge();
// obj.getAgeArrow();