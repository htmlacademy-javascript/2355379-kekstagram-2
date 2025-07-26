import {getRandomInteger} from './get-random-integer.js';
import {DESCRIPTION, COMMENTS, NAMES} from './const.js';

function createGenerator () {
  let lastGenerated = 0;

  return function () {
    lastGenerated += 1;
    return lastGenerated;
  };
}

const id = createGenerator();

const CREATE_DESCRIPTION_PHOTO = () => {
  const randomName = getRandomInteger(0, NAMES.length - 1);
  const avatar = getRandomInteger(1, 6);
  const like = getRandomInteger(15, 200);

  const randomComments = [];

  const randomRepeat = getRandomInteger(0, 30);

  for(let i = 0; i < randomRepeat; i++) {
    randomComments.push(COMMENTS[getRandomInteger(0, COMMENTS.length - 1)]);
  }
  return {
    id: id(),
    url: `img/avatar${avatar}.jpg`,
    description: DESCRIPTION,
    likes: like,
    comments: randomComments,
    names: NAMES[randomName]
  };
};


export {CREATE_DESCRIPTION_PHOTO};
