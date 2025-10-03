// main.js
function initNavbar() {
  // Hamburger toggle
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (hamburgerButton && mobileMenu) {
    hamburgerButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        mobileMenu.classList.remove("active");
      }
    });
  }

  // Desktop dropdown
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    dropdown.addEventListener("click", (e) => {
      if (e.target.classList.contains("dropdown-toggle") || e.target.closest(".dropdown-toggle")) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle("active");
      }
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  }

  // Mobile dropdown
  const mobileDropdown = document.querySelector(".mobile-dropdown");
  if (mobileDropdown) {
    mobileDropdown.addEventListener("click", (e) => {
      if (e.target.classList.contains("mobile-dropdown-toggle") || e.target.closest(".mobile-dropdown-toggle")) {
        e.preventDefault();
        e.stopPropagation();
        mobileDropdown.classList.toggle("active");
      }
    });

    document.addEventListener("click", (e) => {
      if (!mobileDropdown.contains(e.target)) {
        mobileDropdown.classList.remove("active");
      }
    });
  }
}
