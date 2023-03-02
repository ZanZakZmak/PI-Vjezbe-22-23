for (let i = 1; i < 101; i++) {
  let rezultat = "";
  if (i % 3 === 0) {
    rezultat += "Fizz";
  }
  if (i % 5 === 0) {
    rezultat += "Buzz";
  }
  if (!(rezultat === "")) {
    console.log(rezultat);
    //console.log(i);
  }
  if (!(i % 3 === 0 || i % 5 === 0)) {
    console.log(i);
  }
}
