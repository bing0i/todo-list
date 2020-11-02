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

export {TodoItem}