script.js
  // DOM Content Loaded
  document.addEventListener('DOMContentLoaded', function() {
      // Initialize all functions
      initGreeting();
      initMobileNav();
      initSmoothScrolling();
      initScrollAnimations();
      initSkillBars();
      initTypingEffect();
      initScrollIndicator();
      initNavbarScroll();
  });
  
  // Greeting Function
  function initGreeting() {
      const hour = new Date().getHours();
      const greetingElement = document.getElementById('greeting');
      
      let greeting = '';
      if (hour < 12) {
          greeting = 'Good morning!';
      } else if (hour < 18) {
          greeting = 'Good afternoon!';
      } else {
          greeting = 'Good evening!';
      }
      
      greetingElement.textContent = greeting;
  }
  
  // Mobile Navigation
  function initMobileNav() {
      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.nav-menu');
      const navLinks = document.querySelectorAll('.nav-link');
  
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          navMenu.classList.toggle('active');
      });
  
      // Close mobile menu when clicking on a link
      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              hamburger.classList.remove('active');
              navMenu.classList.remove('active');
          });
      });
  }
  
  // Smooth Scrolling
  function initSmoothScrolling() {
      const navLinks = document.querySelectorAll('.nav-link');
      
      navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
              e.preventDefault();
              const targetId = link.getAttribute('href');
              const targetSection = document.querySelector(targetId);
              
              if (targetSection) {
                  const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                  window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                  });
              }
          });
      });
  }
  
  // Scroll Animations
  function initScrollAnimations() {
      const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
      };
  
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
              }
          });
      }, observerOptions);
  
      // Observe elements for animation
      const animateElements = document.querySelectorAll('.project-card, .certification-card, .skill-category, .timeline-item, .contact-item');
      
      animateElements.forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px)';
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(el);
      });
  }
  
  // Skill Bars Animation
  function initSkillBars() {
      const skillBars = document.querySelectorAll('.skill-progress');
      
      const skillObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const width = entry.target.style.width;
                  entry.target.style.width = '0';
                  setTimeout(() => {
                      entry.target.style.width = width;
                  }, 200);
              }
          });
      }, { threshold: 0.5 });
  
      skillBars.forEach(bar => {
          skillObserver.observe(bar);
      });
  }
  
  // Typing Effect for Hero Title
  function initTypingEffect() {
      const heroTitle = document.querySelector('.hero-title');
      if (!heroTitle) return;
  
      const text = heroTitle.innerHTML;
      heroTitle.innerHTML = '';
      
      let i = 0;
      const typeWriter = () => {
          if (i < text.length) {
              heroTitle.innerHTML += text.charAt(i);
              i++;
              setTimeout(typeWriter, 100);
          }
      };
      
      // Start typing effect after a delay
      setTimeout(typeWriter, 500);
  }
  
  // Scroll Indicator
  function initScrollIndicator() {
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (!scrollIndicator) return;
  
      scrollIndicator.addEventListener('click', () => {
          const aboutSection = document.querySelector('#about');
          if (aboutSection) {
              const offsetTop = aboutSection.offsetTop - 70;
              window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  
      // Hide scroll indicator when scrolled down
      window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
              scrollIndicator.style.opacity = '0';
          } else {
              scrollIndicator.style.opacity = '1';
          }
      });
  }
  
  // Navbar Scroll Effect
  function initNavbarScroll() {
      const navbar = document.querySelector('.navbar');
      
      window.addEventListener('scroll', () => {
          if (window.scrollY > 100) {
              navbar.style.background = 'rgba(255, 255, 255, 0.98)';
              navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
          } else {
              navbar.style.background = 'rgba(255, 255, 255, 0.95)';
              navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
          }
      });
  }
  
  // Active Navigation Link Highlighting
  function highlightActiveNavLink() {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      
      window.addEventListener('scroll', () => {
          let current = '';
          
          sections.forEach(section => {
              const sectionTop = section.offsetTop - 100;
              const sectionHeight = section.clientHeight;
              
              if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                  current = section.getAttribute('id');
              }
          });
          
          navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${current}`) {
                  link.classList.add('active');
              }
          });
      });
  }
  
  // Initialize active nav highlighting
  highlightActiveNavLink();
  
  // Add loading animation
  window.addEventListener('load', () => {
      document.body.classList.add('loaded');
  });
  
  // Add hover effects for project cards
  document.addEventListener('DOMContentLoaded', () => {
      const projectCards = document.querySelectorAll('.project-card');
      
      projectCards.forEach(card => {
          card.addEventListener('mouseenter', () => {
              card.style.transform = 'translateY(-10px) scale(1.02)';
          });
          
          card.addEventListener('mouseleave', () => {
              card.style.transform = 'translateY(0) scale(1)';
          });
      });
  });
  
  // Add counter animation for stats
  function animateCounters() {
      const counters = document.querySelectorAll('.stat h3');
      
      counters.forEach(counter => {
          const target = parseInt(counter.textContent);
          const increment = target / 100;
          let current = 0;
          
          const updateCounter = () => {
              if (current < target) {
                  current += increment;
                  counter.textContent = Math.ceil(current) + '+';
                  setTimeout(updateCounter, 20);
              } else {
                  counter.textContent = target + '+';
              }
          };
          
          updateCounter();
      });
  }
  
  // Initialize counter animation when stats section is visible
  const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounters();
              statsObserver.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });
  
  const statsSection = document.querySelector('.about-stats');
  if (statsSection) {
      statsObserver.observe(statsSection);
  }