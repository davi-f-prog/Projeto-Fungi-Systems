window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 510 || document.documentElement.scrollTop > 510) {
    navega.className = "navbar";
  } else {
    navega.className = "navscroll";
  } if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    itens.className = "animacao_icones";
  } else {
    itens.className = "icones";
}
}


