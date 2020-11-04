const domModal = (() => {
    const init = () => {
        attachEventsToggleForm();
    };

    const attachEventsToggleForm = () => {
        const btnShowForm = document.getElementById('showForm');
        btnShowForm.addEventListener('click', () => {
            toggleModal('visible');
        });

        const btnHideForm = document.getElementById('closeForm');
        btnHideForm.addEventListener('click', () => {
            toggleModal('hidden');
        });
    };

    const toggleModal = (value) => {
        const modalContent = document.getElementById('modalContent');
        modalContent.style.visibility = value;
        const modal = document.getElementById('modal');
        modal.style.visibility = value;
    };

    return {
        init,
        toggleModal,
    }
})();

export {domModal}