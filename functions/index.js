// apis
import { getAllResumen } from "../apis/altas/resumen.js";

// components
import { offLoad, onLoad } from "../components/Loading.js";
import Menu from "../components/Menu.js";
import Panel from "../components/Panel.js";
import ResumeCards from "../components/ResumeCards.js";

// utils
import desingCards from "../utils/desingCards.js";

let data = [];

$(window.document).ready(() => onStart());

async function onStart() {
  onLoad();
  paintMenu();
  await getData();
  paintResume();
  offLoad();
}

const paintMenu = () => {
  $("#app").prepend(Menu)
}

const getData = async () => {
  data = await getAllResumen()
}

const paintResume = () => {
  const dataResume = data.map(item => ({
    ...item,
    ...desingCards(item)
  }))
  
  const resume = Object.groupBy(dataResume, ({ ubi }) => ubi);
  const items = Object.values(resume).toReversed();

  items.forEach(element => {
    let Component = "";

    const params = element.map(item => ({
      ...item,
      title: item.est,
      value: item.cant
    }))

    const Card = ResumeCards(params);

    Component += Card;

    const PanelComponent = Panel({
      collapse: true,
      id: element[0].ubi,
      title: element[0].des,
      children: `<div class="flex flex-wrap gap-7">${Component}<div>`
    })

    $('#data').append(PanelComponent);
  });
}
