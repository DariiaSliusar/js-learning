// forEach
// users.forEach((user, i, arr) => {
//   console.log(user, i, arr);
// });


// filter
const userLess30 = users.filter(user => user.age < 30);
// console.log(userLess30);
const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);


// map
const usersName = users.map(user => user.name);
// const usersName = users.map(user => ({ name: user.name, age: user.age}));
// console.log(usersName);


// reduce
const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);
// console.log(totalBalance);
const usersObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc;
}, {});
// console.log(usersObj);


// some/every
const isMale = users.some(user => user.gender === "male");
const isAllMale = users.every(user => user.gender === "male");
const isAll18 = users.every(user => user.age > 18);
// console.log(isAll18);


// sort
const strArr = ["Dariia", "Ilariia", "Mikhal"];
strArr.sort();
const numArr = [10, 7, 44, 32];
numArr.sort((prev, next) => prev, next);
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users);


// find
const user = users.find(user => user.name === "fcjfc");
// console.log(user);
