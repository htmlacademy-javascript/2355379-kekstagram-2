fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((wizard) => { // wizard - любая переменная
    console.log(wizard);
  });
