browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    document.body.style.color = request.textColor;
  });