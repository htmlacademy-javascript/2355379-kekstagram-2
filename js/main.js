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

const id = createIdGenerator(); // console.log(id());

const url = createIdGenerator(); // console.log(`photos/${url()}.jpg`);

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    previousValues.push(currentValue);
    return currentValue;
  };
}
const like = createRandomIdFromRangeGenerator(15, 200);

const NAMES = [
  'Анна',
  'Борис',
  'Василий',
  'Григорий',
  'Дмитрий',
  'Елена',
  'Женя',
  'Зинаида',
  'Иван',
  'Константин',
  'Леонид',
  'Михаил'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const urlAvatar = createRandomIdFromRangeGenerator(1, 6);

const randomMessageIndex = getRandomInteger(0, MESSAGE.length - 1);

const randomQuantity = getRandomInteger(1, 2);

const createRandomMessage = () => {
  let randomMessage = '';
  for(let i = randomQuantity; i >= 0; --i) {
    randomMessage += ' ' + MESSAGE[getRandomInteger(0, MESSAGE.length - 1)];
  }
  return randomMessage;
};

const photoUser = createIdGenerator();
for(let i = 25; i > 0; --i) {
  const createDescriptionPhotoUser = () => (
    {
    id: photoUser(),
    url: `photos/${url()}.jpg`,
    description: 'Перед нами интересная, необычная фотография.',
    likes: like(),
    comments:
      {
        id: id(),
        avatar: `img/avatar-${urlAvatar()}.svg`,
        message: createRandomMessage(),
        name: NAMES[getRandomInteger(0, NAMES.length - 1)]
      }
    });

}
