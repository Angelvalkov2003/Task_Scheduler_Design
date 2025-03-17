console.log("aaa");

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle"); // Бутон за превключване
  const htmlElement = document.documentElement; // <html> елемента

  // Проверяваме дали има запазена тема в LocalStorage
  if (localStorage.getItem("theme") === "light") {
    htmlElement.setAttribute("data-bs-theme", "light");
  }

  themeToggle.addEventListener("click", function () {
    let currentTheme = htmlElement.getAttribute("data-bs-theme");

    if (currentTheme === "dark") {
      htmlElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", "light"); // Запазваме темата
    } else {
      htmlElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
