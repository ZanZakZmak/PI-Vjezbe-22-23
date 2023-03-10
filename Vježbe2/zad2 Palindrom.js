// 2. Je li string palindrom?
// INPUT - f(ana); -> OUTPUT - true

// -------------------

function palindrom(value) {
  let boolPalindrom = true;
  if (value === "") {
    boolPalindrom = false;
  }
  //alternativno parseInt(value.length / 2);
  for (let i = 0; i < value.length / 2 - (value.length % 2) * 0.5; i++) {
    if (!(value[i] === value[value.length - 1 - i])) {
      boolPalindrom = false;
    }
  }
  return boolPalindrom;
}

console.log(palindrom("ana"));
console.log(palindrom("anna"));
console.log(palindrom("anna0"));
