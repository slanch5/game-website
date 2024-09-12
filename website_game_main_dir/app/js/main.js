

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
   
   lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      disableScrolling: true,
    });

    

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