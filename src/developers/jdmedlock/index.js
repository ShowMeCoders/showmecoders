
  const MIN_HEIGHT = 145; /* Minimum content box height */
/**
 * @description Adjust the title wrapper height and center the title based on
 * the height of the content box and the pixel length of the title string.
 * @param {String} box The CSS ID of the content box
 */
function adjustTitlePositions(boxId) {
  const contentHeight = $( boxId ).css( "height" ).slice(0,-2);
  const titleLth = $( boxId + " .content-title" ).width();
  // console.log(`${boxId} contentHeight:${contentHeight} titleLth:${titleLth}`);
  // console.log(`calculated top: ${((contentHeight/2)+(titleLth/2))}`);
  if (contentHeight < MIN_HEIGHT) {
    $( boxId + " .content-title-wrapper" ).css( "height", MIN_HEIGHT+'px');
    $( boxId + " .content-title" ).css( "top", ((MIN_HEIGHT/2)+(titleLth/2))+'px');
  } else {
    $( boxId + " .content-title-wrapper" ).css( "height", contentHeight+'px');
    $( boxId + " .content-title" ).css( "top", ((contentHeight/2)+(titleLth/2))+'px');
  }
}

$(document).ready(function() {

  adjustTitlePositions('#about-box');
  adjustTitlePositions('#family-box');
  adjustTitlePositions('#chingu-box');
  adjustTitlePositions('#career-box');
  adjustTitlePositions('#pam-box');
  adjustTitlePositions('#devgaido-box');
  adjustTitlePositions('#ideanebulae-box');

});