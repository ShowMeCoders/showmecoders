
/**
 * @description Adjust the title wrapper height and center the title based on
 * the height of the content box and the pixel length of the title string.
 * @param {String} boxID The CSS ID of the container box
 */
function adjustContainer(boxId) {
  const contentHeight = parseInt($( boxId + " .content-area" ).css( "height" ).slice(0,-2));
  const titleLth = parseInt($( boxId + " .title" ).width());
  console.log(`${boxId} contentHeight:${contentHeight} titleLth:${titleLth}`);
  let newHeight = contentHeight < titleLth ? titleLth : contentHeight;
  newHeight += 20;
  console.log(`newHeight: ${newHeight}`);
  $( boxId + " .content-title-wrapper" ).css( "height", newHeight+'px');
  //$( boxId + " .content-title" ).css( "top", ((newHeight/2)+((newHeight-titleLth)))+'px');
  $( boxId + " .content-title" ).css( "top", '68%');


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
  adjustContainer('#about-box');
  adjustContainer('#family-box');
  adjustContainer('#chingu-box');
  adjustContainer('#career-box');
  adjustContainer('#projects-box');
  adjustContainer('#pam-box');
  adjustContainer('#devgaido-box');
  adjustContainer('#ideanebulae-box');
});