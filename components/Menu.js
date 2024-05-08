import icon from "../icons/icon.js"

const Menu = () => {
  return (
    `
    <aside
      class="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <a href="#">
        <img class="w-auto"
          src="https://www.clinicalasvegas.com/wp-content/uploads/2023/03/cropped-lohoo_Mesa-de-trabajo-1.jpg" alt="">
      </a>

      <div class="flex flex-col justify-between flex-1 mt-6">
        <nav class="-mx-3 space-y-6 ">
          <div class="space-y-3 ">
            <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Menu</label>
            <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/">
              ${icon({ name: "home" })}
              <span class="mx-2 text-sm font-medium">INICIO</span>
            </a>
            <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/sections.html">
              ${icon({ name: "ubications" })}
              <span class="mx-2 text-sm font-medium">ALTAS</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
    `
  )
}

export default Menu()