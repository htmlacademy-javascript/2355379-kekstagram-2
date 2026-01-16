import {NAMES, MESSAGES} from './constants.js';
import {getRandomInteger, getRandomItem} from './util.js';

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const getId = createIdGenerator();

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
