"use strict"

const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

let items = document.querySelector(`.items`)

for (let i = 0; i < images.length; i++) {
    items.innerHTML +=`<div class="item"><img src="${images[i]}"></div>`;
}

document.querySelector('.item').classList.add('active')
let active=0; 