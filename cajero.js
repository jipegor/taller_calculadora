const prompt = require('prompt-sync')();

let activo = true;

while (activo) {

let numero1 = Number(prompt("Primer número: "));
let operacion = prompt("Operación (+, -, *, /): ");
let numero2 = Number(prompt("Segundo número: "));

console.log("Número 1: " + numero1);
console.log("Operación: " + operacion);
console.log("Número 2: " + numero2);

let resultado;

if (operacion == "+") {
  resultado = numero1 + numero2;
} else if (operacion == "-") {
  resultado = numero1 - numero2;
} else if (operacion == "*") {
  resultado = numero1 * numero2;
} else if (operacion == "/") {
  resultado = numero1 / numero2;
} else {
  resultado = "Operación no válida";
}

console.log("Resultado: " + resultado);
 let continuar = prompt("¿Otra operación? (sí/no): ");
  if (continuar == "no") {
    activo = false;
  }
}

console.log("Gracias por usar esta calculadora ¡Hasta pronto!");

