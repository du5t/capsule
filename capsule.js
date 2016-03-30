var getSelectedHTML = function() {
  chrome.tabs.query({active: true}, function(tabs) {
    var tab = tabs[0]

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
  const parsedSelection = JSON.parse(selection)  
  
  var modify = []

  const selectedBox = document.getElementById('capsule-selected-content')
  
  if (parsedSelection.html) {
    selectedBox.innerHTML = parsedSelection.html
  }
}

var sendHTML = function(htmlString) {
  chrome.tabs.getSelected(function(selectedTab) {
    let serialisedURI = 'ssb-capsule://?body='
                          .concat(htmlString)
                          .concat('&src=')
                          .concat(selectedTab.url)

    const serialiserTabProps = {
      url: serialisedURI,
      active: true
    }

    console.log('launching a capsule...')
    chrome.tabs.create(serialiserTabProps, function(URITab) {
      // TODO this doesn't close the new tab
      chrome.tabs.remove(URITab.id)
    })
  })
}

var hookToElements = function() {
  const sendButton = document.getElementById('capsule-send')
  sendButton.addEventListener('click', function() {
    const selectedBox = document.getElementById('capsule-selected-content')

    sendHTML(selectedBox.innerHTML)
  })
}

document.addEventListener('DOMContentLoaded', getSelectedHTML)
document.addEventListener('DOMContentLoaded', hookToElements)