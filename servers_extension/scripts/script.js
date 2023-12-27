document.getElementById("checkConnection").addEventListener("click", function() {
    if (chrome.runtime.connect) {
      chrome.runtime.sendMessage({ action: "checkConnection" }, function(response) {
        displayServerResponse(response);
      });
    } else {
      console.error("No connection to the background script has been established.");
    }
  });
  
  function displayServerResponse(response) {
    var serverResponseElement = document.getElementById("serverResponse");

    if (response && response.status === "success") {
      serverResponseElement.textContent = "Server response: " + response.message;
    } else {
      serverResponseElement.textContent = "An error occurred while accessing the server.";
    }
  }