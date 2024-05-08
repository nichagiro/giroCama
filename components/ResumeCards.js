import icon from "../icons/icon.js";

/**
 * Función que renderiza un Select.
 * @param {Array} data - Data resume.
 * @param {string} data.title - Title.
 * @param {number} data.value - Value.
 * @param {string} data.icon - Name icon.
 * @param {string} data.color - color icon.
 * @returns {HTMLElement} - Element html
*/
const ResumeCards = (data) => {
  let detail = "";
  $.each(data, function (index, item) {
    const det = `
    <div id="resumeCard-${index}" class=" shadow flex flex-col rounded-lg bg-${item.color}-50 px-4 py-8 text-center border-b-4 border-${item.color}-500">
      <dd class="text-${item.color}-500 flex justify-center">
        ${icon({ name: item.icon, size: 12 })}
      </dd>
      <dt class="text-lg font-bold text-${item.color}-500 ps-2">${item.title}: ${item.value}</dt>
    </div>
    `
    detail += det;
  });
  return detail
}

export default ResumeCards;
