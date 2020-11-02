import {Project} from './Project'
import {general} from './general'

const projects = (() => {
    let _projects = [];

    const addProject = (info) => {
        let index = general.getNullIndex(_projects);
        _projects[index] = Project(info[0], info[1]);
        return index;
    };

    const removeProject = (index) => {
        _projects[index] = null;
    };

    const addTodo = (pjId, info) => {
        return _projects[pjId].addTodo(info);
    };

    const removeTodo = (pjId, todoId) => {
        _projects[pjId].removeTodo(todoId);
    };

    const addTodoItem = (pjId, tdId, info) => {
        return _projects[pjId].addTodoItem(tdId, info);
    };

    const removeTodoItem = (pjId, tdId, tdiId) => {
        _projects[pjId].removeTodoItem(tdId, tdiId);
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

export {projects}