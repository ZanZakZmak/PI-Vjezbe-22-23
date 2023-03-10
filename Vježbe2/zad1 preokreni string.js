// 1. Preokreni string - Ovo smo rijesili, ali ako mozes bolje - napravi bolje
// INPUT - f(abc); -> OUTPUT - cba
// -------------------
//evo brzi naćin pomocu postojećih metoda za stringove
function okreni(value) {
  return value.split("").reverse().join("");
}

console.log(okreni("abc"));
