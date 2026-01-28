// Highlight active nav link
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


const today = new Date().toISOString().split('T')[0];

  // Select the input element
  const dateInput = document.getElementById('startDate');
  const dateInput1 = document.getElementById('endDate');
  // Set min attribute to today
  dateInput.setAttribute('min', today);
  dateInput1.setAttribute('min', today);

  // Optional: set default value to today
  dateInput.value = today;
  dateInput1.value = today;



const form = document.getElementById('requestForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const params = new URLSearchParams(formData);

  fetch("https://script.google.com/macros/s/AKfycbxGrFbDlsXGXkZ1EfSkIObC1iLqnqFi0Y9jpZacmbGfW_H4nrl5-2x28sSdt6kNcSYz/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params
  })
  .then(response => response.text())
  .then(data => {
    alert("Request submitted successfully!");
    form.reset();
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  });
});
