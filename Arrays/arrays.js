function addingFirstNameAndLastName(peopleArr) {
  let newArray = peopleArr.map(person => {
    return {fullName: person.firstName + " " + person.lastName} 
  })  
  return newArray
}


module.exports = addingFirstNameAndLastName

