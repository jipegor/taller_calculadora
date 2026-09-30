const prompt = require('prompt-sync')();

function pedirNumero(mensaje) {
  let numero = Number(prompt(mensaje));
  return numero;
}

function calcular(numero1, operacion, numero2) {
  if (operacion == "+") {
    return numero1 + numero2;
  } else if (operacion == "-") {
    return numero1 - numero2;
  } else if (operacion == "*") {
    return numero1 * numero2;
  } else if (operacion == "/") {
    if (numero2 == 0) {
      return "No se puede dividir entre 0";
    } else {
      return numero1 / numero2;
    }
  } else {
    return "Operación no válida";
  }
}

function mostrarResultado(resultado) {
  console.log("Resultado: " + resultado);
}

function atenderOperacion() {
  let numero1 = pedirNumero("Primer número: ");
  let operacion = prompt("Operación (+, -, *, /): ");
  let numero2 = pedirNumero("Segundo número: ");
  
  let resultado = calcular(numero1, operacion, numero2);
  mostrarResultado(resultado);
}

let activo = true;

while (activo) {
  atenderOperacion();

  let continuar = prompt("¿Otra operación? (sí/no): ");
  if (continuar == "no") {
    activo = false;
  }
}

console.log("Gracias por usar esta calculadora ¡Hasta pronto!");