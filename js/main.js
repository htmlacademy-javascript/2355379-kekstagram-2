import { createPhotos } from './create-photos.js';
import { renderMiniatures } from './thumbnails.js';
//import { openBigPicture } from './full-size-image.js';

const photos = createPhotos();
renderMiniatures(photos);
//console.log(photos[4]);


//openBigPicture(photos[4]);


