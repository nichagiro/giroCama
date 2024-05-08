import ajax from "../../utils/ajax.js";

// get data all ubications
const getUbications = async () =>
  await ajax({
    url: "../../examples/ubications.json",
    type: "GET",
    defaultValue: [],
  })


export {
  getUbications
}