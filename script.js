document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to SwayamKaro");

    const year = new Date().getFullYear();
    const footerYear = document.getElementById("year");

    if (footerYear) {
        footerYear.textContent = year;
    }
});
