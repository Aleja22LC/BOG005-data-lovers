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

//funcion calcular
export function calcularXMedallas (data,medal) {
  const porcentajeMedallas = filtrarMedallas(tipoMedalla, data)
  const porcentaje = Math.round((porcentajeMedallas.length/data.length)*100)
  return porcentaje
}


