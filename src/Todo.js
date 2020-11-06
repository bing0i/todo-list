import {TodoItem} from './TodoItem';
import {general} from './general';

const Todo = (t, d) => {
    let _tilte = t;
    let _dueDate = d;
    let _todoItems = [];

    const getTodoItem = (index) => {
        return _todoItems[index];
    };

    const getTodoItemsLength = () => {
        return _todoItems.length;
    };

    const getTitle = () => {
        return _tilte;
    };

    const getDueDate = () => {
        return _dueDate;
    };

    const addTodoItem = (info) => {
        let index = general.getNullIndex(_todoItems);
        _todoItems[index] = TodoItem(info[0], info[1]);
        return index;
    };

    const removeTodoItem = (tdiId) => {
        _todoItems[tdiId] = null;
    };
    
    return {
        getTodoItem,
        getTodoItemsLength,
        getTitle,
        getDueDate,
        addTodoItem,
        removeTodoItem,
    }
};

export {Todo}