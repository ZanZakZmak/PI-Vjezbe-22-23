// 4. Makni vise odredenih slova
// INPUT - f(abcdefghd, [c, d]); -> OUTPUT - (abefgh)

/*
value.split("").forEach((element) => {
    console.log(element);
  });
*/

//hard code
function removeLetter(value, letterarr) {
  let returnValue = "";
  for (let i = 0; i < value.length; i++) {
    let check = false;
    for (let j = 0; j < letterarr.length; j++) {
      if (value[i] === letterarr[j]) {
        check = true;
      }
    }
    if (!check) {
      returnValue += value[i];
    }
  }
  return returnValue;
}

console.log(removeLetter("abcdefghd", ["c", "d"]));

//način sa postojećim metodama
function removeLetter2(value, arrletter) {
  return value
    .split("")
    .filter((x) => {
      let check = true;
      arrletter.forEach((element) => {
        if (element == x) {
          check = false;
        }
      });
      return check;
    })
    .join("");
}

console.log(removeLetter2("abcdefghd", ["c", "d"]));
