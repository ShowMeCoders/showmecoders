
$( document ).ready( function () {

const root = $("html, body");
const bookPic = $("img.bookPic");

// Smooth Scroll between anchor tag links
 $("a[href^='#']").click(function(evt){
   evt.preventDefault();

   root.animate({
     scrollTop: $($.attr(this, "href")).offset().top
   }, 800);
 });

//Add Box-Shadow on Book Pics on Hover
 bookPic.mouseenter(function (evt) {
 $(evt.target).css({"box-shadow": "1px 1px 5px #000"});
 });

 bookPic.mouseleave(function (evt) {
 $(evt.target).css({"box-shadow": ""});
 });

// alert(bookPic.length);


//SlideShow Build Components
/*  COMMENT UNTIL WORKING
var slideIndex = 1;
showSlides(slideIndex);

//Next/Prev controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Thumbnail Image control
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides (n) {
  var i;
  var slides = $("div.slides");
  var dots = $("span.dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i=0; 1 < slides.length; i++) {
    slides.css({"display": "none"});
    //slides[i].style.display = "none";
  }
  for (i=0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/

});
