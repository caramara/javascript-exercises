const removeFromArray = function(array, ...elements) {
    let removed = array;
    for(let element of elements){
        removed = removed.filter((item)=> item!==element);
    }
    return removed;
};


// Do not edit below this line
module.exports = removeFromArray;
