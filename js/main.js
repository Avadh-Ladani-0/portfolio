// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll progress indicator
window.addEventListener("scroll", () => {
  const scrolled =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  document.querySelector(".scroll-progress").style.width = scrolled + "%";
});

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.3)";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.1)";
  }
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections and cards
document
  .querySelectorAll(".section, .skill-category, .timeline-item, .project-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Add typing effect to hero subtitle
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Start typing effect when page loads
window.addEventListener("load", () => {
  const subtitle = document.querySelector(".hero .subtitle");
  const originalText = subtitle.textContent;
  typeWriter(subtitle, originalText, 50);
});

// Add interactive skill tags
document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.background = "#4ecdc4";
    this.style.transform = "scale(1.1) rotate(5deg)";
  });

  tag.addEventListener("mouseleave", function () {
    this.style.background = "rgba(255, 255, 255, 0.2)";
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

// Add particle effect on mouse move
document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.98) {
    createParticle(e.clientX, e.clientY);
  }
});

function createParticle(x, y) {
  const particle = document.createElement("div");
  particle.style.position = "fixed";
  particle.style.left = x + "px";
  particle.style.top = y + "px";
  particle.style.width = "4px";
  particle.style.height = "4px";
  particle.style.background = "#4ecdc4";
  particle.style.borderRadius = "50%";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "9999";
  particle.style.animation = "particleFade 1s ease-out forwards";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 1000);
}

// Add particle animation CSS
const style = document.createElement("style");
style.textContent = `
            @keyframes particleFade {
                0% {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
                100% {
                    opacity: 0;
                    transform: scale(0) translateY(-20px);
                }
            }
        `;
document.head.appendChild(style);
