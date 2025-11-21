import {NAMES, MESSAGES} from './constants.js';
import {getRandomInteger, getId, getRandomItem} from './util.js';

const createComments = () => {
  const comments = [];

  for(let i = 0; i <= getRandomInteger(0, 30); i++) {
    const comment = {
      id: getId(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomItem(MESSAGES),
      name: getRandomItem(NAMES)
    };
    comments.push(comment);
  }
  return comments;
};

export {createComments};
