
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typing');
    if (typingElement) {
        const words = ["Data Analytics","Web Developer", "Web Designer", "Script Writer"];
        let wordIndex = 0;
        let letterIndex = 0;
        let currentWord = '';
        let currentLetters = '';
        let isDeleting = false;

        function type() {
            if (isDeleting) {
                currentLetters = currentWord.substring(0, letterIndex - 1);
                letterIndex--;
            } else {
                currentLetters = currentWord.substring(0, letterIndex + 1);
                letterIndex++;
            }

            typingElement.innerHTML = currentLetters;

            let typeSpeed = 200;
            if (isDeleting) typeSpeed /= 2;
            if (!isDeleting && letterIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && letterIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                currentWord = words[wordIndex];
                typeSpeed = 500;
            }
            setTimeout(type, typeSpeed);
        }
        currentWord = words[wordIndex];
        type();
    }
});
