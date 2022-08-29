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
export function ordenarPaises(opcion, data) {
  const copiaData=[...data]
  const ordenData= copiaData.sort (function (a,b){
    if (a.team > b.team) {
      return 1;
    }
    if (a.team < b.team) {
      return -1;
    }    
    return 0;
  })
  if (opcion == 'AZ'){
    return ordenData;
  }else {
    return ordenData.reverse()
  }
  
}

