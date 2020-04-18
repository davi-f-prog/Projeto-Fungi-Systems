window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 510 || document.documentElement.scrollTop > 510) {
    navega.className = "navbar";
  } else {
    navega.className = "banana";
  } if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    itens.className = "animacao_icone";
  } else {
    itens.className = "icones";
  }if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    sobre_animacao.className = "anima_sobre_mim";
  } else {
    sobre_animacao.className = "sobre_mim";
  }
}



