const btn = document.querySelector('button');
const link = document.querySelector('a');
// btn.onclick = function() {
// console.log('click');
// };

// btn.addEventListener('click', function(e) {
  // console.log(e);
// });
// btn.addEventListener('click', function() {
//   console.log('click 2');
// });

// btn.addEventListener('click', e => {
//   console.log(this);
//   console.log(e);
// });

// function clickhandler(e) {
//   e.preventDefault();
//   console.log(this);
//   console.log('click');
// }

// link.addEventListener('click', clickhandler);

// link.removeEventListener('click', clickhandler);

const container = document.querySelector(".container");

btn.addEventListener('click', e => {
  const div = document.createElement('div');
  div.textContent = Math.random();
  container.appendChild(div);
});