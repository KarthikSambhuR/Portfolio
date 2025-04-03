document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll(".expertise-item").forEach(item => {
        const startYear = parseInt(item.getAttribute("data-start-year"), 10);
        const experience = currentYear - startYear;
        item.querySelector(".experience").textContent = experience;
    });
});