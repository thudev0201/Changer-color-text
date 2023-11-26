document.addEventListener('DOMContentLoaded', function() {
    var colorPicker = document.getElementById('colorPicker');
    var applyButton = document.getElementById('applyButton');
  
    applyButton.addEventListener('click', function() {
      var textColor = colorPicker.value;
      browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {textColor: textColor});
      });
    });
  });