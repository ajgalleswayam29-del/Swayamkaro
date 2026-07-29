// Welcome Message
console.log("Welcome to SwayamKaro");

// Current Year in Footer
const footer = document.querySelector("footer");
if (footer) {
  footer.innerHTML = `© ${new Date().getFullYear()} SwayamKaro | All Rights Reserved`;
}

// News Cards Hover Effect
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("This feature will be available soon!");
  });
});
