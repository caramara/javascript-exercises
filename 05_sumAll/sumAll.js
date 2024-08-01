const sumAll = function(operand1, operand2) {
    let sum = 0;
    let max, min;

    if( !Number.isInteger(operand1) || !Number.isInteger(operand2)) return "ERROR";
    if( operand1<0 ||operand2<0) return "ERROR";

    if( operand1>operand2){
        max=parseInt(operand1);
        min=parseInt(operand2);
    }else if( operand1<=operand2){
        max=parseInt(operand2);
        min=parseInt(operand1);
    } 

    for(let i=min;i<=max;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
