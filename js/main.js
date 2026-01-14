import { createPhotos } from './create-photos.js';
//import { photoMiniatures } from './thumbnails.js';
import { openBigPicture } from './full-size-image.js';

const photos = createPhotos();
//console.log(photos[4]);


openBigPicture(photos[4]);


