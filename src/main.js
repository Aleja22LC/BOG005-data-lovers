import data from './data/athletes/athletes.js';
//import {filtrarPaises} from './data';
import { filtrarMedallas, ordenarPaises } from './data.js';

const dataAtletas = data.athletes
//const dataPaises = dataAtletas.map(elem => elem.team))

//console.log('data global: ', dataAtletas);
//console.log('aqui team', dataPaises);
//console.log('equipos', dataEquipos);

//interaccion con el DOM
const portada = document.querySelector('.portada')
const container = document.querySelector('.container')
const listaPaises = document.querySelector('.listaPaises')
const medalleria = document.querySelector('.medallero')

let bienvenida = document.getElementById('miModal')
let flex = document.getElementById('flex')
let cerrar = document.getElementById('close')

cerrar.addEventListener('click', function () {
     bienvenida.style.display = 'none';
});

window.addEventListener('click', function (evento) {
     if (evento.target == flex) {
          bienvenida.style.display = 'none';
     }
});

//const de las li de nav
const inicio = document.querySelector('#inicio')
const paisesPar = document.querySelector('#paisesPar')
const medallero = document.querySelector('#medalleroNav')
const deportes = document.querySelector('#deportes')
const atletas = document.querySelector('#atletas')


function navegacion(section) {
     medalleria.style.display = "none"
     listaPaises.style.display = "none"
     portada.style.display = "none"
     container.style.display = "none"
     if(section === "medalleria"){
          medalleria.style.display = "block"
     }else if(section === "portada"){
          portada.style.display = "block"
     }else if (section === "listaPaises"){
          listaPaises.style.display = "block"
     }else if(section === "container"){
          container.style.display = "block"
     }    
       
}

//crear eventos para los li del nav-menu
inicio.addEventListener("click", () => {
     navegacion('portada')
})

paisesPar.addEventListener("click", () => {
     navegacion('listaPaises')
     pintarPaises(dataAtletas)
})

medallero.addEventListener("click", () => {
     navegacion('medalleria')
     pintarData(dataAtletas)
})

deportes.addEventListener("click", () => {
     alert('hola')
})

atletas.addEventListener("click", () => {
     navegacion('container')
})

//Nav - boton hamburguesa
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
     navMenu.classList.toggle("nav-menu_visible")
     //condicion para buscar mas accesibilidad
     if (navMenu.classList.contains("nav-menu_visible")) {
          navToggle.setAttribute("aria-label", "Cerrar Menú");
     } else {
          navToggle.setAttribute("aria-label", "Abrir Menú")
     }
});

//Función sin retorno que pintará un template de lista países
const pintarPaises = (dataAtletas) => {
     let plantilla0 = ""
     dataAtletas.forEach((element) => {
          //console.log(element)
          plantilla0 += `
                    <tr>
                    <th>${element.noc}</th>
                    <th>${element.team}</th>
                    </tr>
                    
                     `
     })
     document.getElementById("cuerpo0").innerHTML = plantilla0;
}
pintarPaises(dataAtletas)
//convertir string en array

//eliminar paises duplicados


//pintar data
//interaccion con el dom funcion filtrar medallas 
const pintarData = (data) => {
     let plantilla = ""
     data.forEach((element) => {
          //console.log(element)
          plantilla += `
                    <tr>
                    <td>${element.team}</td>
                    <td>${element.noc}</td>
                    <td>${element.sport}</td>
                    <td>${element.event}</td>
                    <td>${element.medal}</td>
                    </tr>                   
                     `
     })
     document.getElementById("cuerpo").innerHTML = plantilla;
}
pintarData(dataAtletas)

//funcion filtrar
const selecMedalla = document.getElementById('medallas')
selecMedalla.addEventListener("change", (e) => {
     let evento = e.target.value;
     let arrayMedalla = filtrarMedallas(evento, dataAtletas);

     pintarData(arrayMedalla)

});

const selectAz = document.getElementById('ordenAz')
selectAz.addEventListener("change", (e) => {
     let eventoAz = e.target.value;
     let arrayOrden = ordenarPaises(eventoAz, dataAtletas)

     pintarData(arrayOrden)

});








