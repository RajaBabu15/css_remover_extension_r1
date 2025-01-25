chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
            const { id: tabId } = tabs[0];

            if (request.type === "removeStyles") {
                chrome.scripting.executeScript({
                    target: { tabId },
                    func: () => {
                        document.querySelectorAll('link[rel="stylesheet"], style').forEach(sheet => sheet.remove());
                        document.querySelectorAll('*').forEach(el => el.removeAttribute('style'));
                    }
                });
            } else if (request.type === "removeImages") {
                chrome.scripting.executeScript({
                    target: { tabId },
                    func: () => {
                        document.querySelectorAll('img').forEach(img => img.remove());
                    }
                });
            } else if (request.type === "formatLinks") {
                chrome.scripting.executeScript({
                    target: { tabId },
                    func: () => {
                        document.querySelectorAll('a').forEach(link => {
                            const href = link.href;
                            if (href) {
                                link.textContent = `${link.textContent}[${href}]`;
                            }
                        });
                    }
                });
            }
        }
    });
});
