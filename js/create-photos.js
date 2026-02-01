// 2. Отключен в main.js

import {getRandomInteger} from './util.js';
import {createComments} from './create-comments.js';

const createPhotos = () => {
  const photos = [];

  for(let i = 1; i <= 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: 'Перед нами интересная, необычная фотография!',
      likes: getRandomInteger(15, 200),
      comments: createComments()
    };
    photos.push(photo);
  }
  return photos;

};
createPhotos();

export {createPhotos};
