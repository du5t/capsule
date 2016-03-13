//Making & processing snippets

// function processSnapshot() {
// 	if (!lastSnapshot) {
// 		return;
// 	}
// 
// 	var styles = lastSnapshot.css,
// 			html = lastSnapshot.html,
// 			prefix = "";
// 
// 	if (includeAncestors.is(':checked')) {
// 		styles = lastSnapshot.ancestorCss.concat(styles);
// 		html = lastSnapshot.leadingAncestorHtml + html + lastSnapshot.trailingAncestorHtml;
// 	}
// 
// 	loader.addClass('processing');
// 
// 	if (removeDefaultValuesInput.is(':checked')) {
// 		styles = defaultValueFilter.process(styles);
// 	}
// 
// 	if (propertiesCleanUpInput.is(':checked')) {
// 		styles = shorthandPropertyFilter.process(styles);
// 	}
// 	if (removeWebkitPropertiesInput.is(':checked')) {
// 		styles = webkitPropertiesFilter.process(styles);
// 	}
// 	if (combineSameRulesInput.is(':checked')) {
// 		styles = sameRulesCombiner.process(styles);
// 	}
// 
// 	if (fixHTMLIndentationInput.is(':checked')) {
// 		html = $.htmlClean(html, {
// 			removeAttrs: ['class'],
// 			allowedAttributes: [
// 				['id'],
// 				['placeholder', ['input', 'textarea']],
// 				['disabled', ['input', 'textarea', 'select', 'option', 'button']],
// 				['value', ['input', 'button']],
// 				['readonly', ['input', 'textarea', 'option']],
// 				['label', ['option']],
// 				['selected', ['option']],
// 				['checked', ['input']]
// 			],
// 			format: true,
// 			replace: [],
// 			replaceStyles: [],
// 			allowComments: true
// 		});
// 	}
// 
// 	styles = cssStringifier.process(styles);
// 
// 	if (isValidPrefix(idPrefix.val())) {
// 		prefix = idPrefix.val();
// 	}
// 
// 	//replacing prefix placeholder used in all IDs with actual prefix
// 	html = html.replace(/:snappysnippet_prefix:/g, prefix);
// 	styles = styles.replace(/:snappysnippet_prefix:/g, prefix);
// 
// 	htmlTextarea.val(html);
// 	cssTextarea.val(styles);
// 
// 	loader.removeClass('processing');
// }


var getSelectedHTML = function() {
  chrome.tabs.query({active: true}, function(tabs) {
    var tab = tabs[0]
    chrome.tabs.executeScript(
      {
        file: 'serializeSelectedHTML.js',
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

var sendHTML = function() {
  //  closeFloatyWindow()
  window.close()
}

document.addEventListener('DOMContentLoaded', getSelectedHTML)
