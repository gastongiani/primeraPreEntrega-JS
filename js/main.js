document.getElementById('calculatorForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // obtencion de los valores ingresados en el formulario
  const operand1 = parseFloat(document.getElementById('operand1').value);
  const operator = document.getElementById('operator').value;
  const operand2 = parseFloat(document.getElementById('operand2').value);

  // Realizar cálculos
  const resultado = calcular(operand1, operator, operand2);

  // resultados en la página
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = `El resultado es: ${resultado}`;

  // boton de reinicio
  const resetButton = document.getElementById('resetButton');
  resetButton.style.display = 'block';
});

document.getElementById('resetButton').addEventListener('click', function() {
  // Restablece el formulario y oculta los resultados
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = '';
  document.getElementById('calculatorForm').reset();

  // Oculta el botón de reinicio nuevamente
  const resetButton = document.getElementById('resetButton');
  resetButton.style.display = 'none';
});

function calcular(operand1, operator, operand2) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      return 'Operación no válida';
  }
}
