import icon from "../icons/icon.js";

/**
 * Función que renderiza un Select.
 * @param {Object} data - Data panel.
 * @param {string} data.title - Title.
 * @param {string} data.id - Id.
 * @param {HTMLElement} data.children - JSX.
 * @param {boolean} data.collapse - JSX.
 * @returns {HTMLElement} - Element html
*/

const Panel = ({ title, children, collapse, id }) => {
  const ID = id || Date.now()

  if (collapse) {
    setTimeout(() => {
      $(`#${ID} .cursor-pointer`).on("click", () => {
        const $article = $(`#${ID} article`);
        $article.toggleClass("block hidden");
      });
    }, [200])
  }

  return (
    `
    <div class="shadow rounded-lg border border-gray-100 w-full bg-white" id="${ID}">
      <h3 class="px-5 py-3 bg-black text-white flex justify-between">
        ${title}      
      <div class="cursor-pointer">
        ${collapse && icon({ name: "collapse" })}
      </div>
      </h3>
      <hr>
        <article class="p-5">
         ${children}          
        </article>
    </div>
    `
  )
}

export default Panel;
