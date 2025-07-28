function calcularRankeadas(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);
}

// Simulando várias rodadas usando estrutura de repetição
let totalVitorias = 0;
let totalDerrotas = 0;

for (let i = 1; i <= 5; i++) {
 
  let vitoriasRodada = Math.floor(Math.random() * 30); // vitórias aleatórias entre 0 e 29
  let derrotasRodada = Math.floor(Math.random() * 20); // derrotas aleatórias entre 0 e 19

  console.log(`Rodada ${i}: ${vitoriasRodada} vitórias, ${derrotasRodada} derrotas`);
  
  totalVitorias += vitoriasRodada;
  totalDerrotas += derrotasRodada;
}

calcularRankeadas(totalVitorias, totalDerrotas);