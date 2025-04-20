// Genera una letra aleatoria del conjunto definido
const alphabet = "ABCDEFGHJNPQRSUVW";
const randomLetter = alphabet.charAt(Math.floor(alphabet.length * Math.random()));

// Genera números aleatorios
const randomTwoDigitNumber = Math.floor(100 * Math.random());
const randomFiveDigitNumber = Math.floor(1e5 * Math.random());

// Combina los valores generados en un formato específico
const result = randomLetter + pad(randomTwoDigitNumber.toString(), 2) + pad(randomFiveDigitNumber.toString(), 5);

/**
 * Calcula el control CIF según un número dado.
 * @param {string} cif - El identificador al que se calcula el control.
 * @returns {string|number} - La letra o dígito de control calculado.
 */
function calculateCIFControl(cif: string) {
  const numericPart = cif.slice(1); // Obtiene la parte numérica (sin la letra inicial)
  let sumOddPositions = 0; // Suma de los dígitos en posiciones impares
  let sumEvenPositions = 0; // Suma de los dígitos en posiciones pares

  // Calcula la suma de las posiciones impares
  for (let i = 1; i < numericPart.length; i += 2) {
    sumOddPositions += parseInt(numericPart.charAt(i));
  }

  // Calcula la suma de las posiciones pares con multiplicación por 2
  for (let i = 0; i < numericPart.length; i += 2) {
    const doubledValue = 2 * parseInt(numericPart.charAt(i));
    sumEvenPositions +=
      doubledValue < 10
        ? doubledValue
        : parseInt(String(doubledValue).charAt(0)) + parseInt(String(doubledValue).charAt(1));
  }

  // Calcula el dígito de control
  const totalSum = sumOddPositions + sumEvenPositions;
  const controlDigit = 10 - (totalSum % 10);

  // Obtiene la letra inicial del CIF
  const firstLetter = cif.charAt(0).toUpperCase();

  // Determina el tipo de control según la letra inicial
  if (/^[PQRSNW]$/.test(firstLetter)) {
    return String.fromCharCode(64 + controlDigit).toUpperCase(); // Convierte a letra
  } else if (/^[ABCDEFGHJUV]$/.test(firstLetter)) {
    return controlDigit === 10 ? 0 : controlDigit; // Devuelve el dígito
  }
}
/**
 * Rellena un número con ceros a la izquierda hasta alcanzar la longitud deseada.
 * @param {string} number - El número a rellenar.
 * @param {number} maxLength - Longitud deseada.
 * @returns {string} - Número rellenado con ceros.
 */
function pad(number: string, maxLength: number): string {
  number = number.toString();
  return number.length < maxLength ? pad("0" + number, maxLength) : number;
}

export function generateCIFNumber() {
  const cifControl = calculateCIFControl(result);
  console.log(result);
  return result + cifControl;
}
