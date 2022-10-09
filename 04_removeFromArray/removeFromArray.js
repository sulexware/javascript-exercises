const removeFromArray = function(arg1, ...arg2) {
    let i = 0;
        for (const arg of arg2){
            for(const element of arg1){
                if( arg === element){
                    arg1.splice(i, 1);
                }

                i++;
            }
            
           i=0;
        }

        return arg1
};

// Do not edit below this line
module.exports = removeFromArray;
