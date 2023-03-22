//3. IZRACUNAJ PROSJEK JUNIORSKIH PLACA
//4. IZRACUNAJ MEDIJAN SVIH PLACA
let prosjekDeveloperskihPlaca = [
  {
    placa: 1300,
    senioritet: "junior",
    area: "frontend",
    tech: "Vuejs",
  },
  {
    placa: 2600,
    senioritet: "senior",
    area: "frontend",
    tech: "React.js",
  },
  {
    placa: 1400,
    senioritet: "junior",
    area: "frontend",
    tech: "Angular.js",
  },
  {
    placa: 1900,
    senioritet: "medior",
    area: "backend",
    tech: ".NET",
  },
  {
    placa: 2300,
    senioritet: "senior",
    area: "backend",
    tech: "Django",
  },
];

function juniorskePlace(arr) {
  let temp = 0;
  let brOsoba = 0;
  arr.forEach((element) => {
    if (element.senioritet == "junior") {
      temp += element.placa;
      brOsoba++;
    }
  });
  return temp / brOsoba;
}

function svePlace(arr) {
  let temp = 0;
  let brOsoba = 0;
  arr.forEach((element) => {
    temp += element.placa;
    brOsoba++;
  });
  return temp / brOsoba;
}

console.log(juniorskePlace(prosjekDeveloperskihPlaca));
console.log(svePlace(prosjekDeveloperskihPlaca));
