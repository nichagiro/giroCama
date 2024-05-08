import icon from "../icons/icon.js";

/**
 * Función que renderiza una tarjeta con información específica.
 * @param {number} index - index id.
 * @param {Object} data - Data card.
 * @param {string} data.room - Room name.
 * @param {number} data.time - Time bedroom.
 * @param {string} data.order - Info aditional.
 * @param {string} data.status - Status name.
 * @param {number} data.statusTime -Status time.
 * @param {string} data.nextStatus - Name next status.
 * @param {string} data.nextStatus - Name next status.
 * @returns {HTMLElement} - Element html
*/
const UbicationCard = (index, { room, time, order, status, statusTime, nextStatus, patient, nit, nitType }) => {
  return `
    <div class="rounded-lg border border-gray-100 shadow" id="section-${index}">
      <div class="bg-slate-800 p-6">
        <div class="flex justify-between w-full">
          <h2 class="text-lg font-bold text-white -900 sm:text-2xl">${room}</h2>
          <div class="text-${nextStatus ? "red" : "green"}-600">
            ${icon({ name: nextStatus ? "xCircle" : "checkCircle", size: 10 })}
          </div>
        </div>
        <div class="w-full justify-end flex mt-2">
          <span class="whitespace-nowrap rounded-full bg-cyan-100 px-2.5 py-0.5 text-sm text-cyan-700 mr-1">
            ${time || "NA"}
          </span>
          <b class="text-white">Horas Ocupadas</b>
        </div>
    </div>
    <dl class="-my-3 divide-y divide-gray-100 text-sm py-4">
        <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900">Orden</dt>
          <dd class="text-end sm:col-span-2 content-center truncate">
            <span class="rounded-full bg-cyan-100 px-2.5 py-0.5 text-sm text-cyan-700 w-1" title="${order}">
              ${order ?? "NA"}
            </span>
          </dd>
        </div>
        <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900">Estado Actual</dt>
          <dd class="text-end sm:col-span-2 content-center">
            <span class="rounded-full bg-cyan-100 px-2.5 py-0.5 text-sm text-cyan-700">
              ${status || "NA"}
            </span>
          </dd>
        </div>
        <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900">Tiempo Estado</dt>
          <dd class="text-end sm:col-span-2 content-center">
            <span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-sm text-slate-700">
              ${statusTime || 0}
            </span>
          </dd>
        </div>
        <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900 sm:col-span-2">Proximo Estado</dt>
          <dd class= "text-end content-center">
            <span class="rounded-full bg-pink-100 px-2.5 py-0.5 text-sm text-pink-700">
              ${nextStatus || "NA"}
            </span>
          </dd>
        </div>
        <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
        <dt class="font-medium text-gray-900">Paciente</dt>
        <dd class="text-end sm:col-span-2 content-center truncate">
          <span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-sm text-slate-700" title="${nit ? nitType + " " + nit + " - " + patient : ""}">
            ${patient ?? "NA"}
          </span>
        </dd>
      </div>
      </dl>
    </div>
    `
}

export default UbicationCard;