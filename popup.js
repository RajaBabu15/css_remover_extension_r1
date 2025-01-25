document.getElementById('toggleButton').addEventListener('click', () => {
    console.log('Sending message to background script');
    chrome.runtime.sendMessage({ type: "removeStyles" });
});
