import { sendData } from './server.js';
import { showSuccess, showError } from './success-failure.js';
//import { onCancelButton } from './form.js';
import { resetEffects } from './effects.js';

const HASHTAGS_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;

const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

const form = document.querySelector('.img-upload__form');
const submitFormButton = form.querySelector('.img-upload__submit');
const imgEffect = document.querySelector('.img-upload__preview img');
const scaleControl = document.querySelector('.scale__control--value');
const onClickSmaller = document.querySelector('.scale__control--smaller');
const onClickBigger = document.querySelector('.scale__control--bigger');

const formUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');
const UploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');

const imgUploadCancel = document.querySelector('.img-upload__cancel');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onEscapeKeydown = (evt) => {
  if(isEscapeKey(evt)) {
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

const resetImgScale = () => {
  imgEffect.style.transform = 'scale(1)';
  scaleControl.value = '100%';
};

function changePicture() {
  const value = parseInt(scaleControl.value, 10);
  const scaleNumber = value / 100;
  imgEffect.style.transform = `scale(${scaleNumber})`;
}

const onScaleSmallerButtonClick = () => {
  let currentValue = parseInt(scaleControl.value, 10);
  if (currentValue > MIN_VALUE) {
    currentValue -= STEP;
    scaleControl.value = `${currentValue}%`;
    changePicture();
  }
};

const onScaleBiggerButtonClick = () => {
  let currentValue = parseInt(scaleControl.value, 10);
  if (currentValue < MAX_VALUE) {
    currentValue += STEP;
    scaleControl.value = `${currentValue}%`;
    changePicture();
  }
};

const pristine = new Pristine(formUploadOverlay, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',

  // добавляется к errorTextParent
  errorTextClass: 'img-upload__field-wrapper--error'
});

const resetValidate = () => pristine.reset();

const onCancelClick = () => {
  formUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  form.reset();
  resetValidate();
  resetImgScale();
  resetEffects();
  document.removeEventListener('keydown', imgUploadCancel);
};

const openForm = () => {
  imgUploadInput.addEventListener('change', () => {
    formUploadOverlay.classList.remove('hidden');
    body.classList.add('model-open');
  });
  imgUploadCancel.addEventListener('click', onCancelClick);
  //добавление обработчика:
  document.addEventListener('keydown', onEscapeKeydown);
};

const closeForm = () => {
  formUploadOverlay.classList.add('hidden');
  body.classList.remove('model-open');
};

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

  if(pristine.validate()){
    submitFormButton.disabled = true;
    sendData(new FormData(evt.target))
      .then(() => {
        showSuccess();
        onCancelClick();
      })
      .catch(() => {
        showError();
      })
      .finally(() => {
        submitFormButton.disabled = false;
      });
  }
});

onClickSmaller.addEventListener('click', onScaleSmallerButtonClick);
onClickBigger.addEventListener('click', onScaleBiggerButtonClick);

export { onCancelClick, openForm, closeForm, resetValidate, resetImgScale };

