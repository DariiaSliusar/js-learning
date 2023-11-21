const title = document.querySelector('h1');
// title.innerHTML = '<span>text</span>';
// title.textContent = '<span>new text</span>';
// title.appendChild('<span>appen</span>');
// title.insertAdjacentHTML('beforebegin', '<h2>title h2</h2>');
// title.insertAdjacentElement

title.innerHTML += '<span>new text</span>';
const span = title.querySelector('span');
console.log(span);