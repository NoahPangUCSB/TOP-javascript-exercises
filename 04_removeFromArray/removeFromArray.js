const removeFromArray = function(arr, ...elems) {
    for(const elem of elems) {
        const i = arr.indexOf(elem);
        if(i > -1) {
            arr.splice(i, 1);
        }
        
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
