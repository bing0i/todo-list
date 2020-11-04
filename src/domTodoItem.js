import {getIds} from './getIds'
import {projects} from './projects'
import {domModal} from './domModal'

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

            let ids = getIds.parseTodoId(inpTextAddTodoItem.className);
            let tdiId = projects.addTodoItem(ids[0], ids[1], [inpTextAddTodoItem.value, 'asdd']);
            addTodoItem(inpTextAddTodoItem.value, ids[0], ids[1], tdiId);

            inpTextAddTodoItem.value = '';
            domModal.toggleModal('hidden');
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
        btnRemove.textContent = '-';
        btnRemove.addEventListener('click', () => {
            removeTodoItem(pjId, tdId, tdiId);
            projects.removeTodoItem(pjId, tdId, tdiId);
        });

        label.appendChild(input);
        todoItem.appendChild(label);
        todoItem.appendChild(btnRemove);

        const todoItems = document.getElementById('todoItems');
        todoItems.appendChild(todoItem);
    };

    const removeTodoItem = (pjId, tdId, tdiId) => {
        const todoItem = document.getElementById('divPj' + pjId + '+divTd' + tdId + '+divTdi' + tdiId);
        const todoItems = document.getElementById('todoItems');
        todoItems.removeChild(todoItem);
    };

    return {
        init,
    }
})();

export {domTodoItem}