const general = (() => {
    const getNullIndex = (array) => {
        let index = array.indexOf(null);

        if (index > -1) 
            return index;
        else
            return array.length;
    };

    return {
        getNullIndex,
    }
})();

export {general}