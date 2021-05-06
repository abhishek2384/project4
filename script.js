const land = document.querySelector('.landing');
const sign =document.querySelector('.change');

sign.addEventListener('click',function(){
    sign.classList.toggle('active');
    land.classList.toggle('active');
})