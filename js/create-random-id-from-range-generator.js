import {getRandomInteger} from './get-random-integer.js';

function createRandomIdFromRangeGenerator (min, max) {
  const PREVIOS_VALUES = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (PREVIOS_VALUES.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (PREVIOS_VALUES.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    PREVIOS_VALUES.push(currentValue);
    return currentValue;
  };
}

export {createRandomIdFromRangeGenerator, getRandomInteger};
