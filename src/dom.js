import {projects} from './projects'
import {getIds} from './getIds'

const dom = (() => {

    const addEvents = () => {
        attachEventAddProject();
        attachEventAddTodoItem();
        attachEventToggleForm();
    };

    const attachEventAddProject = () => {
        const btnAddProject = document.getElementById('btnAddProject');
        btnAddProject.addEventListener('click', () => {
            const inpAddProject = document.getElementById('inpAddProject');
            if (inpAddProject.value === '')
                return;
            
            let pjIndex = projects.addProject([inpAddProject.value, '45']);
            addProject(inpAddProject.value, pjIndex);

            inpAddProject.value = '';
        });
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
            toggleModal('hidden');
        });
    };

    const attachEventToggleForm = () => {
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

    const addProject = (pjName, pjId) => {
        const project = document.createElement('div');
        project.className = 'project';
        project.id = 'divPj' + pjId;

        const details = document.createElement('details');

        const summary = document.createElement('summary');
        summary.textContent = pjName;

        const btnRemove = document.createElement('button');
        btnRemove.className = 'removeItem';
        btnRemove.id = 'btnPj' + pjId;
        btnRemove.textContent = 'x';
        btnRemove.addEventListener('click', () => {
            removeProject(pjId);

            projects.removeProject(pjId);
        });

        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'inpPj' + pjId;

        const btnAdd = document.createElement('button');
        btnAdd.className = 'addItem';
        btnAdd.textContent = '+';
        btnAdd.id = 'btnAddTodo';
        btnAdd.addEventListener('click', () => {
            if (input.value === '')
                return;
                
            let todoId = projects.addTodo(input.id.toString().slice(5), [inpTextAddTodoItem.value, '222']);

            addTodo(input.value, pjId, todoId);
            input.value = '';
        });

        summary.appendChild(btnRemove);

        details.appendChild(summary);
        details.appendChild(input);
        details.appendChild(btnAdd);
        details.appendChild(document.createElement('br'));

        project.appendChild(details);

        const divProjects = document.getElementById('projects');
        divProjects.appendChild(project);
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

        const todoItems = document.getElementById('todoItems');
        todoItems.appendChild(todoItem);
    };

    const addTodo = (todoName, pjId, tdId) => {
        const span = document.createElement('span');
        span.className = 'todo';
        span.id = 'spanPj' + pjId + 'spanTd' + tdId;
        span.textContent = todoName;
        span.addEventListener('click', () => {
            const inpTextAddTodoItem = document.getElementById('inpTextAddTodoItem');
            inpTextAddTodoItem.className = 'inpTdiPj' + pjId + '+' + 'inpTdiTd' + tdId;
        });

        const btnRemove = document.createElement('button');
        btnRemove.className = 'removeItem';
        btnRemove.textContent = 'x';
        btnRemove.addEventListener('click', () => {
            removeTodo(pjId, tdId);

            projects.removeTodo(pjId, tdId);
        });

        const br = document.createElement('br');
        br.id = 'brTd' + tdId;

        span.appendChild(btnRemove);

        const project = document.getElementById('divPj' + pjId);

        const details = project.firstChild;
        details.appendChild(span);
        details.appendChild(br);
    };

    const removeProject = (pjId) => {
        const project = document.getElementById('divPj' + pjId);
        const divProjects = document.getElementById('projects');
        divProjects.removeChild(project);
    };

    const removeTodo = (pjId, tdId) => {
        const todo = document.getElementById('spanPj' + pjId + 'spanTd' + tdId);
        const br = document.getElementById('brTd' + tdId);

        const project = document.getElementById('divPj' + pjId);
        const details = project.firstChild;
        details.removeChild(todo);
        details.removeChild(br);
    };

    const removeTodoItem = (pjId, tdId, tdiId) => {
        const todoItem = document.getElementById('divPj' + pjId + '+divTd' + tdId + '+divTdi' + tdiId);
        const todoItems = document.getElementById('todoItems');
        todoItems.removeChild(todoItem);
    };

    return {
        addEvents,
    }
})();

export {dom}