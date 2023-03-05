// Add imports above this line
import { galleryItems } from './gallery-items.js';


import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

function makeLinkGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    `;
    })
    .join('');
}

const listOfGallery = document.querySelector('.gallery');
const galleryMarkup = makeLinkGalleryItem(galleryItems);

listOfGallery.insertAdjacentHTML('beforeend', galleryMarkup);

// SimpleLightbox in work
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});