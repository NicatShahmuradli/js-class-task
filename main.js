// Task 21

function toplama(num1, num2) {
  return num1 + num2;
}
// let netice= toplama(5, 10);
// console.log(netice);

function cixma(num1, num2) {
  return num1 - num2;
}

function vurma(num1, num2) {
  return num1 * num2;
}

function bolme(num1, num2) {
  return num1 / num2;
}

// Task 22

function operations(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else if (operator == "/") {
    return num1 / num2;
  }
}
// let netice= operations(5, 10,"+");
// console.log(netice)

const data = [
  {
    iso2: "AF",
    iso3: "AFG",
    country: "Afghanistan",
    cities: [
      "Herat",
      "Kabul",
      "Kandahar",
      "Molah",

      "Rana",
      "Shar",
      "Sharif",
      "Wazir Akbar Khan",
    ],
  },
  {
    iso2: "AL",
    iso3: "ALB",
    country: "Albania",
    cities: [
      "Elbasan",

      "Petran",
      "Pogradec",
      "Shkoder",
      "Tirana",
      "Ura Vajgurore",
    ],
  },
  {
    iso2: "DZ",
    iso3: "DZA",
    country: "Algeria",

    cities: [
      "Algiers",
      "Annaba",
      "Azazga",
      "Batna City",
      "Blida",
      "Bordj",
      "Bordj Bou Arreridj",
      "Bougara",
      "Cheraga",
      "Chlef",
      "Constantine",

      "Djelfa",
      "Draria",
      "El Tarf",

      "Hussein Dey",

      "Illizi",
      "Jijel",
      "Kouba",
      "Laghouat",
      "Oran",
      "Ouargla",
      "Oued Smar",
      "Relizane",
      "Rouiba",
      "Saida",
      "Souk Ahras",

      "Tamanghasset",
      "Tiaret",
      "Tissemsilt",
      "Tizi",
      "Tizi Ouzou",
      "Tlemcen",
    ],
  },
  {
    iso2: "AD",
    iso3: "AND",
    country: "Andorra",

    cities: [
      "Andorra la Vella",
      "Canillo",
      "Encamp",
      "Engordany",

      "Escaldes-Engordany",
      "La Massana",
      "Llorts",
      "Ordino",
      "Santa Coloma",
      "Sispony",

      "Soldeu",
    ],
  },
  {
    iso2: "AO",
    iso3: "AGO",
    country: "Angola",
    cities: [
      "Ambriz",
      "Benguela",
      "Cabinda",
      "Cacole",

      "Camabatela",
      "Cazeta",
      "Huambo",

      "Kuito",

      "Lobito",
      "Luanda",
      "Lubango",
      "Lucapa",
      "Lumeje",
      "Malanje",
      "Menongue",
      "Muxaluando",
      "Namibe",
      "Ondjiva",
      "Piri",

      "Saurimo",
      "Talatona",
    ],
  },
  {
    iso2: "AI",
    iso3: "AIA",
    country: "Anguilla",
    cities: [
      "The Valley",
      "Blowing Point Village",
      "Sandy Ground Village",

      "Sandy Hill",
      "East End Village",
      "George Hill",
      "Island Harbour",
      "North Hill Village",
      "North Side",
      "South Hill Village",
      "Stoney Ground",
      "Farrington",
      "The Quarter",
      "West End Village",
    ],
  },
  {
    iso2: "AG",
    iso3: "ATG",
    country: "Antigua and Barbuda",
    cities: [
      "All Saints",
      "Cassada Gardens",
      "Codrington",
      "Old Road",
      "Parham",

      "Woods",
    ],
  },
];

// Task 23

function countryName(data) {
  let country = [];
  for (let i = 0; i < data.length; i++) {
    country.push(data[i].country);
  }

  return country;
}

console.log(countryName(data));


// Task 24

function Countryletter(dataItems) {
    let count=0
    for (let i = 0; i < dataItems.length; i++) {
        dataItems[i].country[0] 
        
    }
}



// Task 25

// function MaxCity(dataItems) {
//     let max = dataItems[0].cities.length;
//     let ad = "";

//     for (let i = 0; i < dataItems.length; i++) {
  
//         if (dataItems[i].cities.length>max) {
//             max= dataItems[i].cities.length
//             ad= dataItems[i].country
//         }
//     }
//     return ad
// }


// console.log(MaxCity(data));


// Task 26
// function Maxcountry(dataItems) {

//     let max= dataItems[0].country.length
//     let ad= ""

//     for (let i = 0; i < dataItems.length; i++) {

//         if (dataItems[i].country.length>max) {
//             max= dataItems[i].country.length
//             ad=dataItems[i].cities
//         }

//     }
//     return ad
// }

// console.log(Maxcountry(data));
