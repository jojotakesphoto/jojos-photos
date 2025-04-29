const images = [
  { src: 'images/photo1.jpg', category: 'portraits' },
  { src: 'images/photo2.jpg', category: 'nature' },
  { src: 'images/photo3.jpg', category: 'urban' },
  // Add more
];

const gallery = document.getElementById('gallery');
const buttons = document.querySelectorAll('.filter-btn');

function renderGallery(category) {
  gallery.innerHTML = '';
  const filtered = category === 'all' ? images : images.filter(img => img.category === category);
  filtered.forEach(img => {
    const imgElem = document.createElement('img');
    imgElem.src = img.src;
    imgElem.alt = img.category;
    imgElem.loading = 'lazy';
    gallery.appendChild(imgElem);
  });
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    renderGallery(category);
  });
});

// Load all by default
renderGallery('all');
