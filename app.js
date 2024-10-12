// Exibe um alerta na página do usuário com a frase a seguir
alert ("Seja muitíssimo bem-vindo ao game absurdo que futuramente será uma roleta russa virtual. Antes de mais nada, aqui vai seu ip: 12.13.172.235");
// Cria uma variável chamada número secreto com valor 69
let numeroSecreto = parseInt(Math.random () * 100 + 1);
// Insere o valor do numero secreto no console
console.log (numeroSecreto);
// Cria uma variável e um prompt, o qual exibe a mensagem a seguir, e que se associa a variável chamada tentativas miserveis
let tentativasMiseraveis;
// Imprime a tentativa miseravel no console
console.log (tentativasMiseraveis);
// Cria uma variavel para a quantidade de errros
let quantidadeErros = 1;

// Enquanto as tentativas miseraveis nao forem igual ao numero secreto; exibir o prompt a seguir
while (tentativasMiseraveis != numeroSecreto) {
   // Exibe um prompt com a seguinte mensagem; e armazena o numero da tentativa miseravel
   tentativasMiseraveis = prompt("Acerte a bomba do número que está entre 1 e 100.");
    // Caso as tentativas miseraveis sejam iguais ao numero secreto
    if (tentativasMiseraveis == numeroSecreto) {
        break;
    } 
      // Caso contrário
      else {
        // Se as tentativas miseraveis forem maior do que o numero secreto; exibe a seguinte mensagem; inclui a tentativa miseravel
        if (tentativasMiseraveis > numeroSecreto) {
            alert (`O número absurdo, o qual possui um valor desconhecido; localizado dentre os números reais, exceto o 0, é menor do que essa merreca (${tentativasMiseraveis}) que você colocou aí...`);
        }
          // Caso contrário; exibe o seguinte alerta; inclui a tentativa miseravel
          else {
            alert (`O número absurdo, o qual possui um valor desconhecido; localizado dentre os números reais, exceto o 0, é maior do que essa merreca (${tentativasMiseraveis}) que você colocou aí...`);
        };
        // Tentativa falha +1; poderia ser escrito dessa maneira: quantidadeErros = quantidadeErros +1
        quantidadeErros++;
    };
};

//Se fosse a mesma frase, seria possível fazer o seguinte: let palavraTentativa(variavel nova) = quantidadeErros > 1 ? (ou seja; quantidade de erros é makior que 1?) 'tentativas' : 'tentativa' (se for maior, primeiro caso; se for menor, segundo caso)
// Caso a quantidade de tentativas seja maior do que 1, será exibida a mensagem a seguir
if (quantidadeErros > 1) {
  // Exibe um alerta com a seguinte mensagem; que inclui o numero secreto
  alert (`Cagou muito mano, que isso, já hackearam o joguinho, como pode... acertou ${numeroSecreto}! Mas demorou uma cota pra acertar kkkkkkkk, exatamente ${quantidadeErros} tentativas fúteis.`);
}
else { 
  // Exibe um alerta com a seguinte mensagem; que inclui o numero secreto; porem no singular, caso o sortudo acerte de primeira
  alert (`Oloco, que cagada absurda... acertou, era ${numeroSecreto}! Tá roubando né pilantra? Conseguiu em só ${quantidadeErros} tentativa (ou então cagou o que tinha).`);
};
