// Você está no supermercado. Controle as compras!
const fruta = "Cereja";

switch (fruta) {
  case "Laranja":
    console.log("A laranja custa R$0.59 o quilo.");
    break;
  case "Maçã":
    console.log("A maçã custa R$0.32 o quilo.");
    break;
  case "Banana":
    console.log("A banana custa R$0.48 o quilo.");
    break;
  case "Cereja":
    console.log("A cereja custa R$3.00 o quilo.");
    break;
  case "Manga":
    console.log("A manga custa R$2.79 o quilo.");
    break;
  case "Mamão":
    console.log("A mamão custa R$3.00 o quilo.");
    break;
  default:
    console.log(`Desculpe, estamos sem ${fruta} no momento`);
}
