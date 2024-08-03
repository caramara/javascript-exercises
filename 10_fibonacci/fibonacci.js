const fibonacci = function(index) {

    let parsedIndex;
    if(typeof index !== 'number') parsedIndex = parseInt(index);
    else parsedIndex = index;

    if(index==0) return 0;
    if(index < 0) return 'OOPS';

    const array = [1,1];
    for(let i=2; i<parsedIndex;i++){
        array.push(array[i-1]+array[i-2]);
    }
    return array[parsedIndex-1];
};

// Do not edit below this line
module.exports = fibonacci;
