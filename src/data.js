//...funciones (filter-sort-compute)...

//filtrar por tipo de medalla
export function filtrarMedallas(tipoMedalla, data) {
  const medallas = data.filter(function (datoMedalla) {
    return datoMedalla.medal === tipoMedalla;
  })
  return medallas;
}

//filtrar por nombre de pais
export function filtrarPaises(nombrePais, data) {
  const listaNombrePais = data.filter(function (datoPais) {
    return datoPais.team === nombrePais;
  })
  return listaNombrePais;
}

//filtrar por genero
export function filtrarGenero(tipoGenero, data) {
  const mof = data.filter(function (datoGenero) {
    return datoGenero.gender === tipoGenero;
  })
  return mof;
}

//ordenar los paises participantes de la A-Z y de la Z-A
export function ordenarPaises(opcion, data) {
  const copiaData = [...data]
  const ordenData = copiaData.sort(function (a, b) {
    if (a.team > b.team) {
      return 1;
    }
    if (a.team < b.team) {
      return -1;
    }
    return 0;
  })
  //console.log('ver: ',ordenData)

  if (opcion == 'AZ') {
    return ordenData;
  } else {
    return ordenData.reverse()
  }
}

//funcion calcular
// export const porcentajeMujeres = (data)=> {
//   let dataMujer = 0;
//     data.map((index) => {
//         if (index.gender === "F") {
//             dataMujer++;
//         }
//     })

//     let porciento = (dataMujer * 100) / data.length;
//     let result = Number(porciento.toFixed(2));

//     return result;
// }


