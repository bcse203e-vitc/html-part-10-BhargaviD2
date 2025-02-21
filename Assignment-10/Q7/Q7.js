document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');
    const wordCount = document.getElementById('wordCount');

    textInput.addEventListener('input', () => {
        const text = textInput.value;
        const characters = text.length;
        const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;

        charCount.textContent = `Character Count: ${characters}`;
        wordCount.textContent = `Word Count: ${words}`;

        if (characters > 200) {
            alert('You have exceeded the 200 character limit!');
        }
    });
});