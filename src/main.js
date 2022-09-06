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

cerrar.addEventListener('click', function() {
     bienvenida.style.display ='none';
});

window.addEventListener('click', function(evento){
     if(evento.target == flex){
          bienvenida.style.display ='none'; 
     }
}); 

//const de las li de nav
const inicio = document.querySelector('#inicio')
const paisesPar = document.querySelector('#paisesPar')
const medallero = document.querySelector('#medalleroNav')
const deportes = document.querySelector('#deportes')
const atletas = document.querySelector('#atletas')


//mostra portada
function mostrarPortada() {
     portada.style.display = "block"
     container.style.display = "none"
     listaPaises.style.display = "none"
     medalleria.style.display = "none"
}
mostrarPortada()

//mostrar container atletas
function mostrarContainer() {
     container.style.display = "block"
     portada.style.display = "none"
     listaPaises.style.display = "none"
     medalleria.style.display = "none"
}
mostrarContainer()

//mostrar lista de paises
function mostrarlistaPaises() {
     listaPaises.style.display = "block"
     portada.style.display = "none"
     container.style.display = "none"
     medalleria.style.display = "none"
}
mostrarlistaPaises()

//mostrar tabla de medallero
function mostrarMedallero() {
     medalleria.style.display = "block"
     listaPaises.style.display = "none"
     portada.style.display = "none"
     container.style.display = "none"
}
mostrarMedallero()

//crear eventos para los li del nav-menu
inicio.addEventListener("click", () => {
     mostrarPortada()
})

paisesPar.addEventListener("click", () => {
     mostrarlistaPaises()
     pintarPaises(dataAtletas)
})

medallero.addEventListener("click", () => {
     mostrarMedallero()
     pintarData(dataAtletas)
})

deportes.addEventListener("click", () => {
     alert('hola')
})

atletas.addEventListener("click", () => {
     mostrarContainer()
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

// //funcionalida buscar paises
// const buscador= document.querySelector('#buscador');
// const btnLupa= document.querySelector('#btnLupa');
// let resultado= document.querySelector ('#resultado');

// const encontrar = () => {
//      //console.log(buscador.value);
//      document.resultado.innerHTML = '';
//      //guardar el texto que escribe el usuario
//      const texto = buscador.value.toLowerCase();
//      for (let equipo of dataAtletas){
//           let nombre = equipo.team.toLowerCase();
//           if (nombre.indexOf(texto) !== -1){
//                resultado.innerHTML += `
//                <li>${dataAtletas}</li>
//                `
//           }
//      }
//      if (resultado.innerHTML === ''){
//           resultado.innerHTML += `
//           <li>Pais no encontrado...</li>
//           `
//      }
// }
// btnLupa.addEventListener ('click', encontrar)
// buscador.addEventListener ('keyup', encontrar)

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








