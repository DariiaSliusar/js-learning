const div = document.querySelector('div');
const title = document.querySelectorAll('h1');
console.log(div.parentElement);
const link = div.querySelector('.link');
// console.log(link.parentElement);
// console.log(link.closest('.content'));


div.classList.add('article', 'custom');
div.classList.remove('article');
// div.classList.contains('custom');
// div.classList.toggle("toggle");
// console.dir(link);

div.setAttribute('id', 'myId');
// div.removeAttribute("id");
// div.getAttribute("id");
// div.hasAttribute("id");

// div.dataset.myattr
