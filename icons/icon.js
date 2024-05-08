import types from "./types.js";

/**
 * Función que renderiza un Select.
 * @param {Object} data - Data Icon.
 * @param {string} data.name - icon Name.
 * @param {string} data.className - Class.
 * @param {number} data.size - Size.
 * @returns {HTMLElement} - Element html
 */
const icon = ({ name, size }) => {
  const clas = size ? `h-${size} w-${size}` : "w-6 h-6";
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="${clas}">
    ${types[name]}
  </svg>
  `
}

export default icon;