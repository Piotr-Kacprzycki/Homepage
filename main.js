console.log('Witaj');
const name = 'Piotrek';
const age = 30;
console.log(name);
console.log(age);



console.log(`Nazywam sie ${name} i mam lat ${age}`);

const button = document.querySelector('.header__button--js');
console.log(button)







button.addEventListener('click', (e) => {

    const header = document.querySelector('.header__title--js')

    header.innerHTML = 'klik,klik';


});