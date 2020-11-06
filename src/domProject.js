import {domTodo} from './domTodo';
import {projects} from './projects';
import {domModal} from './domModal';

const domProject = (() => {
    const init = () => {
        attachEventAddProject();
    };

    const attachEventAddProject = () => {
        const btnAddProject = document.getElementById('btnAddProject');
        btnAddProject.addEventListener('click', () => {
            const inpTextAddProject = document.getElementById('inpTextAddProject');
            if (inpTextAddProject.value === '')
                return;
            
            let pjIndex = projects.addProject([inpTextAddProject.value, '45']);
            addProject(inpTextAddProject.value, pjIndex);

            inpTextAddProject.value = '';

            domModal.toggleModal('hidden', 'modalContentAddProject', 'modalAddProject');
        });
    };

    const addProject = (pjName, pjId) => {
        const project = document.createElement('div');
        project.className = 'project';
        project.id = 'divPj' + pjId;
        project.addEventListener('click', () => {
            toggleChosenProject(project);
        });

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
        btnAdd.id = 'btnTdPj' + pjId;
        btnAdd.addEventListener('click', () => {
            if (input.value === '')
                return;
                
            let todoId = projects.addTodo(input.id.toString().slice(5), [inpTextAddTodoItem.value, '222']);

            domTodo.addTodo(input.value, pjId, todoId);
            input.value = '';
        });

        const divInpBtn = document.createElement('div');
        divInpBtn.className = 'divInpBtn';
        divInpBtn.appendChild(input);
        divInpBtn.appendChild(btnAdd);

        summary.appendChild(btnRemove);

        details.appendChild(summary);
        details.appendChild(divInpBtn);

        project.appendChild(details);

        const divProjects = document.getElementById('projects');
        divProjects.appendChild(project);
    };

    const removeProject = (pjId) => {
        const project = document.getElementById('divPj' + pjId);
        const divProjects = document.getElementById('projects');
        divProjects.removeChild(project);
    };

    const toggleChosenProject = (element) => {
        if (element.tagName !== 'DIV')
            element = element.parentNode;

        if (element.classList.contains('chosenProject'))
            return;
        else {
            addChosenProjectClass(element);
            openOneDetailsOnly(element.firstChild);
        }
    };

    const addChosenProjectClass = (project) => {
        const todos = Array.from(document.querySelectorAll('.project'));
        for (let i = 0; i < todos.length; ++i) {
            if (todos[i].classList.contains('chosenProject'))
                todos[i].className = todos[i].className.slice(0, todos[i].className.indexOf('chosenProject') - 1);
        }
        project.className += ' chosenProject';
    };

    const openOneDetailsOnly = (targetDetails) => {
        const detailss = document.querySelectorAll('details');
        detailss.forEach((details) => {
            if (details !== targetDetails)
                details.removeAttribute('open');
        });
    };

    return {
        init,
    }
})();

export {domProject}