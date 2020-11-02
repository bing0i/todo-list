import {Todo} from './Todo'
import {general} from './general'

const Project = (t, d) => {
    let _tilte = t;
    let _dueDate = d;
    let _todos = [];

    const getTitle = () => {
        return _tilte;
    };

    const getDueDate = () => {
        return _dueDate;
    };

    const addTodo = (info) => {
        let index = general.getNullIndex(_todos);
        _todos[index] = Todo(info[0], info[1]);
        return index;
    };

    const removeTodo = (tdId) => {
        _todos[tdId] = null;
    };

    const addTodoItem = (tdId, info) => {
        return _todos[tdId].addTodoItem(info);
    };

    const removeTodoItem = (tdId, tdiId) => {
        _todos[tdId].removeTodoItem(tdiId);
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

export {Project}