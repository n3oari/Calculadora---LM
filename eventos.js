document.addEventListener("DOMContentLoaded", function () {
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");
  let activeInput = null;

  // Asignar eventos a los inputs
  num1.addEventListener("focus", function () {
    activeInput = num1;
  });

  num2.addEventListener("focus", function () {
    activeInput = num2;
  });

  // Asignar eventos a los botones numéricos
  var buttons = document.querySelectorAll(".numB");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (activeInput) {
        activeInput.value += button.textContent; // Añadir número al input activo
      }
    });
  });

  // Funciones aritméticas
  var suma = document.getElementById("sumar");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");

  suma.addEventListener("click", function () {
    if (num1.value === "" || num2.value === "") {
      alert("No se puede realizar una operación con campos vacíos");
      return;
    }
    alert("RESULTADO -> " + (parseFloat(num1.value) + parseFloat(num2.value)));
  });

  resta.addEventListener("click", function () {
    if (num1.value === "" || num2.value === "") {
      alert("No se puede realizar una operación con campos vacíos");
      return;
    }
    alert("RESULTADO -> " + (parseFloat(num1.value) - parseFloat(num2.value)));
  });

  multiplicacion.addEventListener("click", function () {
    if (num1.value === "" || num2.value === "") {
      alert("No se puede realizar una operación con campos vacíos");
      return;
    }
    alert("RESULTADO -> " + parseFloat(num1.value) * parseFloat(num2.value));
  });

  division.addEventListener("click", function () {
    if (num1.value === "" || num2.value === "") {
      alert("No se puede realizar una operación con campos vacíos");
      return;
    }
    if (parseFloat(num2.value) === 0) {
      alert("No se puede dividir entre 0");
      return;
    }
    alert("RESULTADO -> " + parseFloat(num1.value) / parseFloat(num2.value));
  });
});
