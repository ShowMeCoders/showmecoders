
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

});
