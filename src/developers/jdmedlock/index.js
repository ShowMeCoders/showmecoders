
const MIN_HEIGHT = 145; /* Minimum content box height */
/**
 * @description Ajust the size of the embedded image to match that of its
 * container.
 * @param {String} boxID The CSS ID of the container box
 */
function adjustImageSizes(boxId) {
  const contentHeight = $( boxId ).css( "height" ).slice(0,-2) - 6;
  $( boxId + " .pic" ).css( "width", contentHeight+'px');
  $( boxId + " .pic" ).css( "height", contentHeight+'px');
  $( boxId + " img" ).css( "max-width", contentHeight+'px');
  $( boxId + " img" ).css( "max-height", contentHeight+'px');
}

/**
 * @description Adjust the title wrapper height and center the title based on
 * the height of the content box and the pixel length of the title string.
 * @param {String} boxID The CSS ID of the container box
 */
function adjustTitlePositions(boxId) {
  const contentHeight = $( boxId ).css( "height" ).slice(0,-2);
  const titleLth = $( boxId + " .content-title" ).width();
  console.log(`${boxId} contentHeight:${contentHeight} titleLth:${titleLth}`);
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
  adjustImageSizes('#about-box');
  adjustTitlePositions('#family-box');
  adjustImageSizes('#family-box');
  adjustTitlePositions('#chingu-box');
  adjustImageSizes('#chingu-box');
  adjustTitlePositions('#career-box');
  adjustImageSizes('#career-box');
  adjustTitlePositions('#projects-box');
  adjustTitlePositions('#pam-box');
  adjustTitlePositions('#devgaido-box');
  adjustTitlePositions('#ideanebulae-box');
});