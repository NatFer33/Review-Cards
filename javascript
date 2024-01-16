document.addEventListener("DOMContentLoaded", function() {
    // Play animation on page load
    document.body.classList.add("loaded");

    // Add event listeners to each card for toggling the active class
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.classList.add("active");
        });
        card.addEventListener("mouseleave", function() {
            this.classList.remove("active");
        });
    });
});
