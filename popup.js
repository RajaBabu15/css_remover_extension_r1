document.getElementById('removeStyles').addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: "removeStyles" });
});

document.getElementById('removeImages').addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: "removeImages" });
});

document.getElementById('formatLinks').addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: "formatLinks" });
});