let anoCopa = 1930;

do {
  anoCopa += 4;
  console.log(anoCopa);
} while (anoCopa < 2022);

// two ways to do loop and iteration ----------------");

// let anoCopa2 = 1930;

// while (anoCopa2 < 2022) {
//   anoCopa2 = anoCopa2 + 4;
//   console.log(anoCopa2);
// }

// -----------------------------------------------------------
// Rafa precisa imprimir todos os números entre 30 e 40 (inclusive 30 e 40), porém os números 33 e 37 não devem ser impressos

var contador = 30;

while (contador <= 40) {
  if (contador == 33) {
    contador = contador + 1;
  } else if (contador == 37) {
    contador = contador + 1;
  } else {
    console.log(contador);
    contador = contador + 1;
  }
}

// Multiplicador

let multiplicador = 1;

while (multiplicador <= 10) {
  console.log(7 * multiplicador);
  multiplicador++;
}

// Substitua "multiplicador = multiplicador + 1";
// Por = multiplicador++;

// Organização do for

// var multiplicador2 = 1;

// For(multiplicador2, multiplicador2 <= 10, multiplicador2 = multiplicador2 + 1){
// };

// escrita melhor

// For(multiplicador2, multiplicador2 <= 10, multiplicador++){
// };
