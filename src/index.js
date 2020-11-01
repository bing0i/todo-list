const DisplayDOM = () => {
    const projects = [];

    const addEvents = () => {
        const btnAddProject = document.getElementById('btnAddProject');
        btnAddProject.addEventListener('click', () => {
            const inpAddProject = document.getElementById('inpAddProject');
            
            if (inpAddProject.value === '')
                return;
            
            projects.push(inpAddProject.value);

            addNewProject(inpAddProject.value, projects[projects.length - 1]);
            inpAddProject.value = '';
        });

        const btnAddTodoItem = document.getElementById('btnAddTodoItem');
        btnAddTodoItem.addEventListener('click', () => {
            const inpTextAddTodoItem = document.getElementById('inpTextAddTodoItem');
            
            if (inpTextAddTodoItem.value === '')
                return;
            
            addNewTodoItem(inpTextAddTodoItem.value);
            inpTextAddTodoItem.value = '';

            let modalContent = document.getElementById('modalContent');
            modalContent.style.visibility = "hidden";
            let modal = document.getElementById('modal');
            modal.style.visibility = "hidden";
        });
    };

    const addNewProject = (pjName, pjId) => {
        const project = document.createElement('div');
        project.className = 'project';
        project.id = 'pj' + pjId;

        const details = document.createElement('details');

        const summary = document.createElement('summary');
        summary.textContent = pjName;

        const btnRemove = document.createElement('button');
        btnRemove.className = 'removeItem';
        btnRemove.textContent = 'x';

        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'inpAddTodo';

        const btnAdd = document.createElement('button');
        btnAdd.className = 'addItem';
        btnAdd.textContent = '+';
        btnAdd.id = 'btnAddTodo';
        btnAdd.addEventListener('click', () => {
            if (input.value === '')
                return;
                
            addNewTodo(input.value, pjId);
            input.value = '';
        });

        summary.appendChild(btnRemove);

        details.appendChild(summary);
        details.appendChild(input);
        details.appendChild(btnAdd);
        details.appendChild(document.createElement('br'));

        project.appendChild(details);

        const projects = document.getElementById('projects');
        projects.appendChild(project);
    };

    const addNewTodoItem = (todoItemName) => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo';

        const label = document.createElement('label');
        label.className = 'title';
        label.textContent = todoItemName

        const input = document.createElement('input');
        input.type = 'checkbox';

        const btnRemove = document.createElement('button');
        btnRemove.className = 'removeItem';
        btnRemove.textContent = 'x';

        label.appendChild(input);
        todoItem.appendChild(label);
        todoItem.appendChild(btnRemove);

        const todoItems = document.getElementById('todoItems');
        todoItems.appendChild(todoItem);
    };

    const addNewTodo = (todoName, pjId) => {
        const span = document.createElement('span');
        span.className = 'title';
        span.textContent = todoName

        const btnRemove = document.createElement('button');
        btnRemove.className = 'removeItem';
        btnRemove.textContent = 'x';

        span.appendChild(btnRemove);

        const project = document.getElementById('pj' + pjId);

        const details = project.firstChild;
        details.appendChild(span);
        details.appendChild(document.createElement('br'));
    };

    return {
        addEvents,
    }
};

const d = DisplayDOM();
d.addEvents();

const toggleModalAddTodoItemForm = () => {
    let btnShow = document.getElementById('showForm');
    btnShow.addEventListener('click', () => {
        let modalContent = document.getElementById('modalContent');
        modalContent.style.visibility = "visible";
        let modal = document.getElementById('modal');
        modal.style.visibility = "visible";
    });

    let btnHide = document.getElementById('closeForm');
    btnHide.addEventListener('click', () => {
        let modalContent = document.getElementById('modalContent');
        modalContent.style.visibility = "hidden";
        let modal = document.getElementById('modal');
        modal.style.visibility = "hidden";
    });
};

toggleModalAddTodoItemForm();