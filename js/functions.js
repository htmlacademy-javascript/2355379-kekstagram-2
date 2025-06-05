function measureString(str, maxStr) {
  const result = str.length <= maxStr;
  return !result;
}
console.log('длина строки: ' + measureString('asdfghjk', 5));

function palindrome(str) {
  str = str.replaceAll(' ', '');
  console.log(str);
  str = str.toLowerCase();
  let newStr = '';

  for(let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  if(newStr === str) {
    console.log(`Строка ${ str } является палиндромом`);
  }
}
//palindrome('потоп');
palindrome('Лёша на полке клопа нашёл ');
//palindrome('потопj');


function returNumber(str) {
  let strNumber = ''; // полученное число в виде строки
  let symbolStr; // отдельный символ

  for(let i = 0; i <= str.length; i++) {
    symbolStr = parseInt(str[i], 10);
    if(!Number.isNaN(symbolStr)) {
      strNumber += symbolStr.toString();
    }
  }

  strNumber = Number(strNumber);
  //console.log(strNumber);
return strNumber;
}
console.log('Возврат чисел из строки: ' + returNumber('ECMAScript 2022'));
