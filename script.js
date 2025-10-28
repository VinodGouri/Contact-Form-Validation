// Select elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMsg = document.getElementById('successMsg');

// Email regex pattern
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;

// Form submit event
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload
  let isValid = true;

  // Reset messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMsg.textContent = '';

  // Validate Name
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email address.';
    isValid = false;
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message cannot be empty.';
    isValid = false;
  }

  // If valid form
  if (isValid) {
    successMsg.textContent = 'Message sent successfully!';
    form.reset();
  }
});
