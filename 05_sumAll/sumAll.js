const sumAll = function(arg1, arg2) {
    let sum = 0;
    if(arg1 < 0 || arg2 < 0 || isNaN(arg1) || isNaN(arg2) || typeof arg1 === 'string' || typeof arg2 === 'string'){

        sum ='ERROR';
    }else{
        if(arg2 > arg1){
            for(let i = arg1; i <= arg2; i++){
                sum +=i;
            }
        }else{
            for(let i = arg2; i <= arg1; i++){
                sum +=i;
            }
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
