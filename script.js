  // Add before
    
  const hamburger = document.getElementById('hamburger-btn');
  const navList = document.querySelector('.main-nav ul');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('open');

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