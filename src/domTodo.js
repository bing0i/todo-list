import {projects} from './projects';
import {domTodoItem} from './domTodoItem';


const domTodo = (() => {
    const init = () => {

    };

    const toggleChosenTodo = (element) => {
        if (element.tagName !== 'DIV')
            element = element.parentNode;

        if (element.classList.contains('chosenTodo'))
            return;
        else {
            const todos = Array.from(document.querySelectorAll('.todo'));
            for (let i = 0; i < todos.length; ++i) {
                if (todos[i].classList.contains('chosenTodo'))
                    todos[i].className = todos[i].className.slice(0, todos[i].className.indexOf('chosenTodo') - 1);
            }
            element.className += ' chosenTodo';

            let plus = String(element.id).indexOf('+');
            let pjId = String(element.id).slice(5, plus);
            let tdId = String(element.id).slice(plus + 6);
            showTodoItems(pjId, tdId);
        }
    };

    const showTodoItems = (pjId, tdId) => {
        let todoItems = document.getElementById('todoItems');
        if (todoItems.lastChild.id === 'items')
            todoItems.removeChild(todoItems.lastChild);

        let project = projects.getProject(pjId);
        let todo = project.getTodo(tdId);
        for (let i = 0; i < todo.getTodoItemsLength(); ++i) {
            domTodoItem.addTodoItem(
                todo.getTodoItem(i).getTitle(), 
                pjId, 
                tdId,
                i,
            );
        }
    };

    const addTodo = (todoName, pjId, tdId) => {
        const div = document.createElement('div');
        div.className = 'todo';
        div.id = 'divPj' + pjId + '+divTd' + tdId;
        div.addEventListener('click', () => {
            const inpTextAddTodoItem = document.getElementById('inpTextAddTodoItem');
            inpTextAddTodoItem.className = 'inpTdiPj' + pjId + '+' + 'inpTdiTd' + tdId;
            
            toggleChosenTodo(event.target);
        });

        const span = document.createElement('span');
        span.textContent = todoName;
        
        const btnRemove = document.createElement('button');
        btnRemove.className = 'removeItem';
        btnRemove.textContent = 'x';
        btnRemove.addEventListener('click', () => {
            removeTodo(pjId, tdId);

            projects.removeTodo(pjId, tdId);
        });

        span.appendChild(btnRemove);
        div.appendChild(span);

        const project = document.getElementById('divPj' + pjId);
        const details = project.firstChild;
        details.appendChild(div);
    };

    const removeTodo = (pjId, tdId) => {
        const todo = document.getElementById('divPj' + pjId + '+divTd' + tdId);
        const project = document.getElementById('divPj' + pjId);
        const details = project.firstChild;
        details.removeChild(todo);
    };

    return {
        // init,
        addTodo,
    }
})();

export {domTodo}