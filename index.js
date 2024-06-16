document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values entered by the user
  const email = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  // Perform authentication logic here (e.g., check against a database)
  if (email === "user@example.com" && password === "pass123") {
    // Redirect to a new page
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again."); // Show an error message
  }
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelector(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("select-clicked");
    menu.classList.toggle("menu-open");
  });
  options.forEach((options) => {
    options.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});
