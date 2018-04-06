
/**
 * @description Adjust the title wrapper height and center the title based on
 * the height of the content box and the pixel length of the title string.
 * @param {String} boxID The CSS ID of the container box
 */
function adjustContainer(boxId) {
  const contentHeight = parseInt($( boxId + " .content-area" ).css( "height" ).slice(0,-2));
  const titleLth = parseInt($( boxId + " .title" ).width());
  let newHeight = contentHeight < titleLth ? titleLth : contentHeight;
  newHeight += 40;
  $( boxId + " .content-title-wrapper" ).css( "height", newHeight+'px');

  const backgroundUrl = $( boxId + " .pic").attr("src");
  if (backgroundUrl !== undefined) {
    $( boxId + " .pic" ).css( "width", newHeight+'px');
    $( boxId + " .pic" ).css( "height", newHeight+'px');
    $( boxId + " .pic" ).css( "background", `url("${backgroundUrl}"`);
    $( boxId + " .pic" ).css( "background-position", "center");
    $( boxId + " .pic" ).css( "background-size", "cover");
  }
}

$(document).ready(function() {
  $( "div .content-box" ).each(function( index, element ) {
    adjustContainer(`#${$( element ).attr( 'id' )}`);
  });
});