console.log("Portfolio Website Loaded Successfully!");

const cards = document.querySelectorAll(
  ".project-card, .skill-card"
);

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});