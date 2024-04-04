document.addEventListener("DOMContentLoaded", () => {
    const typingSection = document.querySelector(".typing-effect");
    let index = 0;
    function typeText(text) {
        if (index < text.length) {
            typingSection.textContent += text.charAt(index);
            index++;
            setTimeout(() => typeText(text), 100);
        }
    }

    const observerOptions = { root: null, threshold: [0.5] };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                if (entry.target === typingSection) {
                    typeText('Hello, welcome to interactive web site!');
                }
            } else {
                entry.target.classList.remove("is-visible");
                if (entry.target === typingSection) {
                    index = 0;
                    typingSection.textContent = "";
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
    })
})