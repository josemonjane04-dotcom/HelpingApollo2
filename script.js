// Simple scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < triggerBottom){
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
