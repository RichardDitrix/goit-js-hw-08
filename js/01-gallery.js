// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



const galleryItemMarkup = ({ preview, original, description }) => {
	return `
	
	  <a class="gallery__item" href="${original}">
	  <img 
	  style="display:block"
	  class="gallery__image"
	  src="${preview}"
	  alt="${description}"
	  />
	</a>
	`;
 };

const makeGalleryMarkup = galleryItems.map(galleryItemMarkup).join('');

const galleryElements = document.querySelector('.gallery');

galleryElements.insertAdjacentHTML('beforeend', makeGalleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});