function measureString(str, maxStr) {
  const result = str.length <= maxStr;
  return !result;
}


function palindrome(str) {
  str = str.replaceAll(' ', '');
  str = str.toLowerCase();
  let newStr = '';

  for(let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if(newStr === str) {
    return newStr;
  }
}
palindrome('Потоп');


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
  return strNumber;
}
console.log(returNumber('23ECM 5 AScript 2022'));
