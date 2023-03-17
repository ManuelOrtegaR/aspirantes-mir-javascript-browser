const input = document.querySelector("#texto");
const resultado = document.querySelector("#resultado");
const resultadomayus = document.querySelector("#resultadoMayusculas");
const boton = document.querySelector("#boton");
input.addEventListener("input", function () {
  const texto = input.value;
  resultado.textContent = texto;
});

boton.addEventListener("click", function () {
  const textomayus = input.value.toUpperCase();
  resultadomayus.textContent = textomayus;
});
