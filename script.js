const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", function () {
  nav.classList.toggle("open");
});
const navLinks = document.querySelectorAll(".header__nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "Mode Clair";
  } else {
    themeToggle.textContent = "Mode Sombre";
  }
});
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (name.lenght !== 0 && email.lenght !== 0 && message.lenght !== 0) {
    alert("Merci " + name + ", votre message a bien ete envoye !");
    contactForm.reset();
  } else {
    alert("Veuillez remplir tous les champs.");
  }
  // TODO : verifier que tous les champs sont remplis
  // Indice : utilisez if (name && email && message)
  // TODO : si OK, afficher une alerte "Merci [nom], votre message a bien ete envoye !"
  // puis reinitialiser le formulaire avec contactForm.reset()
  // TODO : si un champ est vide, afficher une alerte "Veuillez remplir tous les champs."
});
