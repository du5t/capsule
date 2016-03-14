// var ssbClient = require('ssb-client')
// var ssbify = require('./lib/ssbify-browser.js')

var getSelectedHTML = function() {
  chrome.tabs.query({active: true}, function(tabs) {
    var tab = tabs[0]
    debugger
    chrome.tabs.executeScript(
      {
        file: './serializeSelectedHTML.js',
        runAt: 'document_end'
      },
      renderSelectedHTML
    )
  })
}

var renderSelectedHTML = function(selection) {
  debugger
  const parsedSelection = JSON.parse(selection)  

// TODO parse CSS and include also
//   const styleString = '<style>'
//           .concat(parsedSelection.css.reduce((cssStr, cssObj) => 
//                   cssStr.concat(JSON.stringify(cssObj)), ''))
//           .concat('</style>')
  
  var modify = []
  /* iframe.querySelectorAll('img').map(function (i, el) { modify.push(el) }) */

  const selectedBox = document.getElementById('journalet-selected-content')
  if (parsedSelection.html) {
    selectedBox.innerHTML = parsedSelection.html
  }
}

var sendHTML = function(htmlString, url) {
  ssbify(htmlString, { url: url, ignoreBrokenImgLinks: true },
         function (err, res) {
           if (err) throw err
           console.log(res)
           alert(res)
         })
}

document.addEventListener('DOMContentLoaded', getSelectedHTML)
