// @ts-nocheck

const sliderLeft = document.getElementById("slider-left");
const sliderRight = document.getElementById("slider-right");

const sliderTitleleft = document.getElementById("side-title-id-left");
const sliderTitleRight = document.getElementById("side-title-id-right");

const sideTitleIdLeft = document.getElementById("side-title-id-left");
const sideTitleIdRight = document.getElementById("side-title-id-right");

const sliderLeftSell = document.getElementById("slider-left-sell-el");
const sliderLeftBuy = document.getElementById("slider-left-buy-el");

const rightSliderSell = document.getElementById("slider-right-sell-el");
const rightSliderBuy = document.getElementById("slider-right-buy-el");

const rightSliderBuyColor = document.getElementById("slider-right-buy-el");
const rightSliderSellColor = document.getElementById("slider-right-sell-el");

const sliderLeftSellColor = document.getElementById("slider-left-sell-el");
const sliderLeftBuyColor = document.getElementById("slider-left-buy-el");

sliderLeft.addEventListener("click", () => {
    console.log("sliderLeft");
});

sliderRight.addEventListener("click", () => {
    console.log("sliderRight");
});


sliderTitleleft.addEventListener("click", () => {
    if (sliderLeft.classList.contains("slider-active")) {
        sliderLeft.classList.remove("slider-active-animation");
        sliderLeft.style.transform = 'translateX(141px)';
        sliderLeft.classList.remove("slider-active");
        sliderLeft.classList.add("slider-deactive");
        sliderLeftSell.style.transform = 'translateX(-20px)';
        sliderLeftBuy.style.transform = 'translateX(-20px)';

        rightSliderSell.style.transform = 'translateX(20px)';
        rightSliderBuy.style.transform = 'translateX(20px)';
        sliderRight.style.transform = 'translateX(-141px)';
        sliderRight.classList.add("slider-active");

        sliderLeftBuy.style.color = "#FFFFFF";
        sliderLeftSell.style.color = '#808080';

        rightSliderSellColor.style.color = "#FFFFFF";
        rightSliderBuy.style.color = '#808080';

    }
    else {
        sliderLeft.classList.add("slider-active-animation");
        sliderLeft.style.transform = 'translateX(0px)';
        sliderLeft.classList.remove("slider-deactive");
        sliderLeft.classList.add("slider-active");
        sliderLeftSell.style.transform = 'translateX(0px)';
        sliderLeftBuy.style.transform = 'translateX(0px)';

        rightSliderSell.style.transform = 'translateX(0px)';
        rightSliderBuy.style.transform = 'translateX(0px)';
        sliderRight.style.transform = 'translateX(0px)';
        sliderRight.classList.remove("slider-active");

        sliderLeftBuy.style.color = "#808080";
        sliderLeftSell.style.color = '#FFFFFF';

        rightSliderSellColor.style.color = "#808080";
        rightSliderBuy.style.color = '#FFFFFF';
    }
});

sliderTitleRight.addEventListener("click", () => {
    console.log("sliderTitleRight");
    if (sliderRight.classList.contains("slider-active")) {
        sliderLeft.classList.add("slider-active");
        sliderLeft.classList.remove("slider-deactive");
        sliderLeft.style.transform = 'translateX(0px)';

        sliderRight.classList.remove("slider-active");
        sliderRight.style.transform = 'translateX(0px)';

        rightSliderSell.style.transform = 'translateX(0px)';
        rightSliderBuy.style.transform = 'translateX(0px)';

        sliderLeftSell.style.transform = 'translateX(0px)';
        sliderLeftBuy.style.transform = 'translateX(0px)';

        sliderLeftBuy.style.color = "#808080";
        sliderLeftSell.style.color = '#FFFFFF';

        rightSliderSellColor.style.color = "#808080";
        rightSliderBuy.style.color = '#FFFFFF';
    }
    else {
        sliderLeft.classList.remove("slider-active-animation");
        sliderLeft.style.transform = 'translateX(141px)';
        sliderLeft.classList.remove("slider-active");
        sliderLeft.classList.add("slider-deactive");
        sliderLeftSell.style.transform = 'translateX(-20px)';
        sliderLeftBuy.style.transform = 'translateX(-20px)';

        rightSliderSell.style.transform = 'translateX(20px)';
        rightSliderBuy.style.transform = 'translateX(20px)';
        sliderRight.style.transform = 'translateX(-141px)';
        sliderRight.classList.add("slider-active");

        sliderLeftBuy.style.color = "#FFFFFF";
        sliderLeftSell.style.color = '#808080';

        rightSliderSellColor.style.color = "#FFFFFF";
        rightSliderBuy.style.color = '#808080';
    }
});