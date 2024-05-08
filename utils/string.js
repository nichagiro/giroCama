/**
 * Función que corta un cadena
 * @param {string} [start=0] - Start caracter.
 * @param {number} end - End caracter.
 * @param {string} string - Varchar data.
 * @returns {string} - String cut
 */
const cutString = ({ start = 0, end, string }) =>
string.length > end ? string.substring(start, end) : string

export {
  cutString
}