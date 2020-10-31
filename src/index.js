const toggleModalAddTodoItemForm = () => {
    let btnShow = document.getElementById('showForm');
    btnShow.addEventListener('click', () => {
        let modalContent = document.getElementById('modalContent');
        modalContent.style.visibility = "visible";
        let modal = document.getElementById('modal');
        modal.style.visibility = "visible";
        console.log('eee')
    });

    let btnHide = document.getElementById('closeForm');
    btnHide.addEventListener('click', () => {
        let modalContent = document.getElementById('modalContent');
        modalContent.style.visibility = "hidden";
        let modal = document.getElementById('modal');
        modal.style.visibility = "hidden";
        console.log('dsa')
    });
};

toggleModalAddTodoItemForm();