const inputJson = document.getElementById("inputText"); // recebe o valor de um textarea
const btnConverter = document.getElementById("btnConverter"); // botão que chama a função que converte os valores

const validarJson = (json) => {
  let StringJson = String(json.value); // converte o valor do inputJson para uma string

  try {
    let jsonObject = JSON.parse(StringJson);
    // console.log(jsonObject);
    converterJson(jsonObject);
  } catch (error) {
    console.log(error);
    alert("Erro: O valor passado não está em formato Json!");
  }
};

const converterJson = (json) => {
  const keys = Object.keys(json);
  const value = Object.values(json);

  console.log(keys);
  console.log(value);
};

btnConverter.addEventListener("click", () => {
  validarJson(inputJson);
});
