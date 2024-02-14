// Função para calcular a probabilidade das dezenas

/*
const fs = require('fs');

// Leitura do arquivo JSON
const dados = fs.readFileSync('resultados.json', 'utf-8');
const resultados = JSON.parse(dados).resultados;

// Função para calcular a probabilidade dos números
function calcularProbabilidade(resultados) {
  const frequencia = {};

  // Contagem da frequência de cada número
  resultados.forEach((sorteio) => {
    sorteio.forEach((numero) => {
      frequencia[numero] = (frequencia[numero] || 0) + 1;
    });
  });

  // Cálculo da probabilidade
  const totalSorteios = resultados.length;
  const probabilidade = {};

  for (const numero in frequencia) {
    probabilidade[numero] = (frequencia[numero] / totalSorteios) * 100;
  }

  return probabilidade;
}

// Obtém a probabilidade dos números
const probabilidadeNumeros = calcularProbabilidade(resultados);

// Exibe os resultados
console.log('Probabilidade dos Números:');
for (const numero in probabilidadeNumeros) {
  console.log(`${numero}: ${probabilidadeNumeros[numero].toFixed(2)}%`);
}


*/
function calcularProbabilidade(resultados) {
  const frequencia = {};

  // Contagem da frequência de cada número
  resultados.forEach((sorteio) => {
    sorteio.forEach((numero) => {
      frequencia[numero] = (frequencia[numero] || 0) + 1;
    });
  });

  // Cálculo da probabilidade
  const totalSorteios = resultados.length;
  const probabilidade = {};

  for (const numero in frequencia) {
    probabilidade[numero] = (frequencia[numero] / totalSorteios) * 100;
  }

  return probabilidade;
}
  
  // Função para ler o arquivo JSON localmente
  function lerArquivoJSON(caminhoArquivo, callback) {
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", caminhoArquivo, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == "200") {
        const json = JSON.parse(xhr.responseText);
        callback(json);
      }
    };
    xhr.send(null);
  }
  
  // Caminho para o arquivo JSON local
  const caminhoArquivoJSON = "./sorteios.json";
  
  // Chamar a função para ler o arquivo JSON e calcular a probabilidade
  lerArquivoJSON(caminhoArquivoJSON, function (resultados) {
    const probabilidade = calcularProbabilidade(resultados);
  
    // Exibir probabilidade no console
    console.log("Probabilidade das Dezenas:");
    console.log(probabilidade);
  });
  