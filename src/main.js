import data from '/src/data/athletes/athletes.js';

console.log(data);

//interaccion con el DOM
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
    //condicion para buscar mas accesibilidad
    if (navMenu.classList.contains("nav-menu_visible")){
         navToggle.setAttribute("aria-label", "Cerrar Menú");
    } else {
         navToggle.setAttribute("aria-label", "Abrir Menú")
    }
});

//crear funcion de crear tarjetas y luego crear una constante donde guardar la funcion

// function crearTarjetas (atletas){
//     const container =document.querySelector(".container");
    
// }


//recorrer la data para obtener solo los paises

