/**
 * Devuelve el objeto color e icon segun la data
 * @param {Object} data - Data.
 * @param {string} est - Status.
 * @returns {Object} - {icon: "maintance", color: "gray"}
 */

function desingCards(data) {
  switch (data.est) {
    case "Ocupadas":
      return {
        icon: "lockClose",
        color: "red",
      }
    case "Disponibles":
      return {
        icon: "lockOpen",
        color: "cyan",
      }
    case "Reservadas":
      return {
        icon: "user",
        color: "yellow",
      }
    case "Mantenimiento":
      return {
        icon: "maintance",
        color: "gray",
      }
    default:
      return {
        icon: "infoCircle",
        color: "indigo"
      }
  }
}

export default desingCards;