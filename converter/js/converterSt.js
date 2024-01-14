// @ts-nocheck
const giveCurrencyList = document.getElementById('converter-give-currency');
const getCurrencyList = document.getElementById('converter-get-currency');
const giveCurrencyLabel = document.getElementById('input-give__label');
const getCurrencyLabel = document.getElementById('input-get__label');
let giveCurrency = 'USDT';
let getCurrency = 'EUR';
let exchangeRateApi = `${giveCurrency}${getCurrency}`;
let rates = '';
let formCurrency = ''
const giveCurrencyAmount = document.getElementById('input-give-amount');
const getCurrencyAmount = document.getElementById('input-get-amount');
giveCurrencyAmount.placeholder = 1;
giveCurrencyAmount.value = giveCurrencyAmount.placeholder;
getCurrencyAmount.placeholder = 0.920;
getCurrencyAmount.value = getCurrencyAmount.placeholder;

const symbols = [
  {
    name: 'USDT',
    image: 'https://www.konvert.gg/wp-content/uploads/converter/images/1. USDT.svg'
  },
  {
    name: 'EUR',
    image: 'https://www.konvert.gg/wp-content/uploads/converter/images/2. EUR.svg'
  },
  {
    name: 'UAH',
    image: 'https://www.konvert.gg/wp-content/uploads/converter/images/3. UAH.svg'
  },
  {
    name: 'RUB',
    image: 'https://www.konvert.gg/wp-content/uploads/converter/images/4. RUB.svg'
  },
  {
    name: 'KZT',
    image: 'https://www.konvert.gg/wp-content/uploads/converter/images/5. KZT.svg'
  },
  {
    name: 'USD',
    image: 'https://www.konvert.gg/wp-content/uploads/converter/images/10. USD.svg'
  },
  // NOT ACTIVE //
  // {
  //   name: 'TRY',
  //   image: 'https://www.konvert.gg/wp-content/uploads/converter/images/11. TRY.svg'
  // }
  // {
  //   name: 'BYN',
  //   image: 'https://www.konvert.gg/wp-content/uploads/converter/images/6. BYN.svg'
  // },
  // {
  //   name: 'KGS',
  //   image: 'https://www.konvert.gg/wp-content/uploads/converter/images/7. KGS.svg'
  // },
  // {
  //   name: 'TJS',
  //   image: 'https://www.konvert.gg/wp-content/uploads/converter/images/8. TJS.svg'
  // },
  // {
  //   name: 'GEL',
  //   image: 'https://www.konvert.gg/wp-content/uploads/converter/images/9. GEL.svg'
  // },
];

for (let i = 0; i < symbols.length; i++) {
  const li = document.createElement('li');
  li.value = '';
  li.innerHTML = `<span class="converter-give-currency__icon"><img src="${symbols[i].image}" alt="${symbols[i].name}"></span><span class="converter-give-currency__name">${symbols[i].name}</span>`;
  if (li.innerHTML === `<span class="converter-give-currency__icon"><img src="${symbols[i].image}" alt="USDT"></span><span class="converter-give-currency__name">USDT</span>`) {
    li.classList.add("active")
  }
  giveCurrencyList.appendChild(li.cloneNode(true));
  getCurrencyList.appendChild(li.cloneNode(true));
};

const firstChildInGiveElement = giveCurrencyList.querySelectorAll("li");
const firstChildInGetElement = getCurrencyList.querySelector("li[class=active]");
firstChildInGetElement.classList.remove("active");
const secondChildInGetElementSearch = getCurrencyList.querySelectorAll("li");
secondChildInGetElementSearch[1].classList.add("active");

const url = "https://script.googleusercontent.com/macros/echo?user_content_key=qOaj-knSboYN4D7d-aYO2qxnfFgHWBfYMlXQgTObWMXwvwWhnxxtWPVOBr4MiMyW8ND9HMD5f3_7W7jVTetX5_dBcJgEyyOWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAU-KW3ogPn0tMAgvdou59TV24aXAyKjWh54SYemE44nYSLzPbr32wOCwqGPcz0EsKnOQWaoX017xON5BOQXOmdKoSOdad6tfw&lib=MXgJH7bODgqHboozuiX91DWXbYuIH817B";

fetch(url)
  .then(response => response.json())
  .then(data => rates = data)
  .then(data => console.log(data));

const currencyFunctionInput = (a, b) => {
  const input1 = document.getElementById("input-give-amount");
  const input2 = document.getElementById('input-get-amount');
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  if (b === "USDTUSD") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDTEUR") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDTUAH") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDTRUB") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDTKZT") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  if (b === "EURUSD") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "EURUSDT") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "EURUAH") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "EURRUB") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "EURKZT") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  if (b === "UAHUSD") {
    if (input1.value < 19999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 39999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 199999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 399999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 400000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "UAHUSDT") {
    if (input1.value < 19999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 39999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 199999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 399999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 400000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "UAHEUR") {
    if (input1.value < 19999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 39999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 199999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 399999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 400000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "UAHRUB") {
    if (input1.value < 19999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 39999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 199999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 399999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 400000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "UAHKZT") {
    if (input1.value < 19999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 39999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 199999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 399999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 400000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  if (b === "RUBUSDT") {
    if (input1.value < 49999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 99999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 1000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "RUBEUR") {
    if (input1.value < 49999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 99999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 1000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "RUBUAH") {
    if (input1.value < 49999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 99999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 1000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "RUBKZT") {
    if (input1.value < 49999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 99999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 1000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "RUBUSD") {
    if (input1.value < 49999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 99999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 1000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  if (b === "KZTUSDT") {
    if (input1.value < 249999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 2499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 4999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 5000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "KZTEUR") {
    if (input1.value < 249999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 2499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 4999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 5000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "KZTUAH") {
    if (input1.value < 249999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 2499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 4999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 5000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "KZTRUB") {
    if (input1.value < 249999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 2499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 4999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 5000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "KZTUSD") {
    if (input1.value < 249999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 2499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 4999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 5000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  if (b === "USDUSDT") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDEUR") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDUAH") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDRUB") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDKZT") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
};
const currencyFunctionOutput = (a, b) => {
  const input2 = document.getElementById("input-give-amount");
  const input1 = document.getElementById('input-get-amount');
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  // USDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDTUSDT
  if (b === "USDTUSD") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDTEUR") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDTUAH") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDTRUB") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDTKZT") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  // EUREUREUREUREUREUREUREUREUREUREUREUREUREUREUR
  if (b === "EURUSD") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "EURUSDT") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "EURUAH") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "EURRUB") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "EURKZT") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  // UAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAHUAH
  if (b === "UAHUSD") {
    if (input1.value < 19999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 39999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 199999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 399999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 400000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "UAHUSDT") {
    if (input1.value < 19999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 39999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 199999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 399999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 400000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "UAHEUR") {
    if (input1.value < 19999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 39999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 199999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 399999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 400000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "UAHRUB") {
    if (input1.value < 19999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 39999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 199999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 399999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 400000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "UAHKZT") {
    if (input1.value < 19999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 39999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 199999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 399999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 400000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  // RUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUBRUB
  if (b === "RUBUSDT") {
    if (input1.value < 49999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 99999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 1000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "RUBEUR") {
    if (input1.value < 49999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 99999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 1000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "RUBUAH") {
    if (input1.value < 49999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 99999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 1000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "RUBKZT") {
    if (input1.value < 49999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 99999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 1000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "RUBUSD") {
    if (input1.value < 49999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 99999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 1000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  // KZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZTKZT
  if (b === "KZTUSDT") {
    if (input1.value < 249999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 2499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 4999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 5000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "KZTEUR") {
    if (input1.value < 249999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 2499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 4999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 5000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "KZTUAH") {
    if (input1.value < 249999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 2499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 4999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 5000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "KZTRUB") {
    if (input1.value < 249999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 2499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 4999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 5000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "KZTUSD") {
    if (input1.value < 249999) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 499999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 2499999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 4999999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 5000000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  // USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
  if (b === "USDUSDT") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDEUR") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDUAH") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDRUB") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
  if (b === "USDKZT") {
    if (input1.value < 500) {
      formCurrency = rates[`${b}`][0];
      input2.value = (input1.value / rates[`${b}`][0]).toFixed(3);
    } else if (input1.value < 999) {
      formCurrency = rates[`${b}`][1];
      input2.value = (input1.value / rates[`${b}`][1]).toFixed(3);
    } else if (input1.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input2.value = (input1.value / rates[`${b}`][2]).toFixed(3);
    } else if (input1.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input2.value = (input1.value / rates[`${b}`][3]).toFixed(3);
    } else if (input1.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input2.value = (input1.value / rates[`${b}`][4]).toFixed(3);
    }
  }
};

giveCurrencyList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    for (const item of this.children) {
      item.classList.remove("active");
    }
    event.target.classList.add("active");
    giveCurrency = event.target.textContent;
    giveCurrencyLabel.innerText = giveCurrency;
    exchangeRateApi = `${event.target.textContent}${getCurrency}`;
    const getCurrencyHiddenCurr2 = getCurrencyList.querySelectorAll('li');
    getCurrencyHiddenCurr2.forEach(function (element) {
      if (element.innerText === event.target.outerText) {
        element.classList.add("hidden-curr");
      } else {
        element.classList.remove("hidden-curr");
      }
    });
    const giveCurrencyHiddenCurr3 = getCurrencyList.querySelector("li.active")
    if (event.target.innerText === giveCurrencyHiddenCurr3.innerText) {
      const button = document.getElementById("converter-button");
      button.setAttribute("disabled", '');
      button.classList.add("hidden-curr");
    } else {
      const button = document.getElementById("converter-button");
      button.removeAttribute("disabled");
      button.classList.remove("hidden-curr");
    }
  };

  currencyFunctionOutput(rates, exchangeRateApi);
});

getCurrencyList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    for (const item of this.children) {
      item.classList.remove("active");
    }
    event.target.classList.add("active");
    getCurrency = event.target.textContent;
    getCurrencyLabel.innerText = getCurrency;
    exchangeRateApi = `${giveCurrency}${event.target.textContent}`;

    const giveCurrencyHiddenCurr3 = giveCurrencyList.querySelector("li.active")

    if (event.target.innerText === giveCurrencyHiddenCurr3.innerText) {
      const button = document.getElementById("converter-button");
      button.setAttribute("disabled", '');
      button.classList.add("hidden-curr");
      event.target.classList.add("hidden-curr");
    } else {
      const button = document.getElementById("converter-button");
      button.removeAttribute("disabled");
      button.classList.remove("hidden-curr");
    }
  };

  currencyFunctionInput(rates, exchangeRateApi);
});

giveCurrencyAmount.addEventListener('blur', function () {
  currencyFunctionInput(rates, exchangeRateApi);
});

getCurrencyAmount.addEventListener('blur', function () {
  currencyFunctionOutput(rates, exchangeRateApi);
});

const updateButtonConverter = document.getElementById('converter-button-update');

updateButtonConverter.addEventListener("click", () => {
  currencyFunctionInput(rates, exchangeRateApi);
});