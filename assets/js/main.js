// Get the navigation menu element
const navMenu = document.getElementById("nav-menu"),
  // Get the menu toggle button (hamburger icon)
  navToggle = document.getElementById("nav-toggle"),
  // Get the close button inside the mobile menu
  navClose = document.getElementById("nav-close");

// Check if toggle button exists
if (navToggle) {
  // Add click event to show the menu when toggle is clicked
  navToggle.addEventListener("click", () => {
    // Add class to display the mobile menu
    navMenu.classList.add("show-menu");
  });
}

// Check if close button exists
if (navClose) {
  // Add click event to hide the menu when close icon is clicked
  navClose.addEventListener("click", () => {
    // Remove the class that displays the mobile menu
    navMenu.classList.remove("show-menu");
  });
}

// Select all navigation links
const navLink = document.querySelectorAll(".nav-link");

// Function to remove the menu when a nav link is clicked
const linkAction = () => {
  // Re-select the menu inside the function scope
  const navMenu = document.getElementById("nav-menu");
  // Hide the mobile menu
  navMenu.classList.remove("show-menu");
};

// Loop through each navigation link
navLink.forEach((n) =>
  // Add click event to each link to call linkAction
  n.addEventListener("click", linkAction)
);

// Function to add blur effect to the header on scroll
const blurHeader = () => {
  // Get the header element
  const header = document.getElementById("header");
  // If the user scrolls down 50px or more, add blur class
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : // Else, remove the blur class
      header.classList.remove("blur-header");
};

// Call blurHeader function whenever the user scrolls
window.addEventListener("scroll", blurHeader);

// Animate home image 1 from the right over 5 seconds
gsap.from(".home-img-1", 5, {
  opacity: 0, // Start with invisible
  x: 400, // Start 400px to the right
});

// Animate home image 6 from the bottom with easing
gsap.from(".home-img-6", 1.5, {
  opacity: 0, // Start with invisible
  y: 200, // Start 200px below
  delay: 0.1, // Start after 0.1 seconds
  ease: "back.out(1.5)", // Animation easing effect
});

// Animate home image 3 from the bottom
gsap.from(".home-img-3", 1.5, {
  opacity: 0, // Start invisible
  y: 400, // Start 400px below
  delay: 0.3, // Start after 0.3 seconds
  ease: "back.out(1.5)", // Easing effect
});

// Animate home image 5 from the bottom
gsap.from(".home-img-5", 1.5, {
  opacity: 0, // Start invisible
  y: 400, // Start 400px below
  delay: 0.5, // Start after 0.5 seconds
  ease: "back.out(1.5)", // Easing effect
});

// Animate home image 2 from the bottom
gsap.from(".home-img-2", 1.5, {
  opacity: 0, // Start invisible
  y: 400, // Start 400px below
  delay: 0.8, // Start after 0.8 seconds
  ease: "back.out(1.5)", // Easing effect
});

// Animate home image 4 from the bottom
gsap.from(".home-img-4", 1.5, {
  opacity: 0, // Start invisible
  y: 200, // Start 200px below
  delay: 1.8, // Start after 1.8 seconds
  ease: "back.out(1.5)", // Easing effect
});

// Animate text block from the top
gsap.from(".home-data", 1.5, {
  opacity: 0, // Start invisible
  y: -100, // Start 100px above
  delay: 2.5, // Start after 2.5 seconds
  ease: "back.out(1.5)", // Easing effect
});

// Animate first lantern from the right
gsap.from(".home-lantern-1", 1.5, {
  opacity: 0, // Start invisible
  x: 70, // Start 70px to the right
  delay: 3, // Start after 3 seconds
  ease: "back.out(1.5)", // Easing effect
});

// Animate second lantern from the left
gsap.from(".home-lantern-2", 1.5, {
  opacity: 0, // Start invisible
  x: -70, // Start 70px to the left
  delay: 3.5, // Start after 3.5 seconds
  ease: "back.out(1.5)", // Easing effect
});

// Initialize Sakura animation with target container
const sakura = new Sakura(".sakura-petals");
