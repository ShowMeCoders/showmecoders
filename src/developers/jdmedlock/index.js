
  const MIN_HEIGHT = 75; /* Minimum content box height */
/**
 * @description Adjust the title wrapper height and center the title based on
 * the height of the content box and the pixel length of the title string.
 * @param {String} box The CSS ID of the content box
 */
function adjustTitlePositions(boxId) {
  contentHeight = $( boxId ).css( "height" ).slice(0,-2);
  titleLth = $( boxId + " .content-title" ).width();
  if (contentHeight < MIN_HEIGHT) {
    $( boxId + " .content-title-wrapper" ).css( "height", MIN_HEIGHT+'px');
    $( boxId + " .content-title" ).css( "top", ((MIN_HEIGHT/2)-10)+'px');
  } else {
    $( boxId + " .content-title-wrapper" ).css( "height", contentHeight+'px');
    $( boxId + " .content-title" ).css( "top", ((MIN_HEIGHT/2)+(titleLth/2))+'px');
  }
}

$(document).ready(function() {

  adjustTitlePositions('#about-box');
  adjustTitlePositions('#career-box');

});