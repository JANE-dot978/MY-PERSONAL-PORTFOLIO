//navbar

  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    // navMenu.classList.toggle('flex');
  });


//this is for the contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');

  if (!name || !email || !message) {
    feedback.textContent = 'Please fill in all the fields.';
    feedback.style.color = 'red';
    return;
  }


  feedback.textContent = 'Sending...';
  feedback.style.color = 'black';

  setTimeout(() => {
    feedback.textContent = 'Message sent successfully!';
    feedback.style.color = 'green';
    document.getElementById('contactForm').reset();
  }, 1000);
});

//this is for the popout animation
document.addEventListener('DOMContentLoaded', () => {
  const popouts = document.querySelectorAll('.popout');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        // Optionally unobserve after animation to improve performance
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  popouts.forEach(el => observer.observe(el));
});
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }



  // const colors = ["#ff9a9e", "#fad0c4", "#fbc2eb", "#a18cd1", "#b2fefa", "#f6d365"];
  // setInterval(() => {
  //   document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
  // }, 3000);



