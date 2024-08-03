const findTheOldest = function(people) {
    const updatedPeople = people.map((person=>{
       // person['age']=getAge(person.yearOfBirth, person.yearOfDeath);
       // return person;
        //Or use the spread operator to ensure all other properties remain unchanged
        return {...person, age: getAge(person.yearOfBirth, person.yearOfDeath)};
    
    }));
    const sortedPeople = updatedPeople.sort((a, b)=>{
        return a['age']>b['age']?-1:1;
    })
    return sortedPeople[0];
};
function getAge(birth, death){
    if (!death) {
        death = new Date().getFullYear();
      }
    return death-birth;
}
// Do not edit below this line
module.exports = findTheOldest;
