import { container } from './thumbnails.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');

// выбирает картинку внутри div-а .big-picture-img
const bigPictureImg = document.querySelector('.big-picture__img img');

const likesCount = document.querySelector('.likes-count');

const description = document.querySelector('.social__caption');

const socialCommentCount = document.querySelector('.social__comment-count');

const commentsLoader = document.querySelector('.comments-loader');

const socialCommentTotalCount = document.querySelector('.social__comment-total-count');

const socialComments = document.querySelector('.social__comments');

// использовать один из комментов как шаблон:
const socialComment = document.querySelector('.social__comment');



//функция открытия окна с большой картинкой
const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  // убирает двойной скролл:
  body.classList.add('modal-open');

  bigPictureImg.src = photo.url;

  likesCount.textContent = photo.likes;

  description.textContent = photo.description;

  socialCommentTotalCount.textContent = photo.comments.length;

  // очистить от комментов socialComment
  socialComments.innerHTML = '';
  console.log(socialComment);

  socialCommentCount.classList.add('hidden');

  commentsLoader.classList.add('hidden');


};

const renderComments = (comments) => {
  comments.forEach
}


container.addEventListener('click', (evt) => {
  // Нажатие на элементе .picture или на любом его дочернем (возвращает сам элемент):
  const currentContainer = evt.target.closest('.picture');
  //console.log(currentContainer);
  if(currentContainer) {

  }
});


export { openBigPicture };

