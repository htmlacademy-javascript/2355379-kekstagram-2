const DESCRIPTION = `Описание фотографии.`;
const COMMENTS = [
  `Всё отлично!`,
  `В целом всё неплохо. Но не всё.`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];

const NAMES = [
  `Анна`,
  `Борис`,
  `Василий`,
  `Григорий`,
  `Дмитрий`,
  `Елена`,
  `Женя`,
  `Зинаида`,
  `Иван`
];
const minIdPhoto = 1;
const maxIdPhoto = 25;

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function createGenerator () {
  let lastGenerated = 0;

  return function () {
    lastGenerated += 1;
    return lastGenerated;
  };
}

const ID = createGenerator();
const CREATE_DESCRIPTION_PHOTO = () => {

const RANDOM__NAME = getRandomInteger(0, NAMES.length - 1);
const AVATAR = getRandomInteger(1, 6);
const LIKE = getRandomInteger(15, 200);
const RANDOM__COMMENT = getRandomInteger(0, COMMENTS.length - 1);

  return {
    id: ID(),
    url: `img/avatar${AVATAR}.jpg`,
    description: DESCRIPTION,
    likes: LIKE,
    comments: COMMENTS[RANDOM__COMMENT],
    names: NAMES[RANDOM__NAME]
  };
};

for(let i = 1; i <= maxIdPhoto; i++) {
	console.log(CREATE_DESCRIPTION_PHOTO());
}
