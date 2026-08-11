document.addEventListener('DOMContentLoaded', () => {
    // Dynamic year for footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
