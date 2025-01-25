chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Received message in background script:', request);

    if (request.type === "removeStyles") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: () => {
                        // Remove all styles
                        const stylesheets = document.querySelectorAll('link[rel="stylesheet"], style');
                        stylesheets.forEach(sheet => sheet.remove());

                        // Remove inline styles
                        const allElements = document.querySelectorAll('*');
                        allElements.forEach(element => {
                            element.removeAttribute('style');
                        });
                    }
                }, () => {
                    console.log('Styles removed successfully.');
                });
            } else {
                console.error('No active tab found.');
            }
        });
    } else {
        console.error('Unexpected message type:', request.type);
    }
});
