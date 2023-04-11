// Get all social elements
const socials = document.querySelectorAll('.social');

// Get social display element
const socialDisplay = document.querySelector('.social-display');
const overlayLink = document.querySelector('.overlay-link')
const socialDisplayImg = socialDisplay.querySelector('img');

// Add click event listener to each social element
socials.forEach((social, index) => {
  social.addEventListener('click', () => {
    // Remove selected class from all social elements
    socials.forEach(social => social.classList.remove('selected'));
    // Add selected class to clicked social element
    social.classList.add('selected');
    // Update social display with number of selected social element
    if(social.id =="Fiverr") {
      overlayLink.style.borderColor = 'green'
      overlayLink.style.color = 'green' 
      socialDisplayImg.src = "png/Fiverr.png"}
    if(social.id =="Youtube") { 
      overlayLink.style.color = 'red' 
      overlayLink.style.borderColor = 'red';}
      
    if(social.id =="Soundcloud") {
      overlayLink.style.borderColor = 'orange'
      overlayLink.style.color = 'orange' }
    if(social.id =="Instagram") {
      overlayLink.style.borderColor = 'pink';
      overlayLink.style.color = 'pink' }
    if(social.id =="Telegram") {
      overlayLink.style.borderColor = '#0088cc';
      overlayLink.style.color = '#0088cc' }
    if(social.id =="Whatsapp") {
      overlayLink.style.borderColor = 'green';
      overlayLink.style.color = 'green' }
    if(social.id =="Github") {
      overlayLink.style.borderColor = 'purple';
      overlayLink.style.color = 'purple' }

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