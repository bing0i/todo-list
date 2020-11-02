const Dom = () => {
    const projects = document.getElementById('projects');

    const addEvents = () => {
        const btnAddProject = document.getElementById('btnAddProject');
        btnAddProject.addEventListener('click', () => {
            const inpAddProject = document.getElementById('inpAddProject');
            
            if (inpAddProject.value === '')
                return;
            
            let pjIndex = data.addProject(null, [inpAddProject.value, '45']);

            addNewProject(inpAddProject.value, pjIndex);
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

        let btnShowForm = document.getElementById('showForm');
        btnShowForm.addEventListener('click', () => {
            let modalContent = document.getElementById('modalContent');
            modalContent.style.visibility = "visible";
            let modal = document.getElementById('modal');
            modal.style.visibility = "visible";
        });

        let btnHideForm = document.getElementById('closeForm');
        btnHideForm.addEventListener('click', () => {
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
        btnRemove.id = 'pj' + pjId;
        btnRemove.textContent = 'x';
        btnRemove.addEventListener('click', () => {
            removeProject(pjId);

            data.removeProject(pjId);
        });

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

    const removeProject = (pjId) => {
        let project = document.getElementById('pj' + pjId);

        projects.removeChild(project);
    };

    return {
        addEvents,
    }
};

const data = (() => {
    let projects = [];

    const addProject = (pj, info) => {
        let index = projects.indexOf(null);

        if (index > -1) {
            if (pj != null)
                projects[index] = pj;
            else
                projects[index] = Project(info[0], info[1]);
        }
        else {
            if (pj != null)
                projects.push(pj);
            else
                projects.push(Project(info[0], info[1]));
        }

        if (index === -1)
            index = projects.length - 1;

        return index;
    };

    const removeProject = (index) => {
        projects[index] = null;
    };

    return {
        addProject,
        removeProject,
    }
})();

const Project = (t, d) => {
    let _tilte = t;
    let _dueDate = d;

    const getTitle = () => {
        return _tilte;
    };

    const getDueDate = () => {
        return _dueDate;
    };
    
    return {
        getTitle,
        getDueDate,
    };
};

const d = Dom();
d.addEvents();