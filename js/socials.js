// Get all social elements
const socials = document.querySelectorAll('.social');

// Get social display element
const socialDisplay = document.querySelector('.social-display');
const socialDisplayImg = socialDisplay.querySelector('img');

// Add click event listener to each social element
socials.forEach((social, index) => {
  // Add number to social element
  social.textContent = index + 1;

  social.addEventListener('click', () => {
    // Remove selected class from all social elements
    socials.forEach(social => social.classList.remove('selected'));
    // Add selected class to clicked social element
    social.classList.add('selected');
    // Update social display with number of selected social element

    socialDisplayImg.src = '';
  });
});

// Get link symbol icon element
const overlay = document.querySelector('.overlay-link');
const linkIcon = document.querySelector('.fa-link');

// Add click event listener to link symbol icon element
overlay.addEventListener('touchstart', () => {
  // Toggle clicked class on link symbol icon element
  linkIcon.classList.toggle('clicked');
});

overlay.addEventListener('mousedown', () => {
  // Toggle clicked class on link symbol icon element
  linkIcon.classList.toggle('clicked');
  overlay.style.border = 'red 2px solid';
});