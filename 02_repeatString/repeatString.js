const repeatString = function(myStr, myVal) {
    let myOutput='';
    if(!isNaN(myVal) && myVal < 0){

        myOutput = 'ERROR';

    }else{

        for (let i=0; i < myVal; i++){
            myOutput += myStr;
        }
    }
    return myOutput.replace(/\s/g,'')
};

// Do not edit below this line
module.exports = repeatString;
