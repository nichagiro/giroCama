import ajax from "../../utils/ajax.js";

// get data all sections (altas)
const getSections = async () =>
  await ajax({
    url: "../../examples/services.json",
    type: "GET",
    defaultValue: [],
  })


export {
  getSections
}