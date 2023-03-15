// 7. Prvo i zadnje slovo prebaci iz malog u veliko ili iz velikog u malo
// INPUT - f(I dalje mi ne pada mi nista pametno na pamet); -> OUTPUT - (i dalje ... na pameT)
// -------------------

//Sa ugrađenim funkcijama
function change(value) {
  if (value.charCodeAt(0) < 97) {
    return value.toLowerCase();
  } else {
    return value.toUpperCase();
  }
}
function latterChange2(text2) {
  let finalniString = text2.split("");
  let x = finalniString.pop();
  finalniString.push(change(x));

  let y = finalniString.shift();
  finalniString.unshift(change(y));
  return finalniString.join("");
}
console.log(latterChange2("I dalje mi ne pada mi nista pametno na pamet"));

let x = "a";
console.log(x.charCodeAt(0) - 32);
console.log(String.fromCharCode(x.charCodeAt(0) - 32));
