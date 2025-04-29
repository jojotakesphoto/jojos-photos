// Dark/Light Mode Toggle
const toggleBtn = document.createElement('button');
toggleBtn.innerText = '🌙';
toggleBtn.className = 'mode-toggle';
document.body.appendChild(toggleBtn);

toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '1rem';
toggleBtn.style.right = '1rem';
toggleBtn.style.padding = '1rem';
toggleBtn.style.borderRadius = '50%';
toggleBtn.style.background = '#00ffcc';
toggleBtn.style.border = 'none';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.zIndex = '1000';

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.innerText = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll('.hero').forEach(bg => {
    bg.style.backgroundPositionY = -(scrolled * 0.3) + 'px';
  });
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.border = '2px solid #00ffcc';
cursor.style.borderRadius = '50%';
cursor.style.position = 'fixed';
cursor.style.transform = 'translate(-50%, -50%)';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '10000';

document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
});
