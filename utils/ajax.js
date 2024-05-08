/**
 * Function to perform an AJAX request using jQuery.
 * @param {Object} data - Data for the AJAX request.
 * @param {string} [data.type="GET"] - HTTP request ('PUT', 'POST') Default is 'GET'
 * @param {string} data.url - URL request.
 * @param {string} data.payload - Payload request.
 * @param {string} [data.dataType="json"] - Data type. Default is 'json'.
 * @param {any} [data.defaultValue] - Default value to return in case of an error.
 * @returns {Promise} - Promise ajax.
 */
const ajax = async ({ type, url, dataType, defaultValue, payload }) => {
  try {
    return await $.ajax({
      url,
      type,
      data: payload,
      dataType: dataType ?? "json",
    });
  } catch ({ message }) {
    alert(message ?? "Ha ocurrido un error");
    return defaultValue;
  }
}

export default ajax