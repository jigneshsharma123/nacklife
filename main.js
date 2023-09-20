window.addEventListener("scroll", ()=> {
    var header = document.getElementById('header');
    header.classList.toggle("sticky", window.scrollY > 0)
});
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const mobNavContainer = document.querySelector(".mob-nav-container");
    const icon = hamburger.querySelector("i");
  
    hamburger.addEventListener("click", function() {
      mobNavContainer.classList.toggle("opened");
  
      if (mobNavContainer.classList.contains("opened")) {
        // Change to close icon
        icon.classList.remove("fa-tasks");
        icon.classList.add("fa-times"); // Assuming "fa-times" is the Font Awesome close icon
      } else {
        // Change back to fa-tasks icon
        icon.classList.remove("fa-times");
        icon.classList.add("fa-tasks");
      }
    });
  });