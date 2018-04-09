const CONNECTOR_WIDTH = 25;

/**
 * @description Adjust the title wrapper height and center the title based on
 * the height of the content box and the pixel length of the title string.
 * @param {String} boxID The CSS ID of the container box
 */
function adjustContainer(boxId) {
  const contentHeight = parseInt($( boxId + ' .content-area' ).css( 'height' ).slice(0,-2));
  const titleLth = parseInt($( boxId + ' .title' ).width());
  let newHeight = contentHeight < titleLth ? titleLth : contentHeight;
  newHeight += 40;
  $( boxId + ' .content-title-wrapper' ).css( 'height', newHeight + 'px');

  const backgroundUrl = $( boxId + " .pic").attr("src");
  if (backgroundUrl !== undefined) {
    $( boxId + ' .pic' ).css( 'width', newHeight + 'px' );
    $( boxId + ' .pic' ).css( 'height', newHeight + 'px' );
    $( boxId + ' .pic' ).css( 'background', `url("${backgroundUrl}"` );
    $( boxId + ' .pic' ).css( 'background-position', 'center' );
    $( boxId + ' .pic' ).css( 'background-size', 'cover' );
  }
}

/**
 * @description Draw a straight line connecting two major topic boxes
 * @param {Object} startTopic DOM node of the starting topic box
 * @param {Object} endTopic DOM node of the ending topic box
 */
function connectMajorTopics(startMajor, endMajor) {
  const startTopic = $( startMajor ).find( '.pic' );
  const endTopic = $( endMajor ).find( '.pic' );
  const startX = startTopic[0].offsetLeft + (startTopic[0].offsetWidth / 2);
  const startY = startTopic[0].offsetTop + startTopic[0].offsetHeight;
  const endX = endTopic[0].offsetLeft + (endTopic[0].offsetWidth / 2);
  const endY = endTopic[0].offsetTop;

  //drawLine(startX-CONNECTOR_WIDTH, startY, endX, endY, '#974B4B');
  drawLine(startX-CONNECTOR_WIDTH, startY, endX, endY, '#AA3939');
}

/**
 * @description Draw a "L" line connecting a major topic box to a minor
 * topic box
 * @param {Object} startTopic DOM node of the major topic box
 * @param {Object} endTopic DOM node of the minor topic box
 */
function connectMinorTopic(majorTopic, minorTopic) {
  // Calculate vertical line segment start & end points
  const majorContent = $( majorTopic ).find( '.content-area' );
  const minorContent = $( minorTopic ).find( '.content-area' );
  const seg1StartX = majorContent[0].offsetLeft + (CONNECTOR_WIDTH * 2);
  const seg1StartY = majorTopic[0].offsetTop + majorTopic[0].offsetHeight;
  const seg1EndX = seg1StartX;
  const seg1EndY = minorContent[0].offsetTop + (minorContent[0].offsetHeight / 2);

  // Calculate horizontal line segment end point
  const titleWrapper = $( minorTopic ).find( '.content-title-wrapper' );
  const seg2EndX = titleWrapper[0].offsetLeft;
  const seg2EndY = seg1EndY;

  drawLine(seg1StartX, seg1StartY, seg1EndX, seg1EndY, '#BC9A40');
  drawLine(seg1EndX, seg1EndY, seg2EndX, seg2EndY, '#BC9A40');
}

/**
 * @description Draw a "L" line connecting a major topic box to a minor
 * topic box
 * @param {Object} startX Starting X coordinate
 * @param {Object} startY Starting Y coordinate
 * @param {Object} endX Ending X coordinate
 * @param {Object} endY Ending Y coordinate
 * @param {String} lineColor RGB color string to be used to fill the line
 */
function drawLine(startX, startY, endX, endY, lineColor) {
  // Calculate line width and height based on whether a horizontal or
  // vertical line is being drawn
  const lineWidth = endY === startY ? endX - startX : CONNECTOR_WIDTH;
  const lineHeight = endY === startY ? CONNECTOR_WIDTH : endY - startY;

  // Create the canvas and apply styling to the line
  const c = $( '<canvas/>' ).attr({
    'width': lineWidth,
    'height': lineHeight
  }).css({
      'position': 'absolute',
      'top': startY,
      'left': startX,
      'width': `'${CONNECTOR_WIDTH}px'`,
      'background-color': `${lineColor}`,
      'border-color': 'black',
      'border-width': 'thin',
      'z-index': -1
  }).appendTo( $('body') )[0].getContext( '2d' );

  // Draw the line
  c.beginPath();
  c.moveTo(startX, startY);
  c.lineTo(endX, endY);
  c.stroke();
}

$(document).ready(function() {
  $( 'div .content-box' ).each(function( index, element ) {
    adjustContainer( `#${$( element ).attr( 'id' )}` );
  });

  connectMajorTopics($( '#about-box' ), $( '#oss-box' ));
  connectMinorTopic($( '#about-box' ), $( '#family-box' ));
  connectMinorTopic($( '#about-box' ), $( '#chingu-box' ));
  connectMinorTopic($( '#career-box' ), $( '#pm-box' ));
  connectMinorTopic($( '#career-box' ), $( '#jobhist-box' ));
  connectMinorTopic($( '#career-box' ), $( '#pubs-box' ));
  connectMinorTopic($( '#oss-box' ), $( '#gitaclue-box' ));
  connectMinorTopic($( '#oss-box' ), $( '#devgaido-box' ));
  connectMinorTopic($( '#oss-box' ), $( '#ideanebulae-box' ));
  connectMinorTopic($( '#oss-box' ), $( '#pam-box' ));

});