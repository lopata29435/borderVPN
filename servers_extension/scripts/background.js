chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "checkConnection") {
        checkConnection()
            .then(() => {
                sendResponse({ status: 'success', message: 'Server connected' });
            })
            .catch(error => {
                sendResponse({ status: 'error', message: error.message });
            });
        return true;
    }
});

function checkConnection() {
    var serverUrl = "http://166.1.160.198:3000/";

    return new Promise((resolve, reject) => {
        fetch(serverUrl)
            .then(response => response.json())
            .then(data => {
                console.log("Response from the server:", data);
                resolve();
            })
            .catch(error => {
                console.error("Error during a request to the server:", error);
                reject(new Error("error")); 
            });
    });
}