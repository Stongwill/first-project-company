import './styles/style.scss';

const button = document.querySelector('#bur');
const popup = document.querySelector('#popup');
const menu = document.querySelector('.footer__mobile').cloneNode(1);
const body = document.body;

button.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.toggle('open');
    body.classList.toggle('noscroll')
    popup.appendChild(menu);

})