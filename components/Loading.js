const Loading = `<div id="loading" class="loader fixed" style="top:45%; left:45%"></div>`;

const onLoad = () => {
  $("#app").addClass("opacity-50");
  $('body').append(Loading);
}

const offLoad = () => {
  $("#loading").remove();
  $("#app").removeClass("opacity-50");
}

export { onLoad, offLoad }