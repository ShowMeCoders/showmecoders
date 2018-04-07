

/* Hover over book pics */
$( document ).ready( function () {

const bookPic = $("img.bookPic");

   bookPic.mouseenter(function (evt) {
   $(evt.target).css({"box-shadow": "1px 1px 5px #000"});
   });

   bookPic.mouseleave(function (evt) {
   $(evt.target).css({"box-shadow": ""});
   });


// alert(bookPic.length);

});
