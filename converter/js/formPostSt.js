// @ts-nocheck

const form = document.getElementById('MyForm');
const popup = document.querySelector(".popup")
const wrapper = document.querySelector(".wrapper")
const setFormNumber = () => {
    function getRandomEightDigitNumberWithLeadingZeros() {
        const min = 0;
        const max = 99999999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        const randomNumberWithLeadingZeros = String(randomNumber).padStart(8, '0');
        return randomNumberWithLeadingZeros;
    }
    const randomEightDigitNumberWithLeadingZeros = getRandomEightDigitNumberWithLeadingZeros();
    const formNumber = randomEightDigitNumberWithLeadingZeros;
    return formNumber;
}
const setFormData = () => {
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
    const currentDate = new Date();
    const formData = formatDate(currentDate);
    return formData;
}
const setFormReceiveLocation = () => {
    const formReceiveLocation = 'Сайт';
    return formReceiveLocation;
}
const setFormStatus = () => {
    const formStatus = '🆕 Новая';
    return formStatus;
}
const setFormManager = () => {
    const formManager = '';
    return formManager;
}
const setFormName = () => {
    const name = document.getElementById('name');
    let formName = name.value;
    return formName;
}
const setFormTel = () => {
    const tel = document.getElementById('tel');
    const formTel = tel.value;
    return formTel;
}
const setFormCard = () => {
    const card = document.getElementById('card-number');
    const formCard = card.value;
    return formCard;
}
const setFormGive = () => {
    const give = document.getElementById("input-give-amount");
    const formGive = give.value;
    return formGive;
}
const setFormGet = () => {
    const get = document.getElementById("input-get-amount");
    const formGet = get.value;
    return formGet
}
const setFormGiveCurr = () => {
    const giveCurr = document.getElementById("input-give__label");
    const formGiveCurr = giveCurr?.textContent;
    return formGiveCurr;
}
const setFormGetCurr = () => {
    const getCurr = document.getElementById("input-get__label");
    const formGetCurr = getCurr?.textContent;
    return formGetCurr;
}
const setFormPromocode = () => {
    const promocode = document.getElementById("promocode");
    if (!promocode.value) {
        promocode.value = ''
    }
    const formPromocode = promocode.value;
    return formPromocode;
}
const setFromTelegram = () => {
    const formTelegram = '';
    return formTelegram;
}
const setFormCommentary = () => {
    const commentary = document.getElementById("commentary");
    if (!commentary.value) {
        commentary.value = '';
    }
    const formCommentary = commentary.value;
    return formCommentary;
}
const setFormMessenger = () => {
    const messenger = document.querySelector("input[type=checkbox][name=messenger][required]")
    let formMesenger = ''
    if (messenger.id === 'myCheckboxWhatsapp' && messenger.id) {
        formMesenger = 'Whatsapp';
    } else if (messenger.id === 'myCheckboxTelegram' && messenger.id) {
        formMesenger = 'Telegram';
    } else if (messenger.id === 'myCheckboxViber' && messenger.id) {
        formMesenger = 'Viber';
    }
    return formMesenger;
}
const setFormCity = () => {
    // const messenger = document.querySelector("input[type=checkbox][name=messenger][required]")
    // let formMesenger = ''
    // if (messenger.id === 'myCheckboxWhatsapp' && messenger.id) {
    //     formMesenger = 'Whatsapp';
    // } else if (messenger.id === 'myCheckboxTelegram' && messenger.id) {
    //     formMesenger = 'Telegram';
    // } else if (messenger.id === 'myCheckboxViber' && messenger.id) {
    //     formMesenger = 'Viber';
    // }
    // return formMesenger;
    const cityExchange = Object;

    const otherCityInput = document.getElementById('other-city-input');
    const otherCity = document.querySelector("input[type=checkbox][name=city][required]");

    if (otherCity.id === "1") {
        cityExchange.value = 'Подгорица';
    }
    else if (otherCity.id === "2") {
        cityExchange.value = 'Будва';
    }
    else if (otherCity.id === "3") {
        cityExchange.value = 'Бар';
    }
    else if (otherCity.id === "other-city") {
        cityExchange.value = otherCityInput.value;
    }
    return cityExchange.value;
}
const setFormCurrency = () => {
    return formCurrency;
}
const clearForm = () => {
    const name = document.getElementById('name');
    name.value = ''
    const tel = document.getElementById('tel');
    tel.value = ''
    const card = document.getElementById('card-number');
    // card.value = ''
    const promocode = document.getElementById("promocode");
    // promocode.value = ''
    const commentary = document.getElementById("commentary");
    commentary.value = ''
    messengerCheckboxes.forEach((checkbox) => {
        checkbox.checked = false
    })
    checkbox.checked = false;
    checkboxChange();
    const otherCityInput = document.getElementById('other-city-input')
    const otherCity = document.querySelector("input[type=checkbox][name=city][required]")
    otherCity.checked = false;
    otherCityInput.value = '';
}
form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const message =
        `
🧧 Заявка: ${setFormNumber()}
📆 Дата: ${setFormData()}
🚥 Статус:  ${setFormStatus()}
🧑‍💻 Менеджер: ${setFormManager()}

👤 ФИО: ${setFormName()}
📞 Номер телефона: ${setFormTel()}
🌆 Название города/карта: ${setFormCity()}
📤 Продажа: ${setFormGiveCurr()}
💸 Сумма продажи: ${setFormGive()}
📥 Покупка: ${setFormGetCurr()}
👀 Сумма покупки: ${setFormGet()}
⚖️ Курс: ${setFormCurrency()}
🏷 Промокод: ${''}
📞 Мессенджер: ${setFormMessenger()}
🔖 Комментарий: ${setFormCommentary()}
`
    popup.classList.remove("popup-hidden")
    wrapper.classList.add("wrapper-filter")
    const telegramBotToken = '6044229590:AAE14BzmF942S9Cf2dcccBbdAGwew8nklZc';
    const chatId = '-1001522353086';
    const sendMessageUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    let messageId
    const sendMessageOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // mode: "no-cors",
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🟢 Взять в работу', callback_data: 'button_pressed' }]
                ]
            }
        })
    };

    fetch(sendMessageUrl, sendMessageOptions)
        .then(response => {
            if (response.ok) {
                console.log('Message sent successfully');
                return response.json();
            } else {
                throw new Error('Error sending message');
            }
        })
        .then(data => {
            console.log(data, data.result.message_id);
            messageId = data.result.message_id;

            const pinMessageOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    message_id: messageId,
                })
            };
            const pinMessageUrl = `https://api.telegram.org/bot${telegramBotToken}/pinChatMessage`;
            fetch(pinMessageUrl, pinMessageOptions)
                .then(response => {
                    if (response.ok) {
                        console.log('Message pinned successfully');
                    } else {
                        throw new Error('Error pinning message');
                    }
                })
                .catch(error => {
                    console.error('Error pinning message', error);
                });
        })
        .catch(error => {
            console.error('Error sending message', error);
        });

});
