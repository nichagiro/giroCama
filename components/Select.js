/**
 * Función que renderiza un Select.
 * @param {Object} data - Data Select.
 * @param {string} data.id - Id component.
 * @param {string} data.label - Label name.
 * @param {Array} data.data - Array of data.
 * @param {string} data.selected - Default selected.
 * @param {void} data.onchange - Event change.
 * @returns {HTMLElement} - Element html
*/
const createOptions = (data, selected, label) => {
  let options = "<option value=''>Seleccione</option>";
  $.each(data, function (index, item) {
    const isSelected = selected === item.value ? 'selected' : '';
    const opts = `<option id="${label}-${index}" value="${item.value}" ${isSelected}>${item.name}</option>`
    options += opts;
  });
  return options
}

const Select = ({ id, label, data, selected, onchange }) => {
  // add event listener change & execute just first event when there's selected
  setTimeout(() => {
    $(`#${id}`).on('change', e => onchange(e.target.value));
    if (onchange && selected && data.some(item => item.value == selected)) {
      onchange(selected);
    }
  }, 200)
  return `
  <div class="max-w-60 min-w-56">
    <label for="${id}" class="block text-sm font-medium text-gray-900 ps-1">${label}</label>
    <select name="${id}" id="${id}" class="w-full p-2 mt-1 rounded-lg border border-gray-300 text-gray-700 sm:text-sm">
      ${createOptions(data, selected, label)}
    </select>
  </div>`
}

export default Select;

