// Функция для проверки длины строки.
const checkLength = (string, maxLength) => {
  return string.length <= maxLength;
};

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  let strReverse = '';
  for(let i = string.length - 1; i >= 0; --i){
    strReverse += string[i];
  }
  return string === strReverse;
};

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

const getNumbers = (string) => {
  let num = '';
  for(let i = 0; i <= string.length - 1; ++i) {
    if((string[i] === '0') || (Number(string[i]))) {
      num += string[i];
    }
  }
  num = parseFloat(num);
  return num;
};
