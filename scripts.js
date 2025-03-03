const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const body = document.body;

// Theme Toggle
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Language Toggle
langToggle.addEventListener('click', () => {
    if (body.classList.contains('arabic')) {
        body.classList.remove('arabic');
        document.querySelectorAll('.en-text').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.ar-text').forEach(el => el.classList.add('hidden'));
        langToggle.innerHTML = '<i class="fas fa-globe"></i>';
    } else {
        body.classList.add('arabic');
        document.querySelectorAll('.en-text').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.ar-text').forEach(el => el.classList.remove('hidden'));
        langToggle.innerHTML = '<i class="fas fa-language"></i>';
    }
});
