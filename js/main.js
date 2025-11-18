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

const getId = createIdGenerator();

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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];

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

const createPhotos = () => {
  const photos = [];

  for(let i = 1; i <= 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: 'Перед нами интересная, необычная фотография.',
      likes: getRandomInteger(15, 200),
      comments: createComments()
    };
    photos.push(photo);
  }
  console.log(photos);
  return createPhotos;

};

createPhotos();
