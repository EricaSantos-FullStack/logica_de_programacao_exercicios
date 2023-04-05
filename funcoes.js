function mostrar(frase) {
  return frase;
}

var ano = 2023;
var minhaIdadde = 29;
var idadeJoana = 26;
var idadeJoaquim = 32;

var frase1 = mostrar("Eu nasci em: " + (ano - minhaIdadde));
var frase2 = mostrar("Joana nasceu em: " + (ano - idadeJoana));
var frase3 = mostrar("Joaquim nasceu em: " + (ano - idadeJoaquim));

console.log(frase1);
console.log(frase2);
console.log(frase3);

console.log("----------------------------------------------------------------");

function calcularImc(altura, peso) {
  var imc = Math.round(peso / (altura * altura));
  return imc;
}

var imcErica = calcularImc(1.69, 55);
var imcCarlos = calcularImc(1.8, 85);

console.log("IMC: " + imcErica);
console.log("IMC: " + imcCarlos);

console.log("----------------------------------------------------------------");

function a(numero1, numero2) {
  return numero1 + numero2;
}

function b(numero1, numero2) {
  return numero1 / numero2;
}

var resultado = a(10, 20) + b(30, 2);

console.log(resultado);
