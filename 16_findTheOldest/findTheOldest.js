const findTheOldest = function(array) {
    for (person of array){
        const thisYear = new Date().getFullYear()
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = thisYear
        }
        person.age = person.yearOfDeath - person.yearOfBirth;
    }
    array.sort((a,b) => b.age - a.age);
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
