//napisi rekurzivnu funkciju koja iterira sve dok ne dosegne vrijednost drugog parametra(while)

//sa while petljom
/*function uhvatitiCuJaVas(Gargamel, strumf) {
  while (Gargamel < strumf) {
    Gargamel++;
  }
  return "uhvatio sam štrumfa HA HA HA!";
}*/

//Rekurzivno
function uhvatitiCuJaVas(Gargamel, strumf) {
  if (Gargamel === strumf) {
    return "uhvatio sam štrumfa HA HA HA!";
  } else {
    Gargamel++;
    return uhvatitiCuJaVas(Gargamel, strumf);
  }
}

console.log(uhvatitiCuJaVas(14, 100));
