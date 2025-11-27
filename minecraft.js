
document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('crafting-modal');
    const openButton = document.getElementById('show-crafting-modal');
    const closeButton = document.querySelector('.close-button');


    openButton.addEventListener('click', function() {

        modal.classList.add('visible');
    });


    closeButton.addEventListener('click', function() {
     
        modal.classList.remove('visible');
    });


    window.addEventListener('click', function(event) {
       
        if (event.target === modal) {
            modal.classList.remove('visible');
        }
    });
});