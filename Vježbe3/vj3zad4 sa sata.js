//5. ISPISI
let levels = {
  prvaRazina: {
    printMe: () => console.log("1"),
    drugaRazina: {
      printMe: () => console.log("2"),
      trecaRazina: {
        printMe: () => console.log("3"),
        cetvrtaRazina: {
          printMe: () => console.log("4"),
          petaRazina: {
            printMe: () => console.log("5"),
            sestaRazina: {
              printMe: () => console.log("6"),
              sedmaRazina: {
                printMe: () => console.log("7"),
                osmaRazina: {
                  printMe: () => console.log("8"),
                  devetaRazina: {
                    printMe: () => console.log("9"),
                    desetaRazina: {
                      printMe: () => console.log("10"),
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

//levels.prvaRazina.printMe();
//console.log(levels[Object.keys(levels)]);
//console.log("kejevi su ovdije", Object.keys(levels));
//console.log(arrpr[1] == undefined);
//console.log(undefined == undefined);

function ispisRazina(dubina) {
  keys = Object.keys(dubina);
  //console.log(dubina[keys[0] + "()"]);
  dubina.printMe();
  if (keys[1] == undefined) {
    console.log("gotov sam");
    return;
  } else {
    return ispisRazina(dubina[keys[1]]);
  }
}

ispisRazina(levels.prvaRazina);
