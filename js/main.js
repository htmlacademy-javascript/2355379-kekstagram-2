import { renderMiniatures } from './thumbnails.js';
import {openForm} from './validate-form.js';
import { initUploadFile } from './photo.js';
import './effects.js';
import { getData } from './server.js';
import { showTimeError } from './success-failure.js';
import { initFilters } from './filter.js';

getData()
  .then((photos) => {
    renderMiniatures(photos);
    initFilters(photos);
  })
  .catch(() => {
    showTimeError();
  });
openForm();

initUploadFile();


