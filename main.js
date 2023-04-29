// JS DOCUMENT
// NAVEGATION-BUTTON
document.querySelector('.nav__icon').addEventListener('click', ()=>{
    document.querySelector('.nav__responsive-ul').classList.toggle('showNav');
});

// RESPONSIVE-NAVBAR
document.querySelector('.nav__responsive-ul').addEventListener('click', ()=>{
    document.querySelector('.nav__responsive-ul').classList.remove('showNav');
});

// EMAIL-JS
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_lxu00be';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('The message has been Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

// SCROLL-REVEAL
window.sr = ScrollReveal();

// HEADER ANIMATION
sr.reveal('header',{
  duration: 3000,
  origin: 'bottom',
  distance: '-100px'
});

// PERSONAL DESCRIPTION ANIMATION
sr.reveal('.article_personalInfo',{
  duration: 3000,
  origin: 'bottom',
  distance: '-100px'
});

sr.reveal('.article_personalInfo-a',{
  duration: 3000,
  origin: 'top',
  distance: '-100px'
});

// SKILLS ANIMATION
sr.reveal('.section_skills',{
  duration: 3000,
  origin: 'right',
  distance: '-100px'
});

// PROJECTS ANIMATION
sr.reveal('.section_projects',{
  duration: 3000,
  origin: 'top',
  distance: '-100px'
});

// TOOLS ANIMATION
sr.reveal('.section_tools',{
  duration: 3000,
});

// CONTACT ANIMATION
sr.reveal('.form_contact',{
  duration: 3000,
  origin: 'bottom',
  distance: '-100px'
});

// ADDRESS ANIMATION
sr.reveal('address',{
  duration: 2000,
  origin: 'top',
  distance: '-100px'
});