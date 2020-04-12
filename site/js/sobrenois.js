window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 510 || document.documentElement.scrollTop > 510) {
    navega.className = "navbar";
  } else {
    navega.className = "banana";
  }
}


