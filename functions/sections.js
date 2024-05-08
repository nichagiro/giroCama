// apis
import { getResumen } from "../apis/altas/resumen.js";
import { getSections } from "../apis/altas/sections.js";
import { getUbications } from "../apis/altas/ubications.js";

// ui
import Select from "../components/Select.js";
import UbicationCard from "../components/UbicationCard.js";
import ResumeCards from "../components/ResumeCards.js";
import Panel from "../components/Panel.js";
import { offLoad, onLoad } from "../components/Loading.js";
import Menu from "../components/Menu.js";

// utils
import desingCards from "../utils/desingCards.js";

let resumen = [];
let ubications = [];
let sections = [];

$(window.document).ready(() => onStart());

const onStart = async () => {
  onLoad();
  paintMenu();
  sections = await getSections();
  paintSections(sections);
  offLoad();
}

const paintMenu = () => {
  $("#app").prepend(Menu)
}

const paintResume = (resume) => {
  const data = resume.map(item => ({
    title: item.est,
    value: item.cant,
    ...desingCards(item)
  }))

  const component = ResumeCards(data);
  $('#resume').append(component);
}

const paintUbications = ubications => {
  const ubicationsFase = Object.groupBy(ubications, ({ ubinom }) => ubinom);
  let component = "";

  Object.values(ubicationsFase).forEach((item, index) => {
    $.each(item, function (index, elemento) {
      const card = UbicationCard(index, {
        nextStatus: elemento.estsig,
        order: elemento.actnom,
        room: elemento.habcod,
        status: elemento.estact,
        statusTime: elemento.tiempoestado,
        time: elemento.tiempocama,
        patient: elemento.nombre,
        nit: elemento.pacide,
        nitType: elemento.pactid
      });
      component += card;
    });

    $('#data').append(
      Panel({
        title: Object.keys(ubicationsFase)[index],
        children: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">${component}</div>`,
        collapse: true
      })
    );
  })
}

const paintSections = sections => {
  const select = Select({
    data: sections.map(item => ({ value: item.sercod, name: item.sernom })),
    id: "sections-select",
    label: "Estados Habitaciones",
    onchange: value => onSelect(value)
  })
  $('#sections').append(select);
}

const onSelect = async value => {
  onLoad();
  setTimeout(async () => {
    ubications = value ? await getUbications() : [];
    resumen = value ? await getResumen() : [];

    $('#resume').empty();
    $('#data').empty();

    resumen && paintResume(resumen);
    paintUbications(ubications);
    offLoad();
  }, 1);
}

