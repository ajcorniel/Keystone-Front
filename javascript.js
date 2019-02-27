var slideIndex = 0;

function seeSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(seeSlides, 3000);
}

seeSlides();

var inmueblemodal = document.getElementById('myModal');
var profilemodal = document.getElementById('pModal');

var inmuebleButton = document.getElementById('myBtn');
var profileButton = document.getElementById('pButton');

var span = document.getElementsByClassName("close")[0];


inmuebleButton.onclick = function() {
  inmueblemodal.style.display = "block";
}

profileButton.onclick = function() {
  profilemodal.style.display = "block";
}

span.onclick = function() {
  inmueblemodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == inmueblemodal) {
    inmueblemodal.style.display = "none";
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("showPics");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}