// Select all accordion buttons
const accordionButtons = document.querySelectorAll(".accordion-btn");

// Loop through all accordion buttons
accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Find the accordion text (the next sibling element of the button)
    const accordionContent = this.nextElementSibling;

    // Toggle visibility with delay
    if (accordionContent.classList.contains("visible")) {
      accordionContent.style.opacity = "0"; // Fade out
      setTimeout(() => {
        accordionContent.style.display = "none"; // Hide after fade-out
        accordionContent.style.visibility = "hidden"; // Hide visibility
      }, 300); // Match the transition duration
    } else {
      accordionContent.style.display = "block"; // Show content
      setTimeout(() => {
        accordionContent.style.opacity = "1"; // Fade in
        accordionContent.style.visibility = "visible"; // Set visibility
      }, 10); // Small delay to trigger the transition
    }

    // Toggle the 'visible' class to track the state
    accordionContent.classList.toggle("visible");

    // Optional: Rotate the SVG arrow on click
    const arrowIcon = this.querySelector("svg");
    arrowIcon.classList.toggle("rotate");
  });
});
