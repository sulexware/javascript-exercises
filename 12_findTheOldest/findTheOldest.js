const findTheOldest = function(objs) {

    return objs.reduce((itema, itemb) => {
        const first = getAge(itema.yearOfBirth, itema.yearOfDeath);
        const second = getAge(itemb.yearOfBirth, itemb.yearOfDeath);
        return first < second ? itemb : itema
    });
 
};

const getAge = function(myDOB, myDOD){
    if(!myDOD)
      myDOD = new Date().getFullYear();
    return myDOD - myDOB
  }

// Do not edit below this line
module.exports = findTheOldest;
