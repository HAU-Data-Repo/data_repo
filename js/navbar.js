console.log("navbar.js loaded");

function initDropdownNav() {
  console.log("initDropdownNav running");

  const toggle = document.getElementById("dataToggle");

  if (!toggle) {
    console.warn("Dropdown toggle not found");
    return;
  }

  toggle.addEventListener("click", function (e) {
    console.log("Toggle clicked");
    e.preventDefault();
    e.stopPropagation();

    const dropdown = toggle.closest(".dropdown");
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    document.querySelectorAll(".dropdown.open").forEach((drop) => {
      if (!drop.contains(e.target)) {
        drop.classList.remove("open");
      }
    });
  });
}
