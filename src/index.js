import {dom} from './dom';

dom.init();
// TODO: chosenTodoItems (have not saved checkbox state yet)
// TODO: localStorage

//Below is to create sample projects
const addSampleProjectsTodos = (pjName, pjId, tdName) => {
    const btnShowAddProjectForm = document.getElementById('showAddProjectForm');
    btnShowAddProjectForm.click();
    const inpTextAddProject = document.getElementById('inpTextAddProject');
    inpTextAddProject.value = pjName;
    const btnAddProject = document.getElementById('btnAddProject');
    btnAddProject.click();
    const inpPj = document.getElementById('inpPj' + pjId);
    for (let i = 0; i < tdName.length; ++i) {
        inpPj.value = tdName[i];
        const btnTdPj = document.getElementById('btnTdPj' + pjId);
        btnTdPj.click();
    }
}

const addSampleTodoItems = (tdiName, pjId, tdId) => {
    const divPjdivTd = document.getElementById('divPj' + pjId + '+divTd' + tdId);
    divPjdivTd.click();
    const btnShowAddTodoItemForm = document.getElementById('showAddTodoItemForm');
    const inpTextAddTodoItem = document.getElementById('inpTextAddTodoItem');
    const btnAddTodoItem = document.getElementById('btnAddTodoItem');
    for (let i = 0; i < tdiName.length; ++i) {
        btnShowAddTodoItemForm.click();
        inpTextAddTodoItem.value = tdiName[i];
        btnAddTodoItem.click();
    }
}

addSampleProjectsTodos(
    'Helloooo', 
    0, 
    ['How are you?', 'Nice to meet you'],
);
addSampleProjectsTodos(
    'Hii, again', 
    1, 
    ['What would you like to do?', 'Let\'s add something', 'By clicking \'+\' buttons', 'Delete something with \'x\' buttons'],
);
addSampleTodoItems(
    ['Take a coffee', 'Eat Phoooooooooo'],
    1, 
    0,
);
addSampleTodoItems(
    ['Doing welllllll', 'Soooooooooo tired'],
    0, 
    0,
);
addSampleTodoItems(
    ['Hope you will have a great day!', 'Yay', 'Yayyyyyy'],
    0, 
    1,
);
const clickOnSampleProject = (() => {
    const divFirstProject = document.getElementById('divPj1');
    const details = divFirstProject.firstChild;
    details.open = true;
    const divPj1divTd0 = document.getElementById('divPj1+divTd0');
    divPj1divTd0.click();
})();