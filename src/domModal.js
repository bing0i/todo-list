const domModal = (() => {
    const init = () => {
        attachEventsToggleForm();
    };

    const attachEventsToggleForm = () => {
        const btnShowAddTodoItemForm = document.getElementById('showAddTodoItemForm');
        btnShowAddTodoItemForm.addEventListener('click', () => {
            if (document.getElementById('inpTextAddTodoItem').className === '')
                return;
                
            toggleModal('visible', 'modalContentAddTodoItem', 'modalAddTodoItem');
        });
        const btnHideAddTodoItemForm = document.getElementById('closeAddTodoItemForm');
        btnHideAddTodoItemForm.addEventListener('click', () => {
            toggleModal('hidden', 'modalContentAddTodoItem', 'modalAddTodoItem');
        });

        const btnShowAddProjectForm = document.getElementById('showAddProjectForm');
        btnShowAddProjectForm.addEventListener('click', () => {
            toggleModal('visible', 'modalContentAddProject', 'modalAddProject');
        });
        const btnHideAddProjectForm = document.getElementById('closeAddProjectForm');
        btnHideAddProjectForm.addEventListener('click', () => {
            toggleModal('hidden', 'modalContentAddProject', 'modalAddProject');
        });
    };

    const toggleModal = (value, idModalContent, idModal) => {
        const modalContent = document.getElementById(idModalContent);
        modalContent.style.visibility = value;
        const modal = document.getElementById(idModal);
        modal.style.visibility = value;
    };

    return {
        init,
        toggleModal,
    }
})();

export {domModal}