const input = document.querySelector("#texto");
const validacion = document.querySelector("#resultado");
const boton = document.querySelector(".btn");

boton.addEventListener("click", function () {
  let text1 = input.value;
  let text2 = "";
  for (var i = 0; i < text1.length; i++) {
    text2 = text1.charAt(i) + text2;
  }
  if (text1 === text2) {
    validacion.textContent =
      "La palabra es palindroma ya que se lee de la misma forma al derecho y al reves " +
      text2;
  } else {
    validacion.textContent = "La palabra no es palindroma " + text2;
  }
});
