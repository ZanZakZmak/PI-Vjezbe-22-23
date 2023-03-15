// 6. Pretrazi rijec u recenici
// INPUT - f(Ne pada mi nista pametno na pamet, na); -> OUTPUT - (true)
// -------------------

//malo ga zakompliciro bez ugrađenih funkcija nisam htio koristit index of jer je to isto ugrađena fukcija
function provjera(current, text, value) {
  let pronaden = true;
  for (let j = 0; j < value.length; j++) {
    if (text[current + j] == value[j]) {
      pronaden = true;
    } else {
      pronaden = false;
    }
  }
  return pronaden;
}

function pretraga(text, value) {
  returnvalue = false;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == value[0]) {
      if (provjera(i, text, value)) {
        returnvalue = true;
      }
    }
  }
  return returnvalue;
}

console.log(pretraga("Ne pada mi nista pametno na pamet", "na"));

// sa ugrađenim funkcijama
function pretraga2(text2, value2) {
  return text2.search(value2) != -1;
}

console.log(pretraga2("Ne pada mi nista pametno na pamet", "na"));
