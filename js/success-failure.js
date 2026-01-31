const errorTemplateData = document.querySelector('#data-error').content.querySelector('.data-error');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');
const isEscape = (evt) => evt.key === 'Escape';

const showTimeError = () => {
  const errorMessage = errorTemplateData.cloneNode(true);
  body.appendChild(errorMessage);
  setTimeout(() => {
    errorMessage.remove();
  },5000);
};

const showSuccess = () => {
  const successMessage = successTemplate.cloneNode(true);
  body.appendChild(successMessage);

  const closeSuccess = () => {
    successMessage.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  successMessage.querySelector('.success__button').addEventListener('click',() => {
    closeSuccess();
  });

  successMessage.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('success')){
      closeSuccess();
    }
  });

  function onDocumentKeydown(evt) {
    if(isEscape(evt)){
      closeSuccess();
    }
  }
  document.addEventListener('keydown', onDocumentKeydown);
};

const showError = () => {
  const errorMessage = errorTemplate.cloneNode('true');
  body.appendChild(errorMessage);

  const closeError = () => {
    errorMessage.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  };
  errorMessage.querySelector('.error__button').addEventListener('click', () => {
    closeError();
  });
  errorMessage.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('error')){
      closeError();
    }
  });

  function onDocumentKeydown(evt) {
    if(isEscape(evt)){
      closeError();
    }
  }
  document.addEventListener('keydown', onDocumentKeydown);
};

export { showSuccess, showError, showTimeError};
