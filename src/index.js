const Dom = () => {
    const projects = document.getElementById('projects');

    const addEvents = () => {
        const btnAddProject = document.getElementById('btnAddProject');
        btnAddProject.addEventListener('click', () => {
            const inpAddProject = document.getElementById('inpAddProject');
            
            if (inpAddProject.value === '')
                return;
            
            let pjIndex = data.addProject(null, [inpAddProject.value, '45']);

            addProject(inpAddProject.value, pjIndex);
            inpAddProject.value = '';
        });

        const btnAddTodoItem = document.getElementById('btnAddTodoItem');
        btnAddTodoItem.addEventListener('click', () => {
            const inpTextAddTodoItem = document.getElementById('inpTextAddTodoItem');
            
            if (inpTextAddTodoItem.value === '')
                return;

            let strClassName = inpTextAddTodoItem.className;
            let plus = strClassName.indexOf('+');

            let pjId = strClassName.slice(8, plus);
            let tdId = strClassName.slice(plus + 9); 
        
            let tdiId = data.addTodoItem(pjId, tdId, null, [inpTextAddTodoItem.value, 'asdd']);

            addTodoItem(inpTextAddTodoItem.value, pjId, tdId, tdiId);
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

            data.removeProject(pjId);
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
                
            let todoId = data.addTodo(input.id.toString().slice(5), null, [inpTextAddTodoItem.value, '222']);

            addTodo(input.value, pjId, todoId);
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
            data.removeTodoItem(pjId, tdId, tdiId);
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

            data.removeTodo(pjId, tdId);
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
        let project = document.getElementById('divPj' + pjId);

        projects.removeChild(project);
    };

    const removeTodo = (pjId, tdId) => {
        let todo = document.getElementById('spanPj' + pjId + 'spanTd' + tdId);
        let br = document.getElementById('brTd' + tdId);

        let project = document.getElementById('divPj' + pjId);
        let details = project.firstChild;
        details.removeChild(todo);
        details.removeChild(br);
    };

    const removeTodoItem = (pjId, tdId, tdiId) => {
        let todoItem = document.getElementById('divPj' + pjId + '+divTd' + tdId + '+divTdi' + tdiId);
        let todoItems = document.getElementById('todoItems');
        todoItems.removeChild(todoItem);
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

    const addTodo = (pjId, todo, info) => {
        return projects[pjId].addTodo(todo, info);
    };

    const removeTodo = (pjId, todoId) => {
        projects[pjId].removeTodo(todoId);
    };

    const addTodoItem = (pjId, tdId, todoItem, info) => {
        return projects[pjId].addTodoItem(tdId, todoItem, info);
    };

    const removeTodoItem = (pjId, tdId, tdiId) => {
        projects[pjId].removeTodoItem(tdId, tdiId);
    };

    return {
        addProject,
        removeProject,
        addTodo,
        removeTodo,
        addTodoItem,
        removeTodoItem,
    }
})();

const Project = (t, d) => {
    let _tilte = t;
    let _dueDate = d;

    let todos = [];

    const getTitle = () => {
        return _tilte;
    };

    const getDueDate = () => {
        return _dueDate;
    };

    const addTodo = (todo, info) => {
        let index = todos.indexOf(null);

        if (index > -1) {
            if (todo != null)
                todos[index] = todo;
            else
                todos[index] = Todo(info[0], info[1]);
        }
        else {
            if (todo != null)
                todos.push(todo);
            else
                todos.push(Todo(info[0], info[1]));
        }

        if (index === -1)
            index = todos.length - 1;

        return index;
    };

    const removeTodo = (tdId) => {
        todos[tdId] = null;
    };

    const addTodoItem = (tdId, todoItem, info) => {
        return todos[tdId].addTodoItem(todoItem, info);
    };

    const removeTodoItem = (tdId, tdiId) => {
        todos[tdId].removeTodoItem(tdiId);
    };
    
    return {
        getTitle,
        getDueDate,
        addTodo,
        removeTodo,
        addTodoItem,
        removeTodoItem,
    }
};

const Todo = (t, d) => {
    let _tilte = t;
    let _dueDate = d;

    let todoItems = [];

    const getTitle = () => {
        return _tilte;
    };

    const getDueDate = () => {
        return _dueDate;
    };

    const addTodoItem = (todoItem, info) => {
        let index = todoItems.indexOf(null);

        if (index > -1) {
            if (todoItem != null)
                todoItems[index] = todoItem;
            else
                todoItems[index] = TodoItem(info[0], info[1]);
        }
        else {
            if (todoItem != null)
                todoItems.push(todoItem);
            else
                todoItems.push(TodoItem(info[0], info[1]));
        }

        if (index === -1)
            index = todoItems.length - 1;

        return index;
    };

    const removeTodoItem = (tdiId) => {
        todoItems[tdiId] = null;
    };
    
    return {
        getTitle,
        getDueDate,
        addTodoItem,
        removeTodoItem,
    }
};

const TodoItem = (t, d) => {
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
    }
};

const d = Dom();
d.addEvents();