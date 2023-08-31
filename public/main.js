document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menuButton");
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementById("content");

  menuButton.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar-hidden");
    content.classList.toggle("content-hidden");

    sidebar.classList.toggle("animate__animated", "animate__slideOutLeft");
    content.classList.toggle("animate__animated", "animate__fadeIn");
  });
});
