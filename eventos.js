document.addEventListener("DOMContentLoaded", function () {
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");

  var numB = document.getElementsByClassName(numB);

  document
    .getElementsByClassName("numB")
    .addEventListener("click", function (click) {
      num1 = this.inner.text;
      document.getElementById("num1").value = num1;
      /*
  document.addEventListener("click", function (click) {
    switch (click.target.value) {
      case "1":
        num1.value == "1";
        break;
      case 2:
        num1.value += "2";
        break;
      case 3:
        num1.value += "3";
        break;
      case 4:
        num1.value += "4";
        break;
      case 5:
        num1.value += "5";
        break;
      case 6:
        num1.value += "6";
        break;
      case 7:
        num1.value += "7";
        break;
      case 8:
        num1.value += "8";
        break;
      case 9:
        num1.value += "9";
        break;
      case 0:
        num1.value += "0";
        break;
    }
  });
*/
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
        alert(
          "RESULTADO -> " + (parseFloat(num1.value) + parseFloat(num2.value))
        );
      });

      resta.addEventListener("click", function (e) {
        console.log("Resta");

        if (num1.value == "" || num2.value == "") {
          alert("No se puede realizar una operacion con campos vacios");
          return;
        }
        alert(
          "RESULTADO -> " + (parseFloat(num1.value) - parseFloat(num2.value))
        );
      });

      multiplicacion.addEventListener("click", function (e) {
        console.log("Multiplicacion");

        if (num1.value == "" || num2.value == "") {
          alert("No se puede realizar una operacion con campos vacios");
          return;
        }
        alert(
          "RESULTADO -> " + parseFloat(num1.value) * parseFloat(num2.value)
        );
      });

      division.addEventListener("click", function (e) {
        console.log("Division");
        if (num1.value == "" || num2.value == "") {
          alert("No se puede realizar una operacion con campos vacios");
          return;
        }
        alert(
          "RESULTADO -> " + parseFloat(num1.value) / parseFloat(num2.value)
        );
      });
    });
});
