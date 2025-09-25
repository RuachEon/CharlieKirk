document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if(navToggle){
    navToggle.addEventListener('click', () => {
      if(nav.style.display === 'flex'){ nav.style.display = ''; }
      else { nav.style.display = 'flex'; nav.style.flexDirection = 'column'; }
    });
  }
  const yearSpan = document.getElementById('year');
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();
});