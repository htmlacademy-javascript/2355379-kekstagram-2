function measureString(str, maxStr) {
  let result = str.length <= maxStr;
  return !result;
}
console.log('длина строки: ' + measureString('asdfghjk', 5));

function palindrome(str) {
  str = str.replaceAll(' ', '');
  console.log(str);
  str = str.toLowerCase();
  let newStr = '';

  for(let i = str.length-1; i >= 0; i--) {
    newStr += str[i];

  }

  if(newStr === str) {
    console.log('Строка ' + '\"' + str + '\"' + ' является палиндромом');
  }
}
//palindrome('потоп');
palindrome('Лёша на полке клопа нашёл ');
//palindrome('потопj');

function returNumber(str) {
  let strNumber = 0;

  for(let i = str.length-1; i >= 0; i++){
    let symbol = parseInt(str[i], 2);
    console.log(symbol);
    if(!(Number.isNaN(symbol))){
      strNumber += symbol;
    }
    return strNumber;
  }

}

returNumber('ECMAScript 2022');
