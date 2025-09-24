  let backgroundButton = document.getElementById("backgroundBtn");
  backgroundButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "#282C50";
  });

  // 2) Endre overskriftstekst
  let textButton = document.getElementById("textBtn");
  textButton.addEventListener("click", function () {
    document.querySelector(".javascriptfun h3").textContent = "Teksten er endret!";
  });

  // 3) Toggle dark mode
  let toggleButton = document.getElementById("toggleBtn");
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
