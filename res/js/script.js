window.onscroll = function() {scrollFun()};
var header = document.getElementById("toptool");
var sticky = header.offsetTop;

function scrollFun() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
