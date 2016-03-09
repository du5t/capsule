(function() {
var getSelectedHTML = function() {
  var range = window.getSelection().getRangeAt(0),
      content = range.extractContents(),
      span = document.createElement('SPAN');

  var modify = [];
  span.appendChild(content);
  /* span.querySelectorAll('img').map(function (i, el) { modify.push(el) }); */

  return span.innerHTML;

};

var createFloatyWindow = function() {
  var menu = `<style>
 .journalet-menu {
   position: fixed;
   top: 0;
   right: 0;
   max-width: 50%;
   min-width: 10rem;
   /* height: 25%; */
   background: #222;
   /* border-width: 2px; */
   border-color: cornsilk;
   border-radius: 5px;
 }

 .journalet-selected-content {
   width: 100%;
   /* overflow-wrap: break-word; */
   overflow: scroll;
   background-color: #CCC;
   /* height: 40%; */
   min-height: 40%;
 }

 .journalet-selected-content {}

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
  <div class="journalet-title">Title</div>
  <div class="journalet-selected-content">
    ${getSelectedHTML()}
  </div>
  <hr/>
  <div class="journalet-comment-field">
    Comments go here.
  </div>
  <div class="journalet-controls">
    <button>Cancel</button>
    <button>Send</button>
  </div>
</div>
`;
  var insert = document.createElement('div');
  insert.innerHTML = menu;
  document.body.appendChild(insert);
};

createFloatyWindow();
})()
