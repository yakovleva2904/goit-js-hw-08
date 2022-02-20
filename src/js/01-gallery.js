import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImgCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createImgCardsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            alt="${description}" />
            </a>`;
        })
        .join('');
} 
const lightbox = new SimpleLightbox('.gallery a', { /* options */
    captionsData: 'alt',
    captionDelay: 250,
    captionType: 'attr',
    captionPosition: 'bottom',

});
// DONE