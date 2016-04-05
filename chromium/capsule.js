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

var encodeHTMLString = function(htmlString) {
  // see:
  // https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html
  // for how terrible this can get

  // anyway we're just going to base64 it
  return btoa(encodeURIComponent(htmlString))
}

var sendHTML = function(htmlString, comment, channel) {
  chrome.tabs.getSelected(function(selectedTab) {
    let serialisedURI = 'ssb-capsule://?body='
                          .concat(encodeHTMLString(htmlString))
                          .concat('&title=').concat(selectedTab.title)

    if (typeof selectedTab.url === 'string') {
      serialisedURI = serialisedURI.concat('&src=').concat(selectedTab.url)
    }

    if (typeof comment === 'string') {
      serialisedURI = serialisedURI.concat('&comment=').concat(comment)
    }

    if (typeof channel === 'string') {
      serialisedURI = serialisedURI.concat('&channel=').concat(channel)
    }

      
    const serialiserTabProps = {
      url: encodeURI(serialisedURI),
      active: true
    }

    console.log('launching a capsule...')
    chrome.tabs.create(serialiserTabProps, function(URITab) {
      // TODO this doesn't close the new tab
      chrome.tabs.remove(URITab.id)
    })
  })
}

var clearField = function() {
  return function listener(event) {
    event.target.innerText = ''
    event.target.removeEventListener(event.type, listener)
  }
}

var hookToElements = function() {
  const sendButton = document.getElementById('capsule-send')
  const commentBox = document.getElementById('capsule-comment-field')
  const channelField = document.getElementById('capsule-channel-field')

  channelField.addEventListener('click', clearField())
  commentBox.addEventListener('click', clearField())

  sendButton.addEventListener('click', function() {
    const selectedBox = document.getElementById('capsule-selected-content')
    const commentBox = document.getElementById('capsule-comment-field')
    const channelField = document.getElementById('capsule-channel-field')

    // optional args: comment, channel choice
    const comment = (commentBox.innerText.length > 0 &&
                     commentBox.innerText !== 'Comment here') ?
      commentBox.innerText : null
    const channel = channelField.innerText.length > 0 ?
      channelField.innerText : null

    sendHTML(selectedBox.innerHTML, comment, channel)
  })
}

document.addEventListener('DOMContentLoaded', getSelectedHTML)
document.addEventListener('DOMContentLoaded', hookToElements)