window.onscroll = function() {scroll()};

function scroll() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    itens.className = "anima_icones";
  } else {
    itens.className = "icones img";
}
}


