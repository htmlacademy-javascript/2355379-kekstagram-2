import { renderComments, clearComments } from './comments.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
// выбирает картинку внутри div-а .big-picture-img
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const description = document.querySelector('.social__caption');


const cancelButton = document.querySelector('.big-picture__cancel');

const isEscapeKey = (evt) => evt.key === 'Escape';

// создание обработчика:
const onEscapeKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    closeBigPicture();
  }
};

//функция открытия окна с большой картинкой
const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  // убирает двойной скролл:
  body.classList.add('modal-open');

  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;

  likesCount.textContent = photo.likes;

  description.textContent = photo.description;



  // очистить от комментов socialComment
  clearComments();
  renderComments(photo.comments);


  //удаление обработчика:
  document.addEventListener('keydown', onEscapeKeydown);
};

function closeBigPicture () {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  clearComments();
  bigPictureImg.src = '';
  bigPictureImg.alt = '';
  likesCount.textContent = '';
  description.textContent = '';
  //удаление обработчика:
  document.removeEventListener('keydown', onEscapeKeydown);
}

cancelButton.addEventListener('click', () => {
  closeBigPicture();
});


export { openBigPicture };

