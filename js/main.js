//Функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.
const arrayGeneratedObjects = []; // массив из 25 сгенерированных объектов

// генератор случайных чисел
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// генератор:
function createIdGenerator () {
	let lastGeneratedId = 0;

  return function () {
		lastGeneratedId += 1;
		return lastGeneratedId;
	};
}

// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
const id = createIdGenerator(); // console.log(id());

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
const url = createIdGenerator(); // console.log(`photos/${url()}.jpg`);

// description, строка — описание фотографии. Описание придумайте самостоятельно.
//const description = 'Передо нами интересная, необычная фотография.';

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    /*
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    */
    previousValues.push(currentValue);
    return currentValue;
  };
}
const like = createRandomIdFromRangeGenerator(15, 200);

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом.
const comments = [];

// Набор имён для комментаторов
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

// Для формирования текста комментария
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

//
const urlAvatar = createRandomIdFromRangeGenerator(1, 6);
//const randomNameIndex = getRandomInteger(0, NAMES.length - 1); // индекс для случайного имени name из NAMES

const randomMessageIndex = getRandomInteger(0, MESSAGE.length - 1); // индекс для случайного имени name из NAMES

// объект - комментарий
/*const comment = {
  id: id(),
  avatar: `img/avatar-${urlAvatar()}.svg`,
  message: '',
  name: NAMES[randomNameIndex]
};*/
// Один или два случайных коммента в comment:
const randomQuantity = getRandomInteger(1, 2);

const createRandomMessage = () => {
  let randomMessage = '';
  for(let i = randomQuantity; i >= 0; --i) {
    randomMessage += ' ' + MESSAGE[getRandomInteger(0, MESSAGE.length - 1)];
  } // console.log(comment);
  return randomMessage;
};

// Создать объект - описание фотографии, опубликованной пользователем с id, url, description, likes, comments:
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
  console.log(createDescriptionPhotoUser());
}
