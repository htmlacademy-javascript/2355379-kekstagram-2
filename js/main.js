//import './fetch.js';

//import { createPhotos } from './create-photos.js';

import { renderMiniatures } from './thumbnails.js';
import {openForm} from './validate-form.js';
import { initUploadFile } from './foto.js';
import './effects.js';
import { getData } from './server.js';
import { showTimeError } from './success-failure.js';
import { initFilters } from './filter.js';

//import { openBigPicture } from './full-size-image.js';


//const photos = createPhotos();
//renderMiniatures(photos);


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


