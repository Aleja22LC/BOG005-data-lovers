import data from '/src/data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(data);
//interaccion con el DOM
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle(".nav-menu_visible")
    //condicion para buscar mas accesibilidad
    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar Menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir Menú")
    }
});

