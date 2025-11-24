const topButton = document.getElementById("go-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

const dropdown = document.querySelector(".dropdown");
const toggle = document.querySelector(".dropdown-toggle");

toggle.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("open");
});

const dropdownButtons = dropdown.querySelectorAll(".dropdown-menu button");

dropdownButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    dropdown.classList.remove("open");
    toggle.focus();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";

      faqItems.forEach((other) => {
        const otherBtn = other.querySelector(".faq-question");
        const otherAns = other.querySelector(".faq-answer");

        if (otherBtn !== button) {
          otherBtn.setAttribute("aria-expanded", "false");
          otherAns.style.maxHeight = null;
          otherAns.setAttribute("aria-hidden", "true");
        }
      });

      if (isOpen) {
        button.setAttribute("aria-expanded", "false");
        answer.style.maxHeight = null;
        answer.setAttribute("aria-hidden", "true");
      } else {
        button.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.setAttribute("aria-hidden", "false");
      }
    });
  });
});


const targetDate = new Date("2025-12-02T23:59:59");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").textContent = "Time's up!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").textContent =
        `in ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
