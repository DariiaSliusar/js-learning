const user = {
  firstName: 'Dariia',
  lastName: 'Sliusar',
  age: 27,
  info: {
    work: 'EasyCode',
    skills:['html', 'css'],
  },
};
// const firstName = user.firstName;
// const lastName = user.lastName;

// const {firstName: name, lastName, age: years = 30} = user;
// const {
// info: {work, skills},
// } = user;
// console.log(skills);

const colors = ['white', 'black', 'red'];
const [w, b, red, green = 'green'] = colors;
// console.log(w, b, red, green);

const names = ['Dariia', 'Ivan', 'Iryna'];
const [name1, ...otherNames] = names;
console.log(name1, otherNames);

const nestedArr = ['hello world', ['key', 'value']];
const [, [key, value]] = nestedArr;
// console.log(key, value);

// const [...newNames] = names;
const newNames = [...names];
// console.log(...newNames);

const colorNames = ['some value', ...colors, ...names];
// console.log(colorNames);

const newUser = { ...user, age: 30};
console.log(newUser);

const {info: {
  skills: [html, css],
},} = newUser;
// console.log(html, css);

function myPerson({lastName = '&', firstName = '&', info: {skills} = {}} = {}) {
  console.log(lastName, firstName);
}
// myPerson(newUser);

function foo(x, y, ...others) {
  console.log(arguments);
  // console.log([].slice.call(arguments));
  const [...args] = arguments;
  console.log(others);
}
// foo(1, 2, 5, 6);

const numbers = [2, 3];
function foo2(x, y) {
  console.log(x, y);
}
foo2(...numbers);