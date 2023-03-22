//1. UKOLIKO JE CINJENICA LAZNA, IZBRISI CINJENICU I POSTAVI SKRIVENO NA TRUE, ZATIM FILTRIRAJ ARRAY I PRIKAZI SAMO ONE CINJENICE KOJE SU ISTINITE
let randomFacts = [
  {
    factoid: "Previse vode te moze ubiti",
    istina: true,
    skriveno: null,
  },
  {
    factoid: "RH je 57 na svijetu po indeksu koruptivne percepcije",
    istina: true,
    skriveno: null,
  },
  {
    factoid: null,
    istina: false,
    skriveno: null,
  },
  {
    factoid: "Medijalna placa je iznosila 6290kn, a prosjecna 7574kn u 2022.",
    istina: true,
    skriveno: null,
  },
  {
    factoid: "Proslo je 20 godina otkad je Hajduk bio prvak",
    istina: false,
    skriveno: null,
  },
];

function nekeCinjenice(fucts) {
  let filterd;
  fucts.forEach((element) => {
    if (!element.istina) {
      element.factoid = null;
      element.skriveno = true;
    }
  });
  filterd = fucts.filter((x) => {
    return x.istina;
  });
  console.log(filterd);
}

nekeCinjenice(randomFacts);
//console.log(randomFacts);
