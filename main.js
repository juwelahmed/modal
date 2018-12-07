
function showModal(modalType){
    let modal = document.querySelector('.' + modalType);
    modal.classList.add('modal--open', ''+ modalType +'');
}

function closeModal(){
    let modal = document.querySelector('.modal--open');
    modal.classList.remove('modal--open');
}
// let btn = document.getElementById('btnModal');

// btn.addEventListener('click', function(){
//     let modal = document.querySelector('.modal');
//     modal.classList.add('modal--open');
// });

//  let btnClose = document.querySelector('.modal__close');
 
// btnClose.addEventListener('click', function(){
    
//     let modal = document.querySelector('.modal');
//     modal.classList.remove('modal--open');
// });