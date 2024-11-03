const typeText = document.getElementById("typing-text");
const phrases = ["Web Developer", "Game Developer", "Novelist"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typeText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1500); // Wait before starting to delete
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // Corrected to use phrases.length
        setTimeout(type, 500); // Wait before starting to type the next phrase
    } else {
        setTimeout(type, isDeleting ? 50 : 150); // Adjust typing speed
    }
}

type();