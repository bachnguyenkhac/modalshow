var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconclose = document.querySelector('.modal_header i')
var btnclose = document.querySelector('.modal_footer button')

function toggleModal(e){
    console.log(e.target);
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click',toggleModal)
btnclose.addEventListener('click',toggleModal)
iconclose.addEventListener('click',toggleModal)
modal.addEventListener('click',function(e){
    if(e.target==e.currentTarget){
        toggleModal()
    }
})
