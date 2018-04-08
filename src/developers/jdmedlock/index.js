
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
  const LINE_WIDTH = 25;
  const aboutBox = $('#about-box .pic');
  const startX = aboutBox[0].offsetLeft + (aboutBox[0].offsetWidth/2);
  const startY = aboutBox[0].offsetTop + aboutBox[0].offsetHeight;

  const ossBox = $('#oss-box .pic');
  const endX = ossBox[0].offsetLeft + (ossBox[0].offsetWidth / 2);
  const endY = ossBox[0].offsetTop;

  const c = $('<canvas/>').attr({
    'width': `${LINE_WIDTH}`,
    'height': endY - startY
  }).css({
      'position': 'absolute',
      'left': `${startX-(LINE_WIDTH/2)}`,
      'top': startY,
      'width': `'${LINE_WIDTH}px'`,
      'background-color': '#974B4B',
      'border-color': 'black',
      'border-width': 'thin',
      'z-index': -1
  }).appendTo($('body'))[0].getContext('2d');
  c.strokeStyle = '#FF0000';
  c.lineWidth = LINE_WIDTH;
  c.beginPath();
  c.moveTo(startX-(LINE_WIDTH/2), startY);
  c.lineTo(endX-(LINE_WIDTH/2), endY);
  c.stroke();
});