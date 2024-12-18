'use strict'
//скрипт верхнее меню ховер эффект 
let arr = document.querySelectorAll('.header-wrapper_li li');
for (let el of arr) {
    el.addEventListener('mouseenter', function func(event) {
        if (event.type == 'mouseenter') {
            el.style.textDecoration = 'underline';

        }
        el.addEventListener('mouseleave', function () {
            if (el.style.textDecoration == 'underline') {
                el.style.textDecoration = 'none';
            }
        })
    })
}

//скрипт нижнее меню ховер эффект 
let arrFooter = document.querySelectorAll('.footer-menu_change li');
for (let el of arrFooter) {
    el.addEventListener('mouseenter', function func(event) {
        if (event.type == 'mouseenter') {
            el.style.textDecoration = 'underline';

        }
        el.addEventListener('mouseleave', function () {
            if (el.style.textDecoration == 'underline') {
                el.style.textDecoration = 'none';
            }
        })
    })
}

//скрипт открытия формы хочу с вами и формы обратный звонок
let buttonCall=document.querySelector('.header-wrapper_button');
let buttonFeed = document.querySelector('.header-description_button')
let form = document.querySelector('.form');
buttonFeed.addEventListener('click', function clickForm() {
    form.style.display = 'block';
});
buttonCall.addEventListener('click', function(){
    form.style.display = 'block';
})

// закрытие формы крестик
let formClose = document.querySelector('.form');
let elmClose = document.querySelector('.plus');

elmClose.addEventListener('click', function close() {
    formClose.style.display = 'none';
});

//скрипт открытия/закрытия формы онлайн записи

let calendar = document.querySelector('.calendar');
let container = document.querySelector('.container');
let buttonWrite = document.getElementById('button-write');
let closeForm = document.querySelector('.calendar-plus');
buttonWrite.addEventListener('click', function () {
    calendar.style.display = 'block';
    container.style.display = 'grid';
})
closeForm.addEventListener('click', function () {
    calendar.style.display = 'none';
    container.style.display = 'none'
});


let clickCalendar = document.querySelectorAll('.container div');
for (let elem of clickCalendar) 
    {
    elem.addEventListener('click', function () {
        elem.classList.toggle('color-one')
        
       })
}




//форма доступные экскурсии

let formExcur=document.querySelector('.form-excursion');
let buttExur=document.querySelector('#open-exur');
buttExur.addEventListener('click', function(){
    formExcur.style.display='block';
})
let exurClose = document.querySelector('.excursion-plus');
exurClose.addEventListener('click', function close() {
    formExcur.style.display = 'none';
});


let formCert=document.querySelector('.form-certificate');
let buttCert=document.querySelector('#open-cert');
buttCert.addEventListener('click', function(){
    formCert.style.display='block';
})
let closeCert = document.querySelector('.certificate-plus');
closeCert.addEventListener('click', function close() {
    formCert.style.display = 'none';
});














//скрипт для скролинга страницы меню
let arrHeader=document.querySelectorAll('.header-wrapper_li li');
let mainGalleryText=document.querySelector('.main-gallery_text');
let seaHistory=document.querySelector('strong')
let gallery=document.querySelector('.gallery-elements')
let contacts=document.querySelector('.footer-card_social')

let mainDescriptionElements=document.querySelector('.main-description__elements')
for (let elem=0; elem<=arrHeader.length; elem++)
    {
   arrHeader[elem].addEventListener('click', function(){
   if (elem==0){
mainGalleryText.scrollIntoView({
    block:'nearest',
    behavior:'smooth',
})
   }
   else if  (elem==1){
    mainDescriptionElements.scrollIntoView({
        block:'nearest',
        behavior:'smooth',
    })
}
    else if  (elem==2){
        seaHistory.scrollIntoView({
            block:'nearest',
            behavior:'smooth',
        })

   }
   else if  (elem==3){
    gallery.scrollIntoView({
        block:'nearest',
        behavior:'smooth',
    })
}
else if  (elem==4){
    contacts.scrollIntoView({
        block:'nearest',
        behavior:'smooth',
    })
}
})}
        

       





















// let arrRev=document.querySelector('.main-reviews_card');
// let cardOne=document.querySelector('.reviews_card_one');
// let cardTwo=document.querySelector('.reviews_card_two');
// let cardThree=document.querySelector('.reviews_card_three');
// console.log(cardOne)
// console.log(cardTwo)
// console.log(cardThree)

// cardOne.addEventListener('click', function click(){
//     arrRev.append(cardOne);
// console.log('событие 1')
// })

// cardTwo.addEventListener('click', function click(){
//     arrRev.pp(cardTwo);
// console.log('событие 1')
// })

// cardThree.addEventListener('click', function click(){
//     arrRev.append(cardOne);
//     })

