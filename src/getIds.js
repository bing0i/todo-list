const getIds = (() => {
    const parseProjectId = (str) => {

    };

    const parseTodoId = (str) => {
        let plus = str.indexOf('+');
        let pjId = str.slice(8, plus);
        let tdId = str.slice(plus + 9); 

        return [pjId, tdId];
    };

    const parseTodoItemId = (str) => {
        
    };

    return {
        parseProjectId,
        parseTodoId,
        parseTodoItemId,
    }
})();

export {getIds}