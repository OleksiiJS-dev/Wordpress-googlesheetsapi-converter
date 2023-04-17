// @ts-nocheck
const YOUR_SPREADSHEET_ID = '186c0kX3qSeW5San6TO7l5P73KGJ_Dsy81bkfqfdpRUY';
const YOUR_API_KEY = 'AIzaSyDunAu2tdT3JeVY1gnbC6AVTlPefVshC-c';


const symbols1 = ['USD', 'EUR', 'UAH', 'RUB', 'KZT', 'BYN', 'KGS', 'TJS', 'GEL'];
const symbols2 = ['USD', 'EUR', 'UAH', 'RUB', 'KZT', 'BYN', 'KGS', 'TJS', 'GEL'];
let fromCurrency = 'USD';
let toCurrency = 'USD';
let exchangeRateApi = '';

const firstSelect = document.getElementById("firstSelect");
const secondSelect = document.getElementById("secondSelect");
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const button = document.querySelector('button');

// Используем цикл map для создания элементов списка
symbols1.map(symbol => {
  // Создаем новый элемент списка
  const option = document.createElement("option");
  option.value = symbol;
  option.text = symbol;

  // Добавляем элемент в первый список
  firstSelect.add(option.cloneNode(true));

});
symbols2.map(symbol => {
  // Создаем новый элемент списка
  const option = document.createElement("option");
  option.value = symbol;
  option.text = symbol;

  // Добавляем элемент в первый список
  secondSelect.add(option.cloneNode(true));

});

firstSelect.addEventListener('change', () => {
  console.log(firstSelect.value)
  fromCurrency = firstSelect.value
  exchangeRateApi = `${fromCurrency}/${toCurrency}`;
  console.log(exchangeRateApi);
});
secondSelect.addEventListener('change', () => {
  console.log(secondSelect.value)
  toCurrency = secondSelect.value
  exchangeRateApi = `${fromCurrency}/${toCurrency}`;
  console.log(exchangeRateApi);
});

button.addEventListener('click', () => {
  // Меняем значения переменных местами
  [fromCurrency, toCurrency] = [toCurrency, fromCurrency];
  firstSelect.value = fromCurrency;
  secondSelect.value = toCurrency;
  exchangeRateApi = `${fromCurrency}/${toCurrency}`;
  console.log(toCurrency, fromCurrency, exchangeRateApi)

  const temp = input1.value;
  input1.value = input2.value;
  input2.value = temp;
})


const usdEurRates = [0.879, 0.882, 0.885, 0.887, 0.891];

const converter = {
  
}

const currencyFunction = (a, b, c) => {
  (exchangeRateApi === a) ? input2.value = input1.value * c : (exchangeRateApi === b) ? input2.value = input1.value / c :  input1.value = input2.value;
}

input1.addEventListener('blur', function () {

  const input = parseFloat(input1.value);

  switch (true) {
    case value:
      
      break;
    case value:
      
      break;
    case value:
      
      break;
    case value:
      
      break;
  
    default:
      break;
  }

    if (input === 0){
      input1.value = 1;
      input2.value = 0;
    }
    else if (input < 500){
      currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[0]);
    }
    else if (input < 999){
      currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[1]);
    }
    else if (input < 4999){
      currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[2]);
    }
    else if (input < 9999){
      currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[3]);
    }
    else if (input > 9999){
      currencyFunction('USD/EUR', 'EUR/USD', usdEurRates[4]);
    } 
    else if ( input < 0) {
      input2.value = input2.placeholder
    }
});



// input1.addEventListener('blur', function () {
//   const input = parseFloat(input1.value);
//   if (input < 0) {
//     input1.value = ''
//     input2.placeholder = input1.placeholder * 1
//     input2.value = ''
//   } else if (!isNaN(input)) {
//     const output = input * 3.28084;
//     input2.placeholder = output.toFixed(2);
//     input2.value = input2.placeholder
//   } else {
//     input1.value = ''
//     input2.value = ''
//     input2.placeholder = input1.placeholder * 1
//   }
//   switch (true) {
//     case (input <= 100):
//       exchangeRate = 0.879;
//       break;
//     case (input <= 999):
//       exchangeRate = 0.882;
//       break;
//     case (input <= 4999):
//       exchangeRate = 0.885;
//       break;
//     case (input <= 9999):
//       exchangeRate = 0.887;
//       break;
//     default:
//       exchangeRate = 0.891;
//       break;
//   }
// });

// input2.addEventListener('blur', function () {
//   const output = parseFloat(input2.value);
//   if (output < 0) {
//     input1.value = ''
//     input2.placeholder = input1.placeholder * 1
//     input2.value = ''
//   } else if (!isNaN(output)) {
//     const input = output / 3.28084;
//     input1.value = input.toFixed(2);
//   } else {
//     input1.value = ''
//     input2.placeholder = input1.placeholder * 1
//     input2.value = ''
//   }
// });
