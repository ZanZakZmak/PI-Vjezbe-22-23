// 5. Ispisi slova koja se ponavljaju
// INPUT - f(abbcdeefff); -> OUTPUT - (bcdef)
// -------------------

function duplicates(value) {
  let returnstring = "";
  for (let i = 0; i < value.length; i++) {
    for (let j = i + 1; j < value.length; j++) {
      if (value[i] == value[j] && returnstring.search(value[i]) == -1) {
        returnstring += value[i];
      }
    }
  }
  return returnstring;
}

console.log(duplicates("abbcdeefff"));
