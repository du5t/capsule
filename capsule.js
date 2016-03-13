var getSelectedHTML = function() {
  var range = window.getSelection().getRangeAt(0),
      content = range.cloneContents(),
      span = document.createElement('span');
  
  span.appendChild(content);
  span.className = 'journalet-selected-content';
  var modify = [];
  /* iframe.querySelectorAll('img').map(function (i, el) { modify.push(el) }); */

  return span;
};

var closeFloatyWindow = function() {
  document.getElementById('floaty-window').remove();
};

var sendHTML = function() {
  closeFloatyWindow();
};