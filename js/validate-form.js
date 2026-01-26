const HASHTAGS_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;

const formUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');
const UploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');

const imgUploadCancel = document.querySelector('.img-upload__cancel');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onEscapeKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    console.log('ЗАКРЫТИЕ');
    closedForm();
  }
};
imgUploadCancel.addEventListener('click', () => {
  closedForm();
});
// создание обработчика:
function closedForm () {
  formUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadInput.textContent = '';

  document.addEventListener('keydown', onEscapeKeydown);
}

const ErrorMessage = {
  INVALID: 'невалидный хэштег',
  COUNT: 'превышено количество хэштегов',
  REPEAT: 'хэштеги повторяются'
};

const openForm = () => {
  imgUploadInput.addEventListener('change', () => {
    formUploadOverlay.classList.remove('hidden');
    body.classList.add('model-open');
  });
  //добавление обработчика:
  document.addEventListener('keydown', onEscapeKeydown);
};

const closeForm = () => {
  formUploadOverlay.classList.add('hidden');
  body.classList.remove('model-open');
};

const pristine = new Pristine(formUploadOverlay, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',

  // добавляется к errorTextParent
  errorTextClass: 'img-upload__field-wrapper--error'
});

const getHashtags = (value) => value?.trim().split(' ').filter((item) => !!item);

const isValidHashtags = (value) => {
  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAGS_REGEX.test(item));
};

const isValideCountHashtags = (value) => getHashtags(value).length <= 5;

const isUniqueHashtags = (value) => {
  const hashtags = getHashtags(value).map((item) => item.toLowerCase());
  return hashtags.length === (new Set(hashtags)).size;
};

const validateHashtags = (value) => isValidHashtags(value) && isValideCountHashtags(value) && isUniqueHashtags(value);

const getErrorText = (value) => {
  if(!isValidHashtags(value)) {
    return ErrorMessage.INVALID;
  }
  if(!isValideCountHashtags(value)) {
    return ErrorMessage.COUNT;
  }
  if(!isUniqueHashtags(value)) {
    return ErrorMessage.REPEAT;
  }
  return 'Ошибка';
};

pristine.addValidator(textHashtags, validateHashtags, getErrorText);

UploadForm.addEventListener('submit', (evt) => {

  evt.preventDefault();
  pristine.validate();
});

export { openForm, closeForm };
