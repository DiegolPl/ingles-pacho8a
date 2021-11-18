let btn_recursosLink = document.getElementById('recursos-link');
let btn_cursosLink = document.getElementById('cursos-link');
let btn_menu = document.getElementById('menu-btn');
let li_recursosLink = document.getElementById('recursos-link-li');
let li_cursosLink = document.getElementById('cursos-link-li');

btn_menu.addEventListener('click', ()=> {
    if(li_cursosLink.classList.contains('desplegable--click')){
        li_cursosLink.classList.remove('desplegable--click');
    }
    if(li_recursosLink.classList.contains('desplegable--click')){
        li_recursosLink.classList.remove('desplegable--click');
    }
})

btn_recursosLink.addEventListener('click', ()=> {
    if(li_cursosLink.classList.contains('desplegable--click')){
        li_cursosLink.classList.remove('desplegable--click');
    }
    li_recursosLink.classList.toggle('desplegable--click');
})
btn_cursosLink.addEventListener('click', ()=> {
    if(li_recursosLink.classList.contains('desplegable--click')){
        li_recursosLink.classList.remove('desplegable--click');
    }
    li_cursosLink.classList.toggle('desplegable--click');
})