// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};
//funciones (filter-sort-compute)
//filtrar por tipo de medalla
export function filtrarMedallas(tipoMedalla, data) {
  const medallas = data.filter(function (datoMedalla) {
    return datoMedalla.medal === tipoMedalla;
  })
  return medallas;
}

//filtrar los paises para encontar el que el usuario desea
// export function filtrarPaises(nombrePais, data) {
//   const filtrarData = data.filter(function (datoAFiltrar) {
//     return datoAFiltrar.team === nombrePais;
//   })
//   return filtrarData;
// }
// console.log('filtrar paises', filtrarPaises);
// console.log('filtrar data', filtrarData);

//ordenar los paises participantes de la A-Z y de la Z-A
function ordenarPaises() {

}

