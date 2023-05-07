"use strict";

const creditsB = document.querySelector(".creditsB");

creditsB.addEventListener('click',credits);

function credits(){
    const credit = document.querySelector(".end");
    credit.classList.toggle("credit");
    const arrow = document.querySelector(".arrow");
    arrow.classList.toggle("down");
    arrow.classList.toggle("up");
}