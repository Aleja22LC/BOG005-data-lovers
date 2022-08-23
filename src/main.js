import data from '/src/data/athletes/athletes.js';
const dataAtletas= data.athletes
const dataPaises= dataAtletas.map(elem=>elem.team)

console.log('data global: ', dataAtletas);
console.log('aqui team',dataPaises);

//interaccion con el DOM
const portada = document.querySelector('.portada')
const container= document.querySelector('.container')
const listaPaises= document.querySelector('.listaPaises')

//const de las li de nav
const inicio= document.querySelector('#inicio')
const paisesPar= document.querySelector('#paisesPar')
const medallero= document.querySelector('#medallero')
const deportes= document.querySelector('#deportes')
const atletas= document.querySelector('#atletas')



//mostra portada
function mostrarPortada(){
    portada.style.display = "block"
    container.style.display = "none"
    listaPaises.style.display = "none"   
}
mostrarPortada()

//mostrar container atletas
function mostrarContainer () {
     container.style.display = "block"
     portada.style.display = "none"
     listaPaises.style.display = "none"        
}
mostrarContainer()

//mostrar lista de paises
function mostrarlistaPaises () {
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
    if (navMenu.classList.contains("nav-menu_visible")){
         navToggle.setAttribute("aria-label", "Cerrar Menú");
    } else {
         navToggle.setAttribute("aria-label", "Abrir Menú")
    }
});

//llamar los paises participantes
const nombresPaises =[
     {dataAtletas}
]
console.log(nombresPaises)
//funcionalida buscar paises
const buscador= document.querySelector('#buscador');
const btnLupa= document.querySelector('#btnLupa');
const resultado= document.querySelector ('#resultado');

const filtrar = () => {
     //console.log(buscador.value);
     resultado.innerHTML = '';

     const texto = buscador.value.toLowerCase();
     for (let pais of nombresPaises){
          let nombre = pais.team.toLowerCase();
          if (nombre.indexOf(texto) !== -1){
               resultado.innerHTML += `
               <li>${pais.team} - ${pais.noc}</li>
               `
          }
     }
     if (resultado.innerHTML === ''){
          resultado.innerHTML += `
          <li>Pais no encontrado...</li>
          `
     }
}

btnLupa.addEventListener ('click', filtrar)
buscador.addEventListener ('keyup', filtrar)

/**
 * Función sin retorno que pintará un template de lista países
 */

function pintarPaises (data)  {
     let lista = ""
     for (const elem of data) {
          lista += `<li>${elem}</li> `
     }
     document.querySelector('#resultado').innerHTML = lista;
}
//crear funcion de crear tarjetas y luego crear una constante donde guardar la funcion

// function crearTarjetas (atletas){
//     const container =document.querySelector(".container");
    
// }


//recorrer la data para obtener solo los paises

//const li=document.querySelectorAll("li") // devuelve un arreglo con los li
// console.log(li)
// recorrer el arreglo de li
// añadirle su evento
// li.forEach(element => {
//      element.addEventListener("click", prueba)
// })

//crear eventos para los li del nav-menu
inicio.addEventListener("click", ()=>{
     mostrarPortada()
})

paisesPar.addEventListener("click", ()=>{
     mostrarlistaPaises()
     pintarPaises(dataPaises)
})

medallero.addEventListener("click", ()=>{
     alert('hola')
})

deportes.addEventListener("click", ()=>{
     alert('hola')
})

atletas.addEventListener("click", ()=>{
     mostrarContainer()
})


