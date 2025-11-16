//Функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.
const arrObjects = []; // массив из 25 сгенерированных объектов

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
const description = 'Передо нами интересная, необычная фотография.';

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
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
const likes = createRandomIdFromRangeGenerator(15, 200);
console.log(likes());

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом.
const comments = [];

