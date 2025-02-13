document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("screen-mode");
    const body = document.body;

    // Check if user has preference in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "Light Mode";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Update button text based on mode
        if (body.classList.contains("dark-mode")) {
            toggleButton.textContent = "Light Mode";
            localStorage.setItem("darkMode", "enabled");
        } else {
            toggleButton.textContent = "Dark Mode";
            localStorage.setItem("darkMode", "disabled");
        }
    });
});