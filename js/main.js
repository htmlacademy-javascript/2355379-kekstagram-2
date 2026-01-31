import './fetch.js';

import { createPhotos } from './create-photos.js';

import { renderMiniatures } from './thumbnails.js';
import {openForm} from './validate-form.js';
import { initUploadFile } from './foto.js';


import { openBigPicture } from './full-size-image.js';


const photos = createPhotos();
renderMiniatures(photos);

openForm();

initUploadFile();
