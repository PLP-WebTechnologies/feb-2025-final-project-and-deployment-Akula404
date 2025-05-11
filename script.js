/* script.js */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    document.getElementById('response').textContent = 'Please fill in all fields.';
  } else {
    document.getElementById('response').textContent = 'Thank you for contacting us!';
    this.reset();
  }
});