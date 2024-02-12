document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const registerLink = document.getElementById("registerLink");
  const loginLink = document.getElementById("loginLink");
  const registerContainer = document.getElementById("registerContainer");
  const securePage = document.getElementById("securePage");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginError = document.getElementById("loginError");
  const registerError = document.getElementById("registerError");

  registerLink.addEventListener("click", function (e) {
    e.preventDefault();
    registerContainer.classList.remove("hidden");
    loginForm.classList.add("hidden");
    loginError.textContent = "";
  });

  loginLink.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.remove("hidden");
    registerContainer.classList.add("hidden");
    registerError.textContent = "";
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // You need to implement actual authentication logic here, for demonstration purposes, let's assume correct credentials
    if (username === "user" && password === "password") {
      loginError.textContent = "";
      loginForm.reset();
      loginForm.classList.add("hidden");
      securePage.classList.remove("hidden");
    } else {
      loginError.textContent = "Invalid username or password";
    }
  });

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    // You need to implement actual registration logic here, for demonstration purposes, let's assume successful registration
    registerError.textContent = "";
    registerForm.reset();
    registerContainer.classList.add("hidden");
    loginForm.classList.remove("hidden");
    loginLink.click(); // Switch back to login view
  });

  logoutBtn.addEventListener("click", function () {
    securePage.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });
});
