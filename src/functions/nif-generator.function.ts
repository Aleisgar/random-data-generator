function calculaLetra(nif: number) {
  return "TRWAGMYFPDXBNJZSQVHLCKE".charAt(nif % 23);
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

export function generateNIFNumber() {
  const nifNumber = Math.floor(1e8 * Math.random());
  return pad(nifNumber.toString(), 8) + calculaLetra(nifNumber);
}
