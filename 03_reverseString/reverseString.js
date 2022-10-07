const reverseString = function(myStr) {
    let myOutput ='';

    if(myStr !== ''){

        let myArray = myStr.split("");

        for(let i = myArray.length - 1; i >= 0; i--){

            myOutput += myArray[i];
        }

    }

    return myOutput

};

// Do not edit below this line
module.exports = reverseString;
