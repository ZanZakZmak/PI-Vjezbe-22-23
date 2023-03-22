//2. AKO JE DRZAVA CLANICA SCHENGENSKOG PROSTORA, POSTAVI PROPERTY "slobodanProlazak" NA true I ANALOGNO TOME.
let europskeDrzave = [
  {
    drzava: "Austrija",
    uSchengenu: true,
    slobodanProlazak: null,
  },
  {
    drzava: "Hrvatska",
    uSchengenu: true,
    slobodanProlazak: null,
  },
  {
    drzava: "Srbija",
    uSchengenu: true,
    slobodanProlazak: null,
  },
  {
    drzava: "Velika Britanija",
    uSchengenu: false,
    slobodanProlazak: null,
  },
  {
    drzava: "Island",
    uSchengenu: true,
    slobodanProlazak: null,
  },
];

function clanica(drzave) {
  drzave.forEach((element) => {
    if (element.uSchengenu) {
      element.slobodanProlazak = true;
    } else {
      element.slobodanProlazak = false;
    }
  });
}

clanica(europskeDrzave);
console.log(europskeDrzave);
