// contact.js
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

  // Simulate sending message
  feedback.textContent = 'Sending...';
  feedback.style.color = 'black';

  setTimeout(() => {
    feedback.textContent = 'Message sent successfully!';
    feedback.style.color = 'green';
    document.getElementById('contactForm').reset();
  }, 1000);
});
