// ===== MOBILE MENU =====
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu when a link is clicked (for mobile)
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// ===== SCROLL ANIMATIONS =====
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));


// ===== THEME TOGGLE =====
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change icon
  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});


toggle.addEventListener("click", () => {
  document.body.classList.add("transitioning");
  document.body.classList.toggle("dark-mode");
  setTimeout(() => {
    document.body.classList.remove("transitioning");
  }, 500);
});
