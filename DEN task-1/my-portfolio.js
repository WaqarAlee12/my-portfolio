// Theme toggle with localStorage

const toggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
}

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Typing effect
const text = "A Web Developer | Freelancer | Tech Enthusiast";
let index = 0;
const typing = document.getElementById('typing-text');
function type() {
    typing.textContent = text.slice(0, index++);
    if (index <= text.length) {
        setTimeout(type, 100);
    } else {
        index = 0;
        setTimeout(type, 2000);
    }
}
type();