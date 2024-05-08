import ajax from "../../utils/ajax.js";

// get resumen data for sections (altas)
const getResumen = async () =>
  await ajax({
    url: "../../examples/resumen.json",
    type: "GET",
    defaultValue: [],
  })

const getAllResumen = async () =>
  await ajax({
    url: "../../examples/resumenGeneral.json",
    type: "GET",
    defaultValue: [],
  })


export {
  getResumen,
  getAllResumen
}