import {projects} from './projects';
import {domModal} from './domModal';

const domTodoItem = (() => {
    const init = () => {
        attachEventAddTodoItem();
    };

    const attachEventAddTodoItem = () => {
        const btnAddTodoItem = document.getElementById('btnAddTodoItem');
        btnAddTodoItem.addEventListener('click', () => {
            const inpTextAddTodoItem = document.getElementById('inpTextAddTodoItem');
            if (inpTextAddTodoItem.value === '')
                return;

            let plus = inpTextAddTodoItem.className.indexOf('+');
            let pjId = inpTextAddTodoItem.className.slice(8, plus);
            let tdId = inpTextAddTodoItem.className.slice(plus + 9); 

            let tdiId = projects.addTodoItem(pjId, tdId, [inpTextAddTodoItem.value, 'asdd']);
            addTodoItem(inpTextAddTodoItem.value, pjId, tdId, tdiId);

            inpTextAddTodoItem.value = '';
            domModal.toggleModal('hidden', 'modalContentAddTodoItem', 'modalAddTodoItem');
        });
    };

    const addTodoItem = (todoItemName, pjId, tdId, tdiId) => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todoItem';
        todoItem.id = 'divPj' + pjId + '+divTd' + tdId + '+divTdi' + tdiId;

        const label = document.createElement('label');
        label.className = 'title';
        label.textContent = todoItemName

        const input = document.createElement('input');
        input.type = 'checkbox';

        const btnRemove = document.createElement('button');
        btnRemove.className = 'removeItem';
        btnRemove.textContent = 'x';
        btnRemove.addEventListener('click', () => {
            removeTodoItem(pjId, tdId, tdiId);
            projects.removeTodoItem(pjId, tdId, tdiId);
        });

        label.appendChild(input);
        todoItem.appendChild(label);
        todoItem.appendChild(btnRemove);

        const divItems = document.getElementById('items');
        if (divItems === null) {
            const divItems = document.createElement('div');
            divItems.id = 'items';
            divItems.appendChild(todoItem);
            
            const todoItems = document.getElementById('todoItems');
            todoItems.appendChild(divItems);
        } else {
            divItems.appendChild(todoItem);
        }
    };

    const removeTodoItem = (pjId, tdId, tdiId) => {
        const todoItem = document.getElementById('divPj' + pjId + '+divTd' + tdId + '+divTdi' + tdiId);
        const todoItems = document.getElementById('todoItems');
        todoItems.removeChild(todoItem);
    };

    return {
        init,
        addTodoItem,
    }
})();

export {domTodoItem}