const inputJson = document.getElementById("inputText"); // recebe o valor de um textarea
const btnConverter = document.getElementById("btnConverter"); // botão que chama a função que converte os valores
const outputCsv = document.getElementById("outputCsv"); // elemento que irá receber os valores em CSV

const converterJsonParaCsv = (json) => {
  const keys = Object.keys(json[0]); // captura as keys dos elementos

  console.log(keys); // mostra no console as keys
  outputCsv.innerHTML = `${keys}<br>`; // adiciona as keys uma vez ao outputCsv

  json.forEach((element, index) => {
    // adiciona os values ao outputCsv
    const values = Object.values(json[index]);
    console.log(values);
    outputCsv.innerHTML += `${values}<br>`;
  });
};

const validarJson = (json) => {
  let StringJson = String(json.value); // converte o valor do inputJson para uma string

  // validando se o valor do textarea está em um formato JSON
  try {
    let jsonObject = JSON.parse(StringJson);
    converterJsonParaCsv(jsonObject);
  } catch (error) {
    console.log(error);
    alert("Erro: O valor passado não está em formato Json!");
  }
};

btnConverter.addEventListener("click", () => {
  validarJson(inputJson); // chama a função validaJson quando o botão for clicado
});
