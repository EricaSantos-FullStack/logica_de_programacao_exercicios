function mostrar(vitorias, empates) {
  var pontos = vitorias * 3 + empates;
  return pontos;
}

var pontuacao = mostrar(9, 2);

var resultado;

if (pontuacao > 28) {
  resultado = "Seu time está melhor do que o ano passado";
} else if (pontuacao < 28) {
  resultado = "Seu time está pior do que o ano passado";
} else {
  resultado = "Seu time está igual";
}

var mensagem = "Seu time tem " + pontuacao + " pontos";

console.log(mensagem);
console.log(resultado);
