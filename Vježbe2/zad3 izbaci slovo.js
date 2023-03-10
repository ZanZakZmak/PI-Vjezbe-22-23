// 3. Makni odredeno slovo iz stringa
// INPUT - f(abcdefghd, d); -> OUTPUT - (abcefgh)
// -------------------

/*
value.split("").forEach((element) => {
    console.log(element);
  });
*/

//hard code
function removeLetter(value, letter) {
  let returnValue = "";
  for (let i = 0; i < value.length; i++) {
    if (!(value[i] === letter)) {
      returnValue += value[i];
    }
  }
  return returnValue;
}

console.log(removeLetter("abcdefghd", "d"));

//način sa postojećim metodama
function removeLetter2(value, letter) {
  return value
    .split("")
    .filter((x) => {
      return !(x == letter);
    })
    .join("");
}

console.log(removeLetter2("abcdefghd", "d"));
