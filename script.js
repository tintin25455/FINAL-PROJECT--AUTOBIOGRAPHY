
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-btn');
    
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Day Mode";
    } else {
        btn.textContent = "🌙 Night Mode";
    }
}


window.onload = setGreeting;