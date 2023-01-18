const inputJson = document.getElementById("inputText"); // recebe o valor de um textarea
const btnConverter = document.getElementById("btnConverter"); // botão que chama a função que converte os valores

const validarJson = (json) => {
  let StringJson = String(json.value); // converte o valor do inputJson para uma string

  try {
    let jsonObject = JSON.parse(StringJson);
    converterJson(jsonObject);
  } catch (error) {
    console.log(error);
    alert("Erro: O valor passado não está em formato Json!");
  }
};

const converterJson = (json) => {
  const keys = Object.keys(json[0]); // captura as keys dos elementos

  console.log(keys); // mostra no console as keys

  json.forEach((element, index) => {
    const values = Object.values(json[index]);
    console.log(values);
  });
};

btnConverter.addEventListener("click", () => {
  validarJson(inputJson);
});
