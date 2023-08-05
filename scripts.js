function toggleMenu() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("open");
}


var slidePosition = 1;
SlideShow(slidePosition);

// Forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

// Image controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}
var slideIndex = 0;

function move(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = 0;
    } else if (slideIndex > 1) { // only 2 positions are available (0, 1)
        slideIndex = 1;
    }
    updateSlidePosition();
}

var totalSlides = 2; // 2 positions are available for 3 visible slides each

function updateSlidePosition() {
    var translateX = -slideIndex * 33.333; // Move by one-third of the container
    document.querySelector(".gallery-container").style.transform = "translateX(" + translateX + "%)";
}

updateSlidePosition();


function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(function() { plusSlides(1); }, 3000);
}
var autoSlideInterval = setInterval(function() { plusSlides(1); }, 3000);

