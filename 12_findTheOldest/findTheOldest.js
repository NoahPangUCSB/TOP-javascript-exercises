const findTheOldest = function(people) {
    const peopleByAge = people.sort(function(personA, personB) {
        personAAge = "yearOfDeath" in personA ? personA.yearOfDeath - personA.yearOfBirth : 
                            (new Date).getFullYear() - personA.yearOfBirth;
        personBAge = "yearOfDeath" in personB ? personB.yearOfDeath - personB.yearOfBirth : 
                            (new Date).getFullYear() - personB.yearOfBirth;
        return personAAge < personBAge ? 1 : -1;
    });

    return peopleByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
