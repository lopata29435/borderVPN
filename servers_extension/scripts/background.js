chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "checkConnection") {
        checkConnection();
      sendResponse({ status: 'success', message: 'Server connected' });
    }
    return true;
  });
  
  function checkConnection() {
    var serverUrl = "http://put in your ip:3000";
  
    fetch(serverUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Response from the server:", data);
      })
      .catch(error => {
        console.error("Error during a request to the server:", error);
      });
  }

