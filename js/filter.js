import { renderMiniatures } from './thumbnails.js';
import { debounce } from './util.js';

const filtersImg = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');

// Удаляет белый эффект на кнопке
const deactivFiltersButtons = () => {
  filterButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

// Оптимизирует производительность
const debounceRenderMiniatures = debounce(renderMiniatures);

// Удаляет белый эффект при выборе другой кнопки
const showFilters = () => {
  filtersImg.classList.remove('img-filters--inactive');
};

// Сортирует массив по убыванию  комментариев
const getDiscussedPhotos = (photos) => photos.slice().sort((a,b) => b.comments.length - a.comments.length);

// Выбирает случайные фотографии от 1 до 10
const getRandomPhotos = (photos) => photos.slice(0,10);

// Функция для основных кнопок приложения
const initFilters = (photos) => {
  showFilters();
  filterButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      deactivFiltersButtons();
      evt.target.classList.add('img-filters__button--active');
      if(evt.target.id === 'filter-default'){
        debounceRenderMiniatures(photos);
      }else if(evt.target.id === 'filter-random'){
        debounceRenderMiniatures(getRandomPhotos(photos));
      }else if(evt.target.id === 'filter-discussed'){
        debounceRenderMiniatures(getDiscussedPhotos(photos));
      }
    });
  });
};

export{ initFilters };
