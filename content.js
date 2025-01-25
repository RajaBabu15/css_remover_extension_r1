// Function to remove all stylesheets and inline styles
function removeStyles() {
    // Remove all existing stylesheets
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"], style');
    stylesheets.forEach(sheet => sheet.remove());

    // Remove inline styles from all elements
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.removeAttribute('style');
    });
}

// Run the function when the extension is activated
removeStyles();