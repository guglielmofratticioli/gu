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
    socialDisplay.style = 'height:90%;opacity:95%'
    socialDisplayImg.style = 'display:block';
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
  social.addEventListener('dblclick', ()=>{
    socialDisplay.style = 'height:30%; opacity:40%'
  })
});

// Get link symbol icon element
const overlay = document.querySelector('.overlay-link');
const linkIcon = document.querySelector('.fa-link');

// Add click event listener to link symbol icon element
overlay.addEventListener('touchstart', () => {
  // Toggle clicked class on link symbol icon element
  overlayLink.style='height:90%; background:rgba(0,0,0,0.1);';
  socialDisplay.style='height:90%; opacity:90%'
});

overlay.addEventListener('mousedown', () => {
  // Toggle clicked class on link symbol icon element
  linkIcon.classList.toggle('clicked');
  overlayLink.style='height:90%; background:rgba(0,0,0,0.1);';
  socialDisplay.style='height:90%; opacity:90%'
});

overlay.addEventListener('mouseup', () => {
  // Toggle clicked class on link symbol icon element
  linkIcon.classList.toggle('clicked');
  overlayLink.style='height:100%';
});
