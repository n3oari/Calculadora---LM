document.addEventListener("DOMContentLoaded", function () {
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");

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
      return;
    }
    alert("RESULTADO -> " + (parseFloat(num1.value) - parseFloat(num2.value)));
  });

  multiplicacion.addEventListener("click", function (e) {
    console.log("Multiplicacion");

    if (num1.value == "" || num2.value == "") {
      alert("No se puede realizar una operacion con campos vacios");
      return;
    }
    alert("RESULTADO -> " + parseFloat(num1.value) * parseFloat(num2.value));
  });

  division.addEventListener("click", function (e) {
    console.log("Division");
    if (num1.value == "" || num2.value == "") {
      alert("No se puede realizar una operacion con campos vacios");
      return;
    }
    alert("RESULTADO -> " + parseFloat(num1.value) / parseFloat(num2.value));
  });
});
