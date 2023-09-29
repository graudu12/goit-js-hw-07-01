import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
const items = []

galleryItems.forEach(element => {
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImg = document.createElement('img')
	galleryImg.className = 'gallery__image'
	galleryImg.src = element.preview
	galleryImg.setAttribute('title', element.description)
	galleryImg.alt = element.description

	galleryLink.append(galleryImg)
	items.push(galleryLink)
})
gallery.append(...items)

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})