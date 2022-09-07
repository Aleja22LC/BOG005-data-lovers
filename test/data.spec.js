import { filtrarMedallas, filtrarPaises, ordenarPaises } from '../src/data.js';

//muestra de la data original para funcion filter
const muestraData = [
  {
    "name": "Giovanni Abagnale",
    "gender": "M",
    "height": "198",
    "weight": "90",
    "sport": "Rowing",
    "team": "Italy",
    "noc": "ITA",
    "age": 21,
    "event": "Rowing Men's Coxless Pairs",
    "medal": "Bronze"
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "height": "165",
    "weight": "49",
    "sport": "Taekwondo",
    "team": "Azerbaijan",
    "noc": "AZE",
    "age": 21,
    "event": "Taekwondo Women's Flyweight",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "height": "182",
    "weight": "86",
    "sport": "Handball",
    "team": "France",
    "noc": "FRA",
    "age": 31,
    "event": "Handball Men's Handball",
    "medal": "Silver"
  },
  {
    "name": "Saeid Morad Abdevali",
    "gender": "M",
    "height": "170",
    "weight": "80",
    "sport": "Wrestling",
    "team": "Iran",
    "noc": "IRI",
    "age": 26,
    "event": "Wrestling Men's Middleweight, Greco-Roman",
    "medal": "Bronze"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "height": "161",
    "weight": "62",
    "sport": "Gymnastics",
    "team": "Russia",
    "noc": "RUS",
    "age": 24,
    "event": "Gymnastics Men's Team All-Around",
    "medal": "Silver"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "height": "161",
    "weight": "62",
    "sport": "Gymnastics",
    "team": "Russia",
    "noc": "RUS",
    "age": 24,
    "event": "Gymnastics Men's Horse Vault",
    "medal": "Silver"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "height": "161",
    "weight": "62",
    "sport": "Gymnastics",
    "team": "Russia",
    "noc": "RUS",
    "age": 24,
    "event": "Gymnastics Men's Rings",
    "medal": "Bronze"
  },
  {
    "name": "Matthew \"Matt\" Abood",
    "gender": "M",
    "height": "197",
    "weight": "92",
    "sport": "Swimming",
    "team": "Australia",
    "noc": "AUS",
    "age": 30,
    "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
    "medal": "Bronze"
  },
  {
    "name": "Alejandro \"lex\" Abrines Redondo",
    "gender": "M",
    "height": "198",
    "weight": "93",
    "sport": "Basketball",
    "team": "Spain",
    "noc": "ESP",
    "age": 23,
    "event": "Basketball Men's Basketball",
    "medal": "Bronze"
  },
  {
    "name": "Ahmad Abughaush",
    "gender": "M",
    "height": "178",
    "weight": "68",
    "sport": "Taekwondo",
    "team": "Jordan",
    "noc": "JOR",
    "age": 20,
    "event": "Taekwondo Men's Featherweight",
    "medal": "Gold"
  },]
//muestra para funcion ordenar
const muestraDesordenada = [
    {
      "name": "Matthew \"Matt\" Abood",
      "gender": "M",
      "height": "197",
      "weight": "92",
      "sport": "Swimming",
      "team": "Australia",
      "noc": "AUS",
      "age": 30,
      "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
      "medal": "Bronze"
    },   
    {
      "name": "Ahmad Abughaush",
      "gender": "M",
      "height": "178",
      "weight": "68",
      "sport": "Taekwondo",
      "team": "Jordan",
      "noc": "JOR",
      "age": 20,
      "event": "Taekwondo Men's Featherweight",
      "medal": "Gold"
    },      
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Horse Vault",
      "medal": "Silver"
    },    
    {
      "name": "Giovanni Abagnale",
      "gender": "M",
      "height": "198",
      "weight": "90",
      "sport": "Rowing",
      "team": "Italy",
      "noc": "ITA",
      "age": 21,
      "event": "Rowing Men's Coxless Pairs",
      "medal": "Bronze"
    }, 
  ]

//test funcion filtrar por tipo de medalla
describe(filtrarMedallas, () => {
  it('Deberia mostrar las medallas por tipo oro', () => {
    const dataOro = [
      {
        "name": "Ahmad Abughaush",
        "gender": "M",
        "height": "178",
        "weight": "68",
        "sport": "Taekwondo",
        "team": "Jordan",
        "noc": "JOR",
        "age": 20,
        "event": "Taekwondo Men's Featherweight",
        "medal": "Gold"
      },
    ]
    expect(filtrarMedallas("Gold", muestraData)).toEqual(dataOro);
  });

  it('Deberia mostrar las medallas por tipo plata', () => {
    const dataPlata = [
      {
        "name": "Luc Abalo",
        "gender": "M",
        "height": "182",
        "weight": "86",
        "sport": "Handball",
        "team": "France",
        "noc": "FRA",
        "age": 31,
        "event": "Handball Men's Handball",
        "medal": "Silver"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Team All-Around",
        "medal": "Silver"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Horse Vault",
        "medal": "Silver"
      },
      

    ]
    expect(filtrarMedallas("Silver", muestraData)).toEqual(dataPlata);
  });

  it('Deberia mostrar las medallas por tipo Bronce', () => {
    const dataBronce = [
      {
        "name": "Giovanni Abagnale",
        "gender": "M",
        "height": "198",
        "weight": "90",
        "sport": "Rowing",
        "team": "Italy",
        "noc": "ITA",
        "age": 21,
        "event": "Rowing Men's Coxless Pairs",
        "medal": "Bronze"
      },
      {
        "name": "Patimat Abakarova",
        "gender": "F",
        "height": "165",
        "weight": "49",
        "sport": "Taekwondo",
        "team": "Azerbaijan",
        "noc": "AZE",
        "age": 21,
        "event": "Taekwondo Women's Flyweight",
        "medal": "Bronze"
      },
      {
        "name": "Saeid Morad Abdevali",
        "gender": "M",
        "height": "170",
        "weight": "80",
        "sport": "Wrestling",
        "team": "Iran",
        "noc": "IRI",
        "age": 26,
        "event": "Wrestling Men's Middleweight, Greco-Roman",
        "medal": "Bronze"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Rings",
        "medal": "Bronze"
      },
      {
        "name": "Matthew \"Matt\" Abood",
        "gender": "M",
        "height": "197",
        "weight": "92",
        "sport": "Swimming",
        "team": "Australia",
        "noc": "AUS",
        "age": 30,
        "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
        "medal": "Bronze"
      },
      {
        "name": "Alejandro \"lex\" Abrines Redondo",
        "gender": "M",
        "height": "198",
        "weight": "93",
        "sport": "Basketball",
        "team": "Spain",
        "noc": "ESP",
        "age": 23,
        "event": "Basketball Men's Basketball",
        "medal": "Bronze"
      },
    ]
    expect(filtrarMedallas("Bronze", muestraData)).toEqual(dataBronce);
  });
});

//test funcion filtrar por tipo de medalla
describe(filtrarPaises, () => {
  it('Deberia mostrar los paises participantes', () => {
    const paisParticipante= [
      {        
        "team": "Italy",
        "noc": "ITA",        
      },
      {
        "team": "Jordan",
        "noc": "JOR",
        
      },
      {
        
        "team": "Spain",
        "noc": "ESP",
        
      },
    ]
    expect(filtrarPaises("team", muestraData)).toEqual(paisParticipante);
  });  
});

//test funcion ordenar de A-z y Z-A
describe(ordenarPaises, () => {
  it('Debe ordenadar los nombres de los paises de la A a la Z', () => {
    
    const ordenandoAz = [
      {
        "name": "Matthew \"Matt\" Abood",
        "gender": "M",
        "height": "197",
        "weight": "92",
        "sport": "Swimming",
        "team": "Australia",
        "noc": "AUS",
        "age": 30,
        "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
        "medal": "Bronze"
      },      
      {
        "name": "Giovanni Abagnale",
        "gender": "M",
        "height": "198",
        "weight": "90",
        "sport": "Rowing",
        "team": "Italy",
        "noc": "ITA",
        "age": 21,
        "event": "Rowing Men's Coxless Pairs",
        "medal": "Bronze"
      },      
      {
        "name": "Ahmad Abughaush",
        "gender": "M",
        "height": "178",
        "weight": "68",
        "sport": "Taekwondo",
        "team": "Jordan",
        "noc": "JOR",
        "age": 20,
        "event": "Taekwondo Men's Featherweight",
        "medal": "Gold"
      },      
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Horse Vault",
        "medal": "Silver"
      },
    ]
    expect(ordenarPaises("AZ", muestraDesordenada) ).toEqual(ordenandoAz);
  });

  it('Debe ordenadar los nombres de los paises de la Z a la A', () => {
    const ordenandoZa = [
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Horse Vault",
        "medal": "Silver"
      },      
      {
        "name": "Ahmad Abughaush",
        "gender": "M",
        "height": "178",
        "weight": "68",
        "sport": "Taekwondo",
        "team": "Jordan",
        "noc": "JOR",
        "age": 20,
        "event": "Taekwondo Men's Featherweight",
        "medal": "Gold"
      },
      {
        "name": "Giovanni Abagnale",
        "gender": "M",
        "height": "198",
        "weight": "90",
        "sport": "Rowing",
        "team": "Italy",
        "noc": "ITA",
        "age": 21,
        "event": "Rowing Men's Coxless Pairs",
        "medal": "Bronze"
      },      
      {
        "name": "Matthew \"Matt\" Abood",
        "gender": "M",
        "height": "197",
        "weight": "92",
        "sport": "Swimming",
        "team": "Australia",
        "noc": "AUS",
        "age": 30,
        "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
        "medal": "Bronze"
      },           
    ]
    expect(ordenarPaises("ZA", muestraDesordenada) ).toEqual(ordenandoZa);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
