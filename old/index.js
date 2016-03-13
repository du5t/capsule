(function() {
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

var createFloatyWindow = function() {
  var menu = `<style>
 .journalet-menu {
   z-index: 999;
   position: fixed;
   top: 0;
   right: 0;
   max-width: 50%;
   min-width: 10rem;
   max-height: 600px;
   background: #222;
   /* border-width: 2px; */
   border-color: cornsilk !important;
   border-radius: 5px;
 }

 .journalet-selected-content {
   position: relative;
   width: 100%;
   /* overflow-wrap: break-word; */
   overflow: scroll;
   background-color: inherit;
   max-height: 400px;
   height: 40%;
 }

 .journalet-selected-content {}

 .journalet-hrule {
   background-color: #EEE;
   color: #EEE;
   height:1px;
   border:none;
 }

 .journalet-title {
   color: #EEE;
   text-align: center;
   background: gray;
   border-width: 2px;
   border-color: black;
   border-radius: 2px;
   padding: 0.25rem;
   border-left: 0.25rem;
   border-right: 0.25rem;
 }

 .journalet-comment-field {
   background-color: steelblue;
   border-width: thick;
   border-color: white;
   border-radius: 2px;
   min-height: 4em;
   overflow-y: visible;
 }

 .journalet-controls {
   display: block;
   text-align: center;
   padding: 0.5rem;
 }

 journalet-button {
   background-color: darkslategrey;
   color: #EEE;
   border: 0;
   border-radius: 5px;
   padding-top: 0.25rem;
   padding-bottom: 0.25rem;
 }
</style>
<div class="journalet-menu">
  <div class="journalet-title">Capsule</div>
  <div class="journalet-selected-content">
    ${getSelectedHTML().outerHTML}
  </div>
  <hr class="journalet-hrule" />
  <div class="journalet-comment-field">
    Comments go here.
  </div>
  <div class="journalet-controls">
    <button onClick=${closeFloatyWindow}>Cancel</button>
    <button onClick=${sendHTML}>Send</button>
  </div>
</div>
`;
  var insert = document.createElement('div');
  insert.id = 'floaty-window';
  insert.innerHTML = menu;
  document.body.appendChild(insert);
};

createFloatyWindow();
})()
