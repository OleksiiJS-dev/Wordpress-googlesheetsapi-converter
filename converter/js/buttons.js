// @ts-nocheck
const symbolsІecond = [];
const converterActionButton = document.querySelector(".converter-button-action");
const converterBlockSide = document.querySelector(".converter-block-side");
const converterGet = document.querySelector(".converter-get");
const converterGiveCurrency = document.querySelector("#converter-give-currency");
const converterGetCurrency = document.querySelector("#converter-get-currency");
const inputGiveAmount = document.querySelector("#input-give-amount");
const inputGetAmount = document.querySelector("#input-get-amount");
const converterGiveAmount = document.querySelector("#converter-give-title");
const converterGetAmount = document.querySelector(".converter-get-title");
const buttonReverse = document.getElementById("converter-button__reverse")
const sideTitleGet = document.querySelector(".converter-get-title");
const checkbox = document.querySelector('.form-block__checkbox input');
const submitButton = document.querySelector('.form-block__button');
const messengerCheckboxes = document.querySelectorAll('input[name="messenger"]');
const formBlock = document.querySelector(".form-block");
const popupClick = document.getElementById("popup-click");
// FOR WP ITS UNCOMMENTED
const updateButton = document.getElementById('converter-button-update');

const popupClose = () => {
  popup.classList.add("popup-hidden");
  wrapper.classList.remove("wrapper-filter");
  clearForm();
};

popupClick.addEventListener("click", () => {
  popupClose();
});

converterActionButton.addEventListener('click', () => {
  const activeElementGive = document.querySelector('#converter-give-currency li.active');
  const activeElementGet = document.querySelector('#converter-get-currency li.active');
  const inputGetLabel = document.getElementById("input-get__label");
  const inputGiveLabel = document.getElementById("input-give__label");
  buttonReverse.classList.add("small-reverse");
  converterActionButton.classList.add("display");
  updateButton.classList.add("display");
  converterBlockSide?.classList.add("small");
  converterGet?.classList.add("small");
  converterGiveCurrency?.classList.add('small-ul');
  converterGetCurrency?.classList.add('small-ul');
  inputGiveAmount?.classList.add("input-second-block");
  inputGetAmount?.classList.add("input-second-block");
  sideTitleGet?.classList.add("title-get-second-block");
  converterGiveAmount?.classList.add("title-give-second-block");
  formBlock?.classList.add("visible");

  if (activeElementGive) {
    const secondSpanGive = activeElementGive.children[1];
    const firstSpanGive = activeElementGive.children[0];
    if (secondSpanGive && firstSpanGive) {
      converterGiveAmount.innerHTML = '';
      inputGiveLabel.innerHTML = secondSpanGive.innerHTML + firstSpanGive.innerHTML;
      inputGiveLabel?.classList.add("small-give__label");
      inputGiveLabel?.classList.remove("input-give__label");
    }
    if (activeElementGet) {
      const secondSpanGet = activeElementGet.querySelectorAll('span')[1];
      const firstSpanGet = activeElementGet.querySelectorAll('span')[0];
      if (secondSpanGet && firstSpanGet) {
        sideTitleGet.innerHTML = null;
        inputGetLabel.innerHTML = secondSpanGet.innerHTML + firstSpanGet.innerHTML;
        inputGetLabel?.classList.add("small-get__label");
        inputGetLabel?.classList.remove("input-get__label");
      }
    }
  }

  messengerCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        messengerCheckboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
            otherCheckbox.removeAttribute("required");
            event.target.setAttribute('required', '');
          }
        });
      }
    });
  });

  checkbox.addEventListener('change', function () {
    checkboxChange();
  });
  
})

buttonReverse?.addEventListener('click', function () {
  const activeGiveCurrencyElem = giveCurrencyList?.querySelector(".active");
  const activeGetCurrencyElem = getCurrencyList?.querySelector(".active");
  const allGiveElem = giveCurrencyList?.querySelectorAll('li');
  const allGetElem = getCurrencyList?.querySelectorAll('li');

  allGiveElem?.forEach(item => {
    item.classList.remove("active");
  })

  allGetElem?.forEach(item => {
    item.classList.remove("active");
  })

  const reverseGiveElem = Array.from(allGiveElem).find(item => item.textContent === activeGetCurrencyElem?.textContent);

  const reverseGetElem = Array.from(allGetElem).find(item => item.textContent === activeGiveCurrencyElem?.textContent);

  const currencyFunctionSwitch = (a, b) => {
    const input1 = document.getElementById("input-give-amount");
    const input2 = document.getElementById('input-get-amount');
    if (input2.value < 500) {
      formCurrency = rates[`${b}`][0];
      input1.value = input2.value;
      input2.value = (input1.value * rates[`${b}`][0]).toFixed(3);
    } else if (input2.value < 999) {
      formCurrency = rates[`${b}`][1];
      input1.value = input2.value;
      input2.value = (input1.value * rates[`${b}`][1]).toFixed(3);
    } else if (input2.value < 4999) {
      formCurrency = rates[`${b}`][2];
      input1.value = input2.value;
      input2.value = (input1.value * rates[`${b}`][2]).toFixed(3);
    } else if (input2.value < 9999) {
      formCurrency = rates[`${b}`][3];
      input1.value = input2.value;
      input2.value = (input1.value * rates[`${b}`][3]).toFixed(3);
    } else if (input2.value >= 10000) {
      formCurrency = rates[`${b}`][4];
      input1.value = input2.value;
      input2.value = (input1.value * rates[`${b}`][4]).toFixed(3);
    }
  }
  if (reverseGiveElem && reverseGetElem) {
    reverseGiveElem.classList.add('active');
    reverseGetElem.classList.add('active');
    const inputGetLabel = document.getElementById("input-get__label");
    const inputGiveLabel = document.getElementById("input-give__label");
    const temp = inputGetLabel.innerHTML;
    inputGetLabel.innerHTML = inputGiveLabel.innerHTML;
    inputGiveLabel.innerHTML = temp;
    giveCurrency = reverseGiveElem.textContent;
    getCurrency = reverseGetElem.textContent;
    exchangeRateApi = `${giveCurrency}${getCurrency}`
    currencyFunctionSwitch(rates, exchangeRateApi)
    console.log(exchangeRateApi, reverseGiveElem.textContent, giveCurrency, reverseGetElem.textContent, getCurrency, formCurrency)
  }

  allGetElem.forEach((el) => {
    el.classList.remove("hidden-curr");
  })

  allGetElem.forEach((el) => {
    if (el.innerText === activeGetCurrencyElem.innerText) {
      el.classList.add("hidden-curr");
    }
  })

});

const checkboxChange = () => {
  if (checkbox.checked) {
    submitButton.classList.remove('disabled');
  } else {
    submitButton.classList.add('disabled');
  }
}

const cityCheckboxes = document.querySelectorAll('input[name="city"]');
const otherCityCheckBox = document.getElementById("other-city");
const otherCityCheckBoxInput = document.getElementById('other-city-input');

cityCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      cityCheckboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
          otherCheckbox.removeAttribute("required");
          event.target.setAttribute('required', '');
        }
      });
    }
    if (event.target.id === "1") {
      otherCityCheckBoxInput.setAttribute("disabled", '');
      otherCityCheckBoxInput.value = '';
    }
    else if (event.target.id === "2") {
      otherCityCheckBoxInput.setAttribute("disabled", '');
      otherCityCheckBoxInput.value = '';
    }
    else if (event.target.id === "3") {
      otherCityCheckBoxInput.setAttribute("disabled", '');
      otherCityCheckBoxInput.value = '';
    }
  });
});

otherCityCheckBox.addEventListener('change', event => {
  if (event.target.checked) {
    console.log("checkbox");
    otherCityCheckBoxInput.setAttribute("required", '');
    otherCityCheckBoxInput.removeAttribute("disabled");
  } else {
    console.log("uncheckbox")
    otherCityCheckBoxInput.removeAttribute("required");
    otherCityCheckBoxInput.setAttribute("disabled", '');
    otherCityCheckBoxInput.value = '';
  }
});