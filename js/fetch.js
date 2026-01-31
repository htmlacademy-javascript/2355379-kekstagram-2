fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((dataFromServer) => { // wizard - любая переменная
    console.log(dataFromServer);
  });
