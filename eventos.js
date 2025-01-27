document.addEventListener("DOMContentLoaded", function () {
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");
  let activeInput = null;

<<<<<<< HEAD
  var suma = document.getElementById("sumar");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");

  suma.addEventListener("click", function (e) {
    console.log("Suma");

    if (num1.value == "" || num2.value == "") {
      alert("No se puede realizar una operacion con campos vacios");
      return;
    }
    alert("RESULTADO -> " + (parseFloat(num1.value) + parseFloat(num2.value)));
  });

  resta.addEventListener("click", function (e) {
    console.log("Resta");

    if (num1.value == "" || num2.value == "") {
      alert("No se puede realizar una operacion con campos vacios");
=======
  // ASIGNAR EVENTOS A LOS INPUTS
  num1.addEventListener("focus", function () {
    activeInput = num1;
  });

  num2.addEventListener("focus", function () {
    activeInput = num2;
  });

  // ASIGNAR EVENTOS A LOS BOTONES NUMÉRICOS
  var buttons = document.querySelectorAll(".numB");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (activeInput) {
        activeInput.value += button.textContent; // Añadir número al input activo
      }
    });
  });

  // FUNCIONES ARITMÉTICAS
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
>>>>>>> Laboratorio
      return;
    }
    alert("RESULTADO -> " + (parseFloat(num1.value) - parseFloat(num2.value)));
  });

<<<<<<< HEAD
  multiplicacion.addEventListener("click", function (e) {
    console.log("Multiplicacion");

    if (num1.value == "" || num2.value == "") {
      alert("No se puede realizar una operacion con campos vacios");
=======
  multiplicacion.addEventListener("click", function () {
    if (num1.value === "" || num2.value === "") {
      alert("No se puede realizar una operación con campos vacíos");
>>>>>>> Laboratorio
      return;
    }
    alert("RESULTADO -> " + parseFloat(num1.value) * parseFloat(num2.value));
  });

<<<<<<< HEAD
  division.addEventListener("click", function (e) {
    console.log("Division");
    if (num1.value == "" || num2.value == "") {
      alert("No se puede realizar una operacion con campos vacios");
=======
  division.addEventListener("click", function () {
    if (num1.value === "" || num2.value === "") {
      alert("No se puede realizar una operación con campos vacíos");
      return;
    }
    if (parseFloat(num2.value) === 0) {
      alert("No se puede dividir entre 0");
>>>>>>> Laboratorio
      return;
    }
    alert("RESULTADO -> " + parseFloat(num1.value) / parseFloat(num2.value));
  });
});
