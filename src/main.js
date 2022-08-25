import data from './data/athletes/athletes.js';
//import {filtrarPaises} from './data';
import { filtrarMedallas } from './data.js';

const dataAtletas = data.athletes
const dataPaises = dataAtletas.map(elem => elem.team)
const dataEquipos = dataAtletas.map(elem => elem.noc)

console.log('data global: ', dataAtletas);
console.log('aqui team', dataPaises);
console.log('equipos', dataEquipos);

//interaccion con el DOM
const portada = document.querySelector('.portada')
const container = document.querySelector('.container')
const listaPaises = document.querySelector('.listaPaises')

//pintar data
//interaccion con el dom funcion filtrar medallas 
const pintarData = (data) => {
     let plantilla = ""
     data.forEach((element) => {
          console.log(element)
          plantilla += `
                    <tr>
                    <th>${element.team}</th>
                    <td>${element.noc}</td>
                    <td>${element.sport}</td>
                    <td>${element.event}</td>
                    <td>${element.medal}</td>
                    </tr>                   
                     `
     })
     document.getElementById("cuerpo").innerHTML=plantilla;
}
pintarData(dataAtletas)

const selecMedalla = document.getElementById('medallas')
selecMedalla.addEventListener("change", (e) => {
     let evento = e.target.value;
     let arrayMedalla = filtrarMedallas(evento, dataAtletas);

pintarData(arrayMedalla)

});

//interaccion con el dom funcion filtrar paises 
const equipo = document.getElementById('listaPaises')
equipo.addEventListener("change", (e) => {
     let select1 = e.target.value;
     let arrPais = filtrarPaises(select1, dataAtletas)
     console.log(arrPais)
     //llama  crearTarjetas (arrPais)
})

//const de las li de nav
const inicio = document.querySelector('#inicio')
const paisesPar = document.querySelector('#paisesPar')
const medallero = document.querySelector('#medallero')
const deportes = document.querySelector('#deportes')
const atletas = document.querySelector('#atletas')

//mostra portada
function mostrarPortada() {
     portada.style.display = "block"
     container.style.display = "none"
     listaPaises.style.display = "none"
}
mostrarPortada()

//mostrar container atletas
function mostrarContainer() {
     container.style.display = "block"
     portada.style.display = "none"
     listaPaises.style.display = "none"
}
mostrarContainer()

//mostrar lista de paises
function mostrarlistaPaises() {
     listaPaises.style.display = "block"
     portada.style.display = "none"
     container.style.display = "none"
}
mostrarlistaPaises()

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

//llamar los paises participantes
// const nombresPaises =[
//      {dataAtletas}
// ]
// console.log(nombresPaises)

// //funcionalida buscar paises
// const buscador= document.querySelector('#buscador');
// const btnLupa= document.querySelector('#btnLupa');
// const resultado= document.querySelector ('#resultado');

// const encontrar = () => {
//      //console.log(buscador.value);
//      resultado.innerHTML = '';
//      //guardar el texto que escribe el usuario
//      const texto = buscador.value.toLowerCase();
//      for (let equipo of nombresPaises){
//           let nombre = equipo.team.toLowerCase();
//           if (nombre.indexOf(texto) !== -1){
//                resultado.innerHTML += `
//                <li>${dataPaises}</li>
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

function pintarPaises(data) {
     let lista = ""
     for (const elem of data) {
          lista += `<li>${elem}</li> `
     }
     document.querySelector('#resultado').innerHTML = lista;
}

//crear eventos para los li del nav-menu
inicio.addEventListener("click", () => {
     mostrarPortada()
})

paisesPar.addEventListener("click", () => {
     mostrarlistaPaises()
     pintarPaises(dataPaises)
})

medallero.addEventListener("click", () => {
     alert('hola')
})

deportes.addEventListener("click", () => {
     alert('hola')
})

atletas.addEventListener("click", () => {
     mostrarContainer()
})




