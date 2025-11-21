function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function createIdGenerator () {
	let lastGeneratedId = 0;

  return function () {
		lastGeneratedId += 1;
		return lastGeneratedId;
	};
}

const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];

const getId = createIdGenerator();

export {getRandomInteger, getId, getRandomItem};
