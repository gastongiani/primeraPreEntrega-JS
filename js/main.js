// Obtener la edad del usuario
var edad = prompt("Ingresa tu edad:");

// Verificar si la edad es mayor o igual a 18
if (edad >= 18) {
  console.log("Eres mayor de edad. Puedes acceder al contenido.");
} else {
  console.log("Eres menor de edad. No puedes acceder al contenido.");
}

// Mostrar números del 1 al 10 utilizando un ciclo
for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
  // Generar un número aleatorio entre 1 y 100
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Solicitar al usuario que adivine el número
var numeroIngresado = prompt("Adivina el número (entre 1 y 100):");

// Verificar si el número ingresado es igual al número aleatorio
if (numeroIngresado == numeroAleatorio) {
  console.log("¡Felicitaciones! Adivinaste el número.");
} else {
  console.log("Lo siento, no adivinaste el número. El número era: " + numeroAleatorio);
}
