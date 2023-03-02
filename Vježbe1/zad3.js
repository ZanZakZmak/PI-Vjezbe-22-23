//napiši funkciju koja računa kvadrat i pazi dali je upis tocan
function kvadriraj(x) {
  if (Number.isInteger(x)) {
    //console.log("helo conzola ", Number.isInteger(x));
    return x * x;
  }
  return "krivi unos nije cijeli broj";
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("upisi cijeli broj za kvadrirat ", (x) => {
  console.log(`iznos je ${kvadriraj(Number(x))}!`);
  readline.close();
});
