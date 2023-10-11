const mybutton = document.querySelector('.to-the-top-icon');
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

}