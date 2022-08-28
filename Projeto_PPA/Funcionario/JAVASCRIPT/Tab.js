const setaBtn = document.querySelector('.seta');
const Conteiner_Nav = document.querySelector('.Conteiner_Nav');
const header = document.querySelector('header');
const main = document.querySelector('main');
let Lista_Icons = document.querySelector('.Lista_Icons');
//Função para dimensão da tab
function movTab() {
    Conteiner_Nav.classList.toggle('active');
    setaBtn.classList.toggle('active');
    header.classList.toggle('active');
    main.classList.toggle('active');
}
setaBtn.addEventListener('click', movTab);
//Função para o demarcado
