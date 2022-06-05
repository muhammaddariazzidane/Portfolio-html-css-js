(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

// contact
const scriptURL = "https://script.google.com/macros/s/AKfycbzmth1NISl2OpZvxC_AtgFUbvrB3uyaxMRBBwL1KpbjWRKaQc0TXA1-l2jFCqwTRStEMA/exec";
const form = document.forms["zidane-contact-form"];
const myAlert = document.querySelector(".my-alert");
myAlert.style.display = "none";
const faLert = document.querySelector(".fa-times-circle");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      form.reset();
      myAlert.style.display = "block";
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
faLert.addEventListener("click", function () {
  myAlert.style.display = "none";
});
