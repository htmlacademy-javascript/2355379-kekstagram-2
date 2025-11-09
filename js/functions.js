// Функция для проверки длины строки.
const str = 'Лёша на полке клопа нашёл ';
const len = 27;
const checkLength = (string, maxLength) => {
	return (string.length <= maxLength) ? true : false;
};

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = (string) => {
	string = string.replaceAll(' ', '').toLowerCase();
	let strReverse = '';
	for(let i = string.length - 1; i >= 0; --i){
		strReverse += string[i];
	};
	return string === strReverse ? true : false;

};

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const strg = 'ECMAScript 2022';
let num = '';
const getNumbers = (string) => {
	for(let i = 0; i <= string.length - 1; ++i) {
		if((string[i] === '0') || (Number(string[i]))) {
			num += string[i];
		}
	}
	Number(num);
	num = parseFloat(num);
	console.log(num);
	return num;
};
