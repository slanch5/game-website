

$(function () {
   const Open = document.querySelector('.form__btn');
   const Close = document.querySelector('.pop__up__btn__close');
   const PopUp = document.querySelector('.pop__up');

   Open.addEventListener('click', function(e){
      e.preventDefault();
      PopUp.classList.add('active'); 
   })
   Close.addEventListener('click', ()=>{
     PopUp.classList.remove('active');
   })
   
  

    

})

document.addEventListener('DOMContentLoaded', () => {
   const swiper = new Swiper('.swiper', {
    
     loop: true,
   //   pagination: {
   //     el: '.swiper-pagination',
       
   //   },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     
   });
 });

 const MenuBtn = document.querySelector('.burger__btn');
const MenuNav = document.querySelector('.nav__menu__list');

MenuBtn.addEventListener('click', ()=> {
   MenuNav.classList.toggle('nav__menu__list--active')
})