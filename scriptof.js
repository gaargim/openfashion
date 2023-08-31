  document.addEventListener("DOMContentLoaded", function () {
    const logoElement = document.querySelector(".logo");

    function spinLogo() {
      logoElement.classList.add("spin-animation");
      setTimeout(() => {
        logoElement.classList.remove("spin-animation");
      }, 1500); 
    }

    logoElement.addEventListener("click", spinLogo);
  });
  