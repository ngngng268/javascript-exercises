const findTheOldest = function findTheOldest (arr) {
  const currentYear = new Date().getFullYear() ; //get current year
  arr.map(person => {
    if (person.yearOfDeath !== undefined) {
       (person["age"] = (parseInt(person.yearOfDeath) - parseInt(person.yearOfBirth)))
      } else { (person["age"] = (currentYear - parseInt(person.yearOfBirth)))}
    }, []) ;
  arr.sort((a,b) => (a.age - b.age)).reverse();
  return (arr[0]);  
};

// Do not edit below this line
module.exports = findTheOldest;
