document.addEventListener("DOMContentLoaded", function() {
    setLanguage('en');
});

function setLanguage(language) {
    const texts = {
        // Define texts here
    };

    updateTexts(texts[language]);
}

function updateTexts(texts) {
    Object.keys(texts).forEach(id => {
        document.getElementById(id).textContent = texts[id];
    });
}
