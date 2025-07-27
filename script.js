

var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)

  const hamburgerBtn = document.getElementById('hamburger-btn');
const navUl = document.querySelector('.main-nav ul');
hamburgerBtn.addEventListener('click', function() {
  hamburgerBtn.classList.toggle('active');
  navUl.classList.toggle('open');
});
// Optional: close menu on link click (mobile)
navUl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    navUl.classList.remove('open');
  });
});
    
    // Typing animation for role
    const roles = ["Web Developer", "Problem Solver ", "Open Source Contributor"];
    let roleIndex = 0, charIndex = 0, typing = true;
    function typeRole() {
      const el = document.querySelector('.role-typing');
      if (!el) return;
      if (typing) {
        if (charIndex < roles[roleIndex].length) {
          el.textContent += roles[roleIndex][charIndex++];
          setTimeout(typeRole, 80);
        } else {
          typing = false;
          setTimeout(typeRole, 1200);
        }
      } else {
        if (charIndex > 0) {
          el.textContent = roles[roleIndex].substring(0, --charIndex);
          setTimeout(typeRole, 40);
        } else {
          typing = true;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(typeRole, 400);
        }
      }
    }
    typeRole();

    // Theme switcher
    function toggleTheme() {
      document.body.classList.toggle('light-theme');
    }

    // Animate sections on scroll
    function revealSections() {
      document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          section.classList.add('visible');
        }
      });
    }
    window.addEventListener('scroll', revealSections);
    window.addEventListener('load', revealSections);

     const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
      form.reset();
    }, 3000);
  });

    // Smooth scroll for nav links
    document.querySelector('header nav ul').addEventListener('click', function(event) {
      if (event.target.tagName === 'A') {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    
  const roles = ["Web Developer", "UI Designer", "Freelancer", "Full Stack Learner"];
  const typingElement = document.querySelector(".role-typing");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 300); // Pause before typing next
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }

  document.addEventListener("DOMContentLoaded", typeEffect);
